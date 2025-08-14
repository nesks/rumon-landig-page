'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Building2, GraduationCap, Heart, Zap, Shield } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Building2,
      title: "Repúblicas Selecionadas",
      description: "As melhores repúblicas de João Monlevade, cuidadosamente escolhidas para oferecer conforto e qualidade de vida.",
      color: "cyber-green"
    },
    {
      icon: Users,
      title: "Comunidade Ativa",
      description: "Conecte-se com outros estudantes, participe de eventos e construa amizades que duram a vida toda.",
      color: "cyber-blue"
    },
    {
      icon: GraduationCap,
      title: "Foco nos Estudos",
      description: "Ambientes projetados para maximizar seu desempenho acadêmico e facilitar o aprendizado.",
      color: "metallic"
    },
    {
      icon: Heart,
      title: "Bem-estar Garantido",
      description: "Cuidamos de todos os aspectos da sua vida universitária, desde moradia até suporte emocional.",
      color: "cyber-green"
    },
    {
      icon: Zap,
      title: "Tecnologia Avançada",
      description: "Repúblicas equipadas com tecnologia de ponta para facilitar sua rotina diária.",
      color: "cyber-blue"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Sua segurança é nossa prioridade. Todas as repúblicas possuem sistemas de proteção avançados.",
      color: "metallic"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-blue/5 to-metallic/5" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          const x1 = (i * 15) % 300;
          const y1 = (i * 17) % 300;
          const x2 = ((i * 23) + 150) % 300;
          const y2 = ((i * 19) + 100) % 300;
          const duration = 2 + (i % 3);

          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: x1,
                y: y1,
              }}
              animate={{
                x: [x1, x2],
                y: [y1, y2],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holo-text"
            data-text="SOBRE A RUMON"
          >
            SOBRE A RUMON
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto glitch"
            data-text="Transformando a experiência universitária"
          >
            Transformando a experiência universitária
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-metallic p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              A <span className="text-cyber-green font-semibold">RUMON</span> - Repúblicas Unidas JM é mais que uma associação de moradias universitárias. 
              Somos uma <span className="text-cyber-blue font-semibold">comunidade inovadora</span> que conecta estudantes ao futuro da vida universitária, 
              oferecendo repúblicas selecionadas que equilibram perfeitamente <span className="text-cyber-green font-semibold">vida social</span> e 
              <span className="text-cyber-blue font-semibold"> excelência acadêmica</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-metallic p-6 rounded-lg border border-cyber-green-dark shadow-lg scan-lines hover:shadow-cyber-green/20 transition-all duration-300 cursor-hover"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br from-${feature.color} to-${feature.color}-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-8 h-8 text-black" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-cyber-green mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Floating particles for each card */}
              {[...Array(10)].map((_, i) => {
                const x = (i * 30) % 300;
                const y1 = (i * 40) % 400;
                const y2 = y1 - 50;
                const duration = 2 + (i % 3);

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-current opacity-0 group-hover:opacity-30 rounded-full`}
                    style={{ color: `var(--${feature.color})` }}
                    initial={{
                      x: x,
                      y: y1,
                    }}
                    animate={{
                      y: [y1, y2],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                );
              })}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <motion.button
            className="holo-button cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">CONHECER NOSSAS REPÚBLICAS</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
