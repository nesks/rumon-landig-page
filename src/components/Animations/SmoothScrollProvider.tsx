'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const { isLightMode } = useTheme();
  
  // Disable spring animation in light mode for better performance
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isLightMode ? 1000 : 100,
    damping: isLightMode ? 50 : 30,
    restDelta: isLightMode ? 0.001 : 0.001
  });

  return (
    <>
      {children}
      {!isLightMode && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue transform-origin-0 z-50"
          style={{ scaleX }}
        />
      )}
    </>
  );
};

export default SmoothScrollProvider;
