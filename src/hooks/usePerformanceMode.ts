'use client';

import { useTheme } from './useTheme';

export const usePerformanceMode = () => {
  const { isLightMode } = useTheme();

  const getOptimizedVariants = (originalVariants: any) => {
    if (isLightMode) {
      // Return completely static variants for light mode
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
    if (isLightMode) {
      return {
        duration: 0,
        ease: "linear"
      };
    }
    return originalTransition;
  };

  const shouldAnimate = !isLightMode;

  const getOptimizedWhileHover = (originalHover: any) => {
    if (isLightMode) {
      return {};
    }
    return originalHover;
  };

  const getOptimizedWhileTap = (originalTap: any) => {
    if (isLightMode) {
      return {};
    }
    return originalTap;
  };

  const getOptimizedAnimate = (originalAnimate: any) => {
    if (isLightMode) {
      return {};
    }
    return originalAnimate;
  };

  const getOptimizedInitial = (originalInitial: any) => {
    if (isLightMode) {
      return { opacity: 1 };
    }
    return originalInitial;
  };

  return {
    isLightMode,
    shouldAnimate,
    getOptimizedVariants,
    getOptimizedTransition,
    getOptimizedWhileHover,
    getOptimizedWhileTap,
    getOptimizedAnimate,
    getOptimizedInitial
  };
};
