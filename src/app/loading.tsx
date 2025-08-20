'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond } from 'lucide-react';

const LoadingPage = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = [
    { name: 'Inicializando sistema', duration: 1000 },
    { name: 'Carregando elementos 3D', duration: 2000 },
    { name: 'Otimizando performance', duration: 1500 },
    { name: 'Conectando servidores', duration: 1200 },
    { name: 'Finalizando carregamento', duration: 800 }
  ];

  useEffect(() => {
    let currentProgress = 0;
    let stepIndex = 0;

    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        const step = loadingSteps[stepIndex];
        const stepProgress = (currentProgress % 100) + (100 / loadingSteps.length);
        
        setProgress(Math.min(stepProgress, 100));
        setCurrentStep(stepIndex);
        
        if (stepProgress >= 100) {
          stepIndex++;
          currentProgress = 0;
        } else {
          currentProgress += 2;
        }
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const cyberIcons = [Cpu, Wifi, Zap, CircuitBoard, Hexagon, Diamond];

  if (isComplete) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cyber Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
          
          {/* Floating Elements */}
          {cyberIcons.map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${(index * 20) % 100}%`,
                top: `${(index * 15) % 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.1, 0.4, 0.1],
                scale: [0.8, 1.2, 0.8],
                rotateY: [0, 360],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
                <Icon className="w-4 h-4 text-green-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo/Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              <span className="text-green-400">RUMON</span>
            </h1>
            <p className="text-gray-400 text-sm">Carregando experiência 3D</p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <p className="text-green-400 text-sm font-medium">
              {loadingSteps[currentStep]?.name || 'Finalizando...'}
            </p>
            <p className="text-gray-500 text-xs mt-1">
              {Math.round(progress)}% completo
            </p>
          </motion.div>

          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-2"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Performance Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 text-xs text-gray-500"
          >
            <p>💡 Dica: Use o modo claro para melhor performance</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingPage;

