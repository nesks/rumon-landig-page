'use client';

import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      // Apply performance optimizations for light mode
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
        // Force reflow to ensure animations are restored
        document.documentElement.offsetHeight;
      }
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const defaultTheme: Theme = prefersDark ? 'dark' : 'light';
      setTheme(defaultTheme);
      document.documentElement.setAttribute('data-theme', defaultTheme);
      localStorage.setItem('theme', defaultTheme);
      // Apply performance optimizations for light mode
      if (defaultTheme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
        // Force reflow to ensure animations are restored
        document.documentElement.offsetHeight;
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle performance optimizations
    if (newTheme === 'light') {
      document.documentElement.classList.add('light-mode');
    } else {
      // Remove light-mode class
      document.documentElement.classList.remove('light-mode');
      
      // Force multiple reflows to ensure all effects are restored
      document.documentElement.offsetHeight;
      
      // Additional delay to ensure CSS is fully updated
      setTimeout(() => {
        document.documentElement.offsetHeight;
      }, 10);
      
      // Force animation restart for key elements
      const animatedElements = document.querySelectorAll('.holo-text, .glitch, .metallic, .scan-lines');
      animatedElements.forEach((element) => {
        const el = element as HTMLElement;
        if (el.style.animation) {
          el.style.animation = 'none';
          el.offsetHeight; // Force reflow
          el.style.animation = '';
        }
      });
    }
  };

  return {
    theme,
    toggleTheme,
    mounted,
    isLightMode: theme === 'light',
  };
};
