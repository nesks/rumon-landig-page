'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

interface OptimizedScrollProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  onScroll?: (scrollY: number) => void;
}

const OptimizedScroll = ({ 
  children, 
  className = '', 
  threshold = 0.1,
  onScroll 
}: OptimizedScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);
  const { shouldAnimate } = usePerformanceMode();

  const handleScroll = useCallback(() => {
    if (!ticking.current && shouldAnimate) {
      requestAnimationFrame(() => {
        if (containerRef.current && onScroll) {
          const scrollY = window.scrollY;
          onScroll(scrollY);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, [onScroll, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) return;

    const container = containerRef.current;
    if (!container) return;

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, shouldAnimate]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!shouldAnimate) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold }
    );

    const elements = containerRef.current?.querySelectorAll('[data-animate]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, shouldAnimate]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default OptimizedScroll;

