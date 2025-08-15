'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/hooks/useTheme';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [mounted, setMounted] = useState(false);
  const { isLightMode } = useTheme();
  const trailRef = useRef<HTMLDivElement>(null);
  const positionId = useRef(0);

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined' && !isLightMode) {
      const mouseMove = (e: MouseEvent) => {
        const newPosition = {
          x: e.clientX,
          y: e.clientY,
          id: positionId.current++
        };
        
        setMousePosition(newPosition);
        
        // Add to trail positions
        setTrailPositions(prev => {
          const newTrail = [...prev, newPosition];
          // Keep only last 40 positions for longer trail effect
          return newTrail.slice(-40);
        });
      };

      window.addEventListener('mousemove', mouseMove);

      return () => {
        window.removeEventListener('mousemove', mouseMove);
      };
    }
  }, [isLightMode]);

  // Don't render cursor in light mode
  if (!mounted || isLightMode) return null;

  return (
    <div ref={trailRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden lg:block">
      {/* Neon Trail Effect */}
      {trailPositions.map((pos, index) => {
        const opacity = (index + 1) / trailPositions.length;
        const scale = 1.5 - (index * 0.02);
        
        return (
          <motion.div
            key={pos.id}
            className="absolute w-3 h-3 pointer-events-none"
            initial={{ 
              x: pos.x - 6,
              y: pos.y - 6,
              scale: 1, // Start at full scale
              opacity: opacity * 1.5 // Start at full opacity
            }}
            animate={{ 
              x: pos.x - 6, 
              y: pos.y - 6,
              scale: scale,
              opacity: opacity * 1.5
            }}
            transition={{
              type: 'tween', // Use tween for instant movement
              duration: 0.05, // Very short duration for more frequent updates
              ease: "linear"
            }}
            style={{
              background: `radial-gradient(circle, 
                rgba(0, 255, 136, ${opacity * 1.2}) 0%, 
                rgba(0, 212, 255, ${opacity * 1.0}) 50%, 
                rgba(0, 255, 136, ${opacity * 0.5}) 100%)`,
              boxShadow: `
                0 0 ${20 + index * 2}px rgba(0, 255, 136, ${opacity * 1.0}),
                0 0 ${40 + index * 4}px rgba(0, 212, 255, ${opacity * 0.8}),
                0 0 ${60 + index * 6}px rgba(0, 255, 136, ${opacity * 0.6}),
                inset 0 0 ${10 + index * 1}px rgba(0, 255, 136, ${opacity * 0.7})
              `,
              borderRadius: '50%',
              mixBlendMode: 'screen'
            }}
          />
        );
      })}

      {/* Data Stream Effect */}
      {trailPositions.slice(-3).map((pos, index) => (
        <motion.div
          key={`data-${pos.id}`}
          className="absolute text-xs font-mono pointer-events-none"
          initial={{ 
            x: pos.x + 10, 
            y: pos.y - 10,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: pos.x + 10, 
            y: pos.y - 10,
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 1,
            delay: index * 0.1
          }}
          style={{
            color: '#00ff88',
            textShadow: '0 0 5px #00ff88',
            fontSize: '8px',
            fontFamily: 'monospace'
          }}
        >
          {['01', '10', 'FF', 'A5', '3C'][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </div>
  );
};

export default CustomCursor;