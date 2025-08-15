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
          // Keep only last 25 positions for longer trail effect
          return newTrail.slice(-25);
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
      {/* Main Neon Cursor */}
      <motion.div
        className="absolute w-4 h-4 pointer-events-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: 'tween',
          duration: 0.1,
          ease: "linear"
        }}
        style={{
          background: 'radial-gradient(circle, #00ff88 0%, #00d4ff 50%, transparent 100%)',
          boxShadow: `
            0 0 20px rgba(0, 255, 136, 0.8),
            0 0 40px rgba(0, 212, 255, 0.6),
            0 0 60px rgba(0, 255, 136, 0.4),
            inset 0 0 10px rgba(0, 255, 136, 0.5)
          `,
          borderRadius: '50%',
          mixBlendMode: 'screen'
        }}
      />

      {/* Neon Trail Effect */}
      {trailPositions.map((pos, index) => {
        const opacity = (index + 1) / trailPositions.length;
        const scale = 1.2 - (index * 0.03);
        
        return (
      <motion.div
            key={pos.id}
            className="absolute w-4 h-4 pointer-events-none"
            initial={{ 
              x: pos.x - 8,
              y: pos.y - 8,
              scale: 1, // Start at full scale
              opacity: opacity * 1.2 // Start at full opacity
            }}
        animate={{
              x: pos.x - 8, 
              y: pos.y - 8,
              scale: scale,
              opacity: opacity * 1.2
        }}
        transition={{
              type: 'tween', // Use tween for instant movement
              duration: 0.1, // Very short duration
              ease: "linear"
        }}
        style={{
              background: `radial-gradient(circle, 
                rgba(0, 255, 136, ${opacity * 1.0}) 0%, 
                rgba(0, 212, 255, ${opacity * 0.8}) 50%, 
                rgba(0, 255, 136, ${opacity * 0.3}) 100%)`,
              boxShadow: `
                0 0 ${15 + index * 3}px rgba(0, 255, 136, ${opacity * 0.8}),
                0 0 ${30 + index * 6}px rgba(0, 212, 255, ${opacity * 0.6}),
                0 0 ${45 + index * 9}px rgba(0, 255, 136, ${opacity * 0.4}),
                inset 0 0 ${8 + index * 2}px rgba(0, 255, 136, ${opacity * 0.5})
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