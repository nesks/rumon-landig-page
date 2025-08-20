'use client';

import { useState, useEffect, useCallback } from 'react';

interface LoadingStep {
  name: string;
  weight: number;
  duration: number;
}

export const use3DLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [loadingSteps] = useState<LoadingStep[]>([
    { name: 'Inicializando sistema', weight: 10, duration: 500 },
    { name: 'Carregando elementos 3D', weight: 30, duration: 1500 },
    { name: 'Otimizando performance', weight: 25, duration: 1000 },
    { name: 'Conectando servidores', weight: 20, duration: 800 },
    { name: 'Finalizando carregamento', weight: 15, duration: 500 }
  ]);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setProgress(0);
    setCurrentStep(0);
  }, []);

  const completeLoading = useCallback(() => {
    setIsLoading(false);
    setProgress(100);
  }, []);

  const simulateLoading = useCallback(() => {
    startLoading();
    
    let currentProgress = 0;
    let stepIndex = 0;
    let stepProgress = 0;

    const interval = setInterval(() => {
      if (stepIndex < loadingSteps.length) {
        const step = loadingSteps[stepIndex];
        const stepWeight = step.weight;
        const stepIncrement = stepWeight / (step.duration / 50); // 50ms intervals

        stepProgress += stepIncrement;
        currentProgress += stepIncrement;

        if (stepProgress >= stepWeight) {
          stepIndex++;
          stepProgress = 0;
          setCurrentStep(stepIndex);
        }

        setProgress(Math.min(currentProgress, 100));

        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            completeLoading();
          }, 500);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [loadingSteps, startLoading, completeLoading]);

  // Auto-start loading on mount
  useEffect(() => {
    const cleanup = simulateLoading();
    return cleanup;
  }, [simulateLoading]);

  return {
    isLoading,
    progress,
    currentStep,
    loadingSteps,
    startLoading,
    completeLoading,
    simulateLoading
  };
};

