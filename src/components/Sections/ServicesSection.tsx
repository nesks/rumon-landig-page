'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Users, 
  MapPin, 
  Camera, 
  Headphones, 
  Shield, 
  Wifi, 
  Car, 
  Utensils, 
  BookOpen,
  Heart,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const services = [
    {
      icon: Building2,
      title: "Seleção de Repúblicas",
      description: "Avaliamos e selecionamos as melhores repúblicas de João Monlevade, garantindo qualidade e conforto para você.",
      features: ["Inspeção rigorosa", "Avaliação de infraestrutura", "Verificação de segurança"],
      color: "cyber-green"
    },

    {
      icon: Users,
      title: "Mediação Estudantil",
      description: "Facilitamos a conexão entre estudantes e repúblicas, garantindo a melhor experiência para ambos.",
      features: ["Processo simplificado", "Suporte personalizado", "Acompanhamento contínuo"],
      color: "metallic"
    },
    {
      icon: MapPin,
      title: "Localização Estratégica",
      description: "Repúblicas estrategicamente localizadas próximas à universidade e pontos de interesse.",
      features: ["Próximo à universidade", "Acesso ao transporte", "Comércio local"],
      color: "cyber-green"
    },
    {
      icon: Wifi,
      title: "Tecnologia Integrada",
      description: "Repúblicas equipadas com tecnologia de ponta para facilitar sua vida universitária.",
      features: ["Wi-Fi de alta velocidade", "Sistemas inteligentes", "Aplicativo exclusivo"],
      color: "cyber-blue"
    },
    {
      icon: Heart,
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar com qualquer questão relacionada à sua moradia.",
      features: ["Atendimento 24h", "Suporte técnico", "Emergências"],
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
      id="servicos"
      ref={ref}
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-cyber-green/5 to-metallic/5" />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => {
          const x1 = (i * 12) % 400;
          const y1 = (i * 15) % 400;
          const x2 = ((i * 18) + 200) % 400;
          const y2 = ((i * 22) + 150) % 400;
          const duration = 3 + (i % 4);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-blue/30 rounded-full"
              initial={{
                x: x1,
                y: y1,
              }}
              animate={{
                x: [x1, x2],
                y: [y1, y2],
                opacity: [0.1, 0.6, 0.1],
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
            data-text="NOSSOS SERVIÇOS"
          >
            NOSSOS SERVIÇOS
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto glitch"
            data-text="Tudo que você precisa para uma experiência universitária completa"
          >
            Tudo que você precisa para uma experiência universitária completa
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-metallic p-8 rounded-lg border border-cyber-blue-dark shadow-lg scan-lines max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Na <span className="text-cyber-green font-semibold">RUMON</span>, oferecemos uma gama completa de serviços 
              para transformar sua experiência universitária. Desde a <span className="text-cyber-blue font-semibold">seleção de repúblicas</span> 
              até o <span className="text-cyber-green font-semibold">suporte contínuo</span>, estamos aqui para garantir 
              que você tenha tudo que precisa para focar no que realmente importa: <span className="text-cyber-blue font-semibold">seu futuro</span>.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-metallic p-6 rounded-lg border border-cyber-green-dark shadow-lg scan-lines hover:shadow-cyber-green/20 transition-all duration-300 cursor-hover"
            >
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br from-${service.color} to-${service.color}-dark rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-black" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-cyber-green mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-${service.color} rounded-full mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating particles for each service card */}
              {[...Array(10)].map((_, i) => {
                const x = (i * 30) % 300;
                const y1 = (i * 40) % 400;
                const y2 = y1 - 50;
                const duration = 2 + (i % 3);

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-current opacity-0 group-hover:opacity-30 rounded-full`}
                    style={{ color: `var(--${service.color})` }}
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


      </div>
    </section>
  );
};

export default ServicesSection;
