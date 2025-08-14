'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond } from 'lucide-react';

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="fixed inset-0 -z-10" />;
  }

  // Cyber icons for floating elements
  const cyberIcons = [Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond];

  // Create deterministic cyber floating elements
  const elements = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${(i * 6.7) % 100}%`,
    top: `${(i * 8.3) % 100}%`,
    size: 20 + (i % 12),
    delay: i * 0.3,
    duration: 4 + (i % 6),
    icon: cyberIcons[i % cyberIcons.length],
    isHologram: i % 3 === 0,
  }));

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-cyan-500/5" />
      
      {/* Floating Cyber Elements */}
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
              rotateY: -180,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: element.isHologram ? [0.1, 0.6, 0.1] : [0.2, 0.4, 0.2],
              scale: [0.8, 1.2, 0.8],
              rotateY: [0, 360],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {element.isHologram ? (
              // Holographic Elements
              <div 
                className="relative"
                style={{
                  width: element.size,
                  height: element.size,
                }}
              >
                <motion.div
                  className="w-full h-full bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-green-400/50 flex items-center justify-center"
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
                >
                  <IconComponent 
                    className="text-green-400" 
                    size={element.size * 0.5}
                  />
                </motion.div>
                
                {/* Holographic scan lines */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/30 to-transparent"
                  animate={{
                    y: [-element.size, element.size],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    height: '2px',
                  }}
                />
              </div>
            ) : (
              // Regular Cyber Elements
              <motion.div
                className="relative cursor-hover"
                style={{
                  width: element.size,
                  height: element.size,
                }}
                whileHover={{
                  scale: 1.5,
                  textShadow: '0 0 10px #00ff88',
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-800/40 to-gray-600/40 rounded border border-cyan-400/30 flex items-center justify-center backdrop-blur-sm">
                  <IconComponent 
                    className="text-cyan-400" 
                    size={element.size * 0.6}
                  />
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
              </motion.div>
            )}
          </motion.div>
        );
      })}
      
      {/* Cyber Particles Stream */}
      {Array.from({ length: 50 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          style={{
            left: `${(i * 2) % 100}%`,
            top: '-10px',
            boxShadow: '0 0 4px #00ff88',
          }}
          animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + (i % 4),
            delay: i * 0.1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Cyber Grid Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Scanning Line Effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
        animate={{
          y: ['0vh', '100vh'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          boxShadow: '0 0 10px #00ff88',
        }}
      />
      
      {/* Central Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-green-500/5 to-transparent" />
    </div>
  );
};

export default FloatingElements;