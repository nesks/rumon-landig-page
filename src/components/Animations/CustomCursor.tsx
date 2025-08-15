'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [mounted, setMounted] = useState(false);
  const { isLightMode } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined' && !isLightMode) {
      const mouseMove = (e: MouseEvent) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };

      const handleMouseOver = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target || typeof target.closest !== 'function') return;
        
        // Check if target or any parent has cursor classes
        const hoverElement = target.closest('.cursor-hover');
        const clickElement = target.closest('.cursor-click');
        const textElement = target.closest('.cursor-text');
        
        if (hoverElement) {
          setIsHovering(true);
          setCursorVariant('hover');
        } else if (clickElement) {
          setCursorVariant('click');
        } else if (textElement) {
          setCursorVariant('text');
        } else {
          setIsHovering(false);
          setCursorVariant('default');
        }
      };

      const handleMouseOut = (e: Event) => {
        const target = e.target as HTMLElement;
        if (!target || typeof target.closest !== 'function') return;
        
        // Only reset if we're not moving to a child element
        const relatedTarget = (e as MouseEvent).relatedTarget as HTMLElement;
        if (!relatedTarget || !target.contains(relatedTarget)) {
          setIsHovering(false);
          setCursorVariant('default');
        }
      };

      window.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [isLightMode]);

  // Don't render cursor in light mode
  if (!mounted || isLightMode) return null;

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(0, 255, 136, 0.3)',
      border: '2px solid #00ff88',
      mixBlendMode: 'screen' as const,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      backgroundColor: 'rgba(0, 212, 255, 0.2)',
      border: '2px solid #00d4ff',
      mixBlendMode: 'screen' as const,
    },
    click: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
      backgroundColor: 'rgba(0, 255, 136, 0.8)',
      border: '2px solid #00ff88',
      mixBlendMode: 'screen' as const,
    },
    text: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 16,
      scaleX: 0.1,
      scaleY: 1.5,
      backgroundColor: 'rgba(0, 212, 255, 0.8)',
      border: '2px solid #00d4ff',
      mixBlendMode: 'screen' as const,
    },
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden lg:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          boxShadow: isHovering 
            ? '0 0 20px #00ff88, inset 0 0 20px rgba(0, 255, 136, 0.3)' 
            : '0 0 10px #00ff88',
        }}
      />
      
      {/* Cyber Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-40 hidden lg:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.2,
        }}
        style={{
          background: 'linear-gradient(45deg, #00ff88, #00d4ff)',
          boxShadow: '0 0 10px #00ff88',
        }}
      />
      
      {/* Cyber Grid Effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-30 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            x: mousePosition.x - 50,
            y: mousePosition.y - 50,
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-24 h-24 border border-green-400/50 rounded-lg relative">
            <div className="absolute inset-2 border border-green-400/30 rounded-md" />
            <div className="absolute inset-4 border border-green-400/20 rounded-sm" />
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;