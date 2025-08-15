'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Zap, Users, GraduationCap, Building } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useMousePosition } from '@/hooks/useMousePosition';
import { usePerformanceMode } from '@/hooks/usePerformanceMode';

const HeroSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const mousePosition = useMousePosition();
  const windowSize = useWindowSize();
  const { shouldAnimate, getOptimizedVariants, getOptimizedWhileHover, getOptimizedWhileTap, getOptimizedAnimate, getOptimizedInitial, getOptimizedTransition } = usePerformanceMode();

  // Typewriter effect for the main title
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'VEM COM A GENTE PARA O FUTURO';

  useEffect(() => {
    if (inView && shouldAnimate) {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayedText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    } else if (inView && !shouldAnimate) {
      // In light mode, show text immediately
      setDisplayedText(fullText);
    }
  }, [inView, shouldAnimate]);

  const containerVariants = getOptimizedVariants({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  });

  const itemVariants = getOptimizedVariants({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  });

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Cyber Background Effects */}
      <div id="hero-background" className="absolute inset-0 pointer-events-none">
        {/* Holographic Grid */}
        <div id="hero-grid" className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        {/* Floating Holograms */}
        {shouldAnimate && [...Array(12)].map((_, i) => {
          const baseX = (i * 137.5) % windowSize.width;
          const baseY = (i * 97.3) % windowSize.height;
          const duration = 3 + (i % 4);
          const icons = [Building, Users, GraduationCap, Zap];
          const IconComponent = icons[i % icons.length];
          
          return (
            <motion.div
              key={i}
              id={`hero-hologram-${i}`}
              className="absolute"
              initial={{
                x: baseX,
                y: baseY,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                y: [baseY, baseY - 50, baseY],
                scale: [0.5, 1, 0.5],
                opacity: [0.1, 0.4, 0.1],
                rotateY: [0, 360],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <div id={`hero-hologram-icon-${i}`} className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-cyan-400/20 rounded-lg backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
                <IconComponent id={`hero-hologram-icon-component-${i}`} className="w-6 h-6 text-green-400" />
              </div>
            </motion.div>
          );
        })}

        {/* Cyber Particles */}
        {shouldAnimate && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            id={`hero-particle-${i}`}
            className="cyber-particles"
            style={{
              left: `${(i * 5) % 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div id="hero-content" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          id="hero-text-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >


          {/* Main Title with Glitch Effect */}
          <motion.div id="hero-title" variants={itemVariants}>
            <h1 id="hero-main-title" className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-tight">
              <span id="hero-title-block" className="block">
                <span id="hero-glitch-text" className="holo-text glitch" data-text={displayedText}>
                  {displayedText}
                </span>
                <motion.span
                  id="hero-cursor"
                  animate={getOptimizedAnimate({ opacity: [0, 1, 0] })}
                  transition={getOptimizedTransition({ duration: 1, repeat: Infinity })}
                  className="text-green-400"
                >
                  _
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Organization Name */}
          <motion.div id="hero-organization" variants={itemVariants}>
            <h2 id="hero-org-title" className="text-2xl sm:text-3xl text-gray-300 mb-4">
              <span id="hero-rumon-text" className="text-green-400">RUMON</span> - Repúblicas Unidas JM
            </h2>
            <p id="hero-org-subtitle" className="text-lg text-gray-400">
              Associação das Repúblicas Unidas Monlevadenses
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            id="hero-subtitle"
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Conecte-se ao futuro da moradia estudantil. Equilibre vida social e estudos em um 
            ambiente tecnológico e inovador. <span id="hero-future-text" className="text-green-400">Your future starts here.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            id="hero-ctas"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              id="hero-cta-primary"
              whileHover={getOptimizedWhileHover({ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 255, 136, 0.5)",
                textShadow: "0 0 10px #00ff88",
              })}
              whileTap={getOptimizedWhileTap({ scale: 0.95 })}
                              className="group relative holo-button text-lg px-8 py-4"
            >
              <span id="hero-cta-primary-text" className="relative z-10 flex items-center space-x-2">
                <span>CONHECER REPÚBLICAS</span>
                <Zap id="hero-cta-primary-icon" className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              id="hero-cta-secondary"
              whileHover={getOptimizedWhileHover({ 
                scale: 1.05,
                textShadow: "0 0 10px #00d4ff",
              })}
              whileTap={getOptimizedWhileTap({ scale: 0.95 })}
              className="border-2 border-cyan-400/50 text-cyan-400 px-8 py-4 rounded-none font-semibold text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 cursor-hover tracking-wider"
            >
              EXPLORAR REPÚBLICAS
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            id="hero-stats"
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-green-500/30"
          >
            {[
              { number: "50+", label: "Repúblicas Conectadas", icon: Building },
              { number: "2000+", label: "Estudantes Ativos", icon: Users },
              { number: "10+", label: "Anos de Inovação", icon: GraduationCap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                id={`hero-stat-${index}`}
                whileHover={getOptimizedWhileHover({ 
                  y: -5,
                  scale: 1.05,
                  textShadow: "0 0 15px #00ff88",
                })}
                className="text-center group"
              >
                <motion.div
                  id={`hero-stat-number-${index}`}
                  className="text-4xl sm:text-5xl font-bold text-green-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 1 }}
                >
                  {stat.number}
                </motion.div>
                <p id={`hero-stat-label-${index}`} className="text-gray-300 text-lg">
                  {stat.label}
                </p>
                <div id={`hero-stat-icon-${index}`} className="mt-4 flex justify-center">
                  <stat.icon id={`hero-stat-icon-component-${index}`} className="w-8 h-8 text-green-400/50 group-hover:text-green-400 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        id="hero-scroll-indicator"
        initial={getOptimizedInitial({ opacity: 0, y: 20 })}
        animate={{ opacity: 1, y: 0 }}
        transition={getOptimizedTransition({ delay: 3, duration: 0.8 })}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          id="hero-scroll-icon"
          animate={getOptimizedAnimate({ y: [0, 10, 0] })}
          transition={getOptimizedTransition({ duration: 2, repeat: Infinity })}
                          className="flex flex-col items-center text-green-400"
          onClick={() => {
            document.getElementById('republicas')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span id="hero-scroll-text" className="text-sm mb-2 tracking-wider">scroll</span>
          <ArrowDown id="hero-scroll-arrow" className="w-5 h-5" />
          <motion.div
            id="hero-scroll-bar"
            animate={getOptimizedAnimate({ scaleY: [1, 1.5, 1] })}
            transition={getOptimizedTransition({ duration: 1, repeat: Infinity })}
            className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;