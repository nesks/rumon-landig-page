'use client';

import { useState, useEffect, useMemo } from 'react';
import { useTheme } from './useTheme';

// Type declarations for browser APIs
declare global {
  interface Navigator {
    deviceMemory?: number;
    connection?: {
      effectiveType: string;
    };
    getBattery?: () => Promise<BatteryManager>;
  }
  
  interface BatteryManager {
    level: number;
  }
}

export const usePerformanceMode = () => {
  const { isLightMode } = useTheme();
  const [isLowPerformance, setIsLowPerformance] = useState(false);

  // Detect low performance devices
  useEffect(() => {
    const checkPerformance = () => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      // Check for low-end devices (basic heuristic)
      const isMobile = window.innerWidth <= 768;
      const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const hasSlowConnection = navigator.connection && 
        (navigator.connection.effectiveType === 'slow-2g' || 
         navigator.connection.effectiveType === '2g');
      
      // Check for battery status if available
      const checkBattery = async () => {
        if ('getBattery' in navigator && navigator.getBattery) {
          try {
            const battery = await navigator.getBattery();
            return battery.level < 0.2; // Low battery
          } catch {
            return false;
          }
        }
        return false;
      };

      checkBattery().then(hasLowBattery => {
        const shouldReducePerformance = prefersReducedMotion || 
                                       isMobile || 
                                       hasLowMemory || 
                                       hasSlowConnection || 
                                       hasLowBattery;
        
        setIsLowPerformance(shouldReducePerformance);
      });
    };

    checkPerformance();
    
    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkPerformance);
    
    return () => mediaQuery.removeEventListener('change', checkPerformance);
  }, []);

  // Memoize the shouldAnimate value to prevent unnecessary re-renders
  const shouldAnimate = useMemo(() => {
    return !isLightMode && !isLowPerformance;
  }, [isLightMode, isLowPerformance]);

  const getOptimizedVariants = (originalVariants: any) => {
    if (!shouldAnimate) {
      // Return static variants for better performance
      return {
        hidden: { opacity: 1 },
        visible: { 
          opacity: 1,
          transition: { duration: 0 }
        }
      };
    }
    return originalVariants;
  };

  const getOptimizedTransition = (originalTransition: any) => {
    if (!shouldAnimate) {
      return {
        duration: 0,
        ease: "linear"
      };
    }
    return originalTransition;
  };

  const getOptimizedWhileHover = (originalHover: any) => {
    if (!shouldAnimate) {
      return {};
    }
    return originalHover;
  };

  const getOptimizedWhileTap = (originalTap: any) => {
    if (!shouldAnimate) {
      return {};
    }
    return originalTap;
  };

  const getOptimizedAnimate = (originalAnimate: any) => {
    if (!shouldAnimate) {
      return {};
    }
    return originalAnimate;
  };

  const getOptimizedInitial = (originalInitial: any) => {
    if (!shouldAnimate) {
      return { opacity: 1 };
    }
    return originalInitial;
  };

  return {
    isLightMode,
    isLowPerformance,
    shouldAnimate,
    getOptimizedVariants,
    getOptimizedTransition,
    getOptimizedWhileHover,
    getOptimizedWhileTap,
    getOptimizedAnimate,
    getOptimizedInitial
  };
};
