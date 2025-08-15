'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-700 rounded-full animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
              className="relative w-14 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full border-2 border-green-400 overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg z-10"
        animate={{
          x: theme === 'dark' ? 2 : 24,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
      
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <motion.div
          animate={{
            opacity: theme === 'dark' ? 1 : 0.3,
            scale: theme === 'dark' ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon className="w-4 h-4 text-gray-800" />
        </motion.div>
        
        <motion.div
          animate={{
            opacity: theme === 'light' ? 1 : 0.3,
            scale: theme === 'light' ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun className="w-4 h-4 text-gray-800" />
        </motion.div>
      </div>
      
      {/* Holographic Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 10px rgba(0, 255, 136, 0.3)',
            '0 0 20px rgba(0, 255, 136, 0.6)',
            '0 0 10px rgba(0, 255, 136, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
