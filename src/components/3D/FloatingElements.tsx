'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);
  const { isLightMode } = useTheme();
  const { shouldAnimate } = usePerformanceMode();

  // Memoize cyber icons to prevent re-renders
  const cyberIcons = useMemo(() => [Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond], []);

  // Increased number of elements and size for better visibility
  const elements = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${(i * 6.7) % 100}%`,
      top: `${(i * 8) % 100}%`,
      size: 24 + (i % 12), // Increased from 16 to 24
      delay: i * 0.3, // Reduced from 0.5 to 0.3
      duration: 2 + (i % 3), // Reduced from 3 to 2 for faster animations
      icon: cyberIcons[i % cyberIcons.length],
      isHologram: i % 3 === 0, // Increased hologram frequency
    })), [cyberIcons]
  );

  // Increased particle count for more dynamic effect
  const particleCount = useMemo(() => 30, []); // Increased from 20 to 30

  useEffect(() => {
    setMounted(true);
  }, []);

  // Early return for better performance
  if (!mounted || isLightMode || !shouldAnimate) {
    return <div className="fixed inset-0 -z-10" />;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced Cyber Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />
      
      {/* Enhanced Floating Cyber Elements */}
      {elements.map((element) => {
        const IconComponent = element.icon;
        
        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: element.left,
              top: element.top,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: [-30, 30, -30], // Increased movement range
              opacity: element.isHologram ? [0.2, 0.6, 0.2] : [0.3, 0.5, 0.3], // Increased opacity
              scale: [0.8, 1.3, 0.8], // Increased scale range
              rotateY: [0, 180, 360],
              rotateZ: [0, 90, 180, 270], // Added Z rotation for more dynamic movement
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.isHologram ? (
              // Enhanced Holographic Elements
              <div 
                className="relative"
                style={{
                  width: element.size,
                  height: element.size,
                }}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-lg backdrop-blur-sm border border-green-400/40 flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 12px rgba(0, 255, 136, 0.3)',
                      '0 0 20px rgba(0, 255, 136, 0.6)',
                      '0 0 12px rgba(0, 255, 136, 0.3)',
                    ],
                  }}
                  transition={{
                    duration: 1.5, // Reduced from 2 to 1.5
                    repeat: Infinity,
                  }}
                >
                  <IconComponent 
                    className="text-green-400" 
                    size={element.size * 0.6} // Increased icon size
                  />
                </motion.div>
                
                {/* Enhanced holographic scan lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/40 to-transparent"
                  animate={{
                    y: [-element.size, element.size],
                  }}
                  transition={{
                    duration: 1, // Faster scan lines
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    height: '3px', // Thicker scan line
                  }}
                />
              </div>
            ) : (
              // Enhanced Regular Cyber Elements
              <motion.div
                className="relative cursor-hover"
                style={{
                  width: element.size,
                  height: element.size,
                }}
                whileHover={{
                  scale: 1.5, // Increased hover scale
                  rotateY: 180,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-600/40 rounded border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                  <IconComponent 
                    className="text-cyan-400" 
                    size={element.size * 0.7} // Increased icon size
                  />
                </div>
                
                {/* Enhanced corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
      
      {/* Enhanced Cyber Particles Stream */}
      {Array.from({ length: particleCount }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-green-400 rounded-full" // Increased particle size
          style={{
            left: `${(i * 3.3) % 100}%`, // More particles
            top: '-10px',
            boxShadow: '0 0 4px #00ff88', // Enhanced glow
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 0], // Full opacity
            scale: [0.5, 1, 0.5], // Added scale animation
          }}
          transition={{
            duration: 1.5 + (i % 2), // Faster particles
            delay: i * 0.1, // Reduced delay
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Enhanced Cyber Grid Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px', // Smaller grid for more density
        }}
        animate={{
          opacity: [0.08, 0.25, 0.08], // Increased opacity
        }}
        transition={{
          duration: 4, // Faster grid animation
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Enhanced Scanning Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
        animate={{
          y: ['0vh', '100vh'],
        }}
        transition={{
          duration: 6, // Faster scanning line
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 8px #00ff88', // Enhanced glow
        }}
      />
      
      {/* Enhanced Central Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-500/5 to-transparent" />
    </div>
  );
};

export default FloatingElements;