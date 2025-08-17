'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  MapPin, 
  Wifi, 
  Car, 
  Utensils, 
  Heart,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

const PortfolioSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const republics = [
    {
      id: 1,
      name: "Conexões de Trabalho",
      location: "João Monlevade",
      rating: 5.0,
      price: "Incluso",
      features: ["Networking", "Mentoria", "Oportunidades", "Carreira"],
      image: "/api/placeholder/400/300",
      description: "Conecte-se com profissionais e estudantes de diversas áreas. Aproveite oportunidades únicas de networking e desenvolvimento de carreira.",
      color: "cyber-green"
    },
    {
      id: 2,
      name: "Lazer e Diversão",
      location: "João Monlevade",
      rating: 5.0,
      price: "Incluso",
      features: ["Eventos", "Festa", "Esportes", "Cultura"],
      image: "/api/placeholder/400/300",
      description: "Equilibre estudos e diversão! Participe de eventos, festas e atividades culturais que tornam sua experiência universitária inesquecível.",
      color: "cyber-blue"
    },
    {
      id: 3,
      name: "Divisão de Despesas",
      location: "João Monlevade",
      rating: 5.0,
      price: "Transparente",
      features: ["Contas Divididas", "Economia", "Transparência", "Facilidade"],
      image: "/api/placeholder/400/300",
      description: "Sistema transparente de divisão de despesas. Economize dinheiro e tenha controle total sobre seus gastos mensais.",
      color: "metallic"
    },
    {
      id: 4,
      name: "República Tecnologia",
      location: "Centro - João Monlevade",
      rating: 4.9,
      price: "R$ 500/mês",
      features: ["Wi-Fi", "Sala Tech", "Cozinha", "Estacionamento"],
      image: "/api/placeholder/400/300",
      description: "República com foco em tecnologia e inovação para estudantes de TI.",
      color: "cyber-green"
    },
    {
      id: 5,
      name: "República Harmonia",
      location: "Vila Tanque - João Monlevade",
      rating: 4.6,
      price: "R$ 430/mês",
      features: ["Wi-Fi", "Jardim", "Cozinha", "Sala de TV"],
      image: "/api/placeholder/400/300",
      description: "Equilíbrio perfeito entre estudos e lazer em um ambiente tranquilo.",
      color: "cyber-blue"
    },
    {
      id: 6,
      name: "República Sucesso",
      location: "Centro - João Monlevade",
      rating: 4.8,
      price: "R$ 460/mês",
      features: ["Wi-Fi", "Biblioteca", "Cozinha", "Lavanderia"],
      image: "/api/placeholder/400/300",
      description: "Foco total no sucesso acadêmico com ambiente de estudos privilegiado.",
      color: "metallic"
    }
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // desktop
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleCount >= republics.length ? 0 : prevIndex + visibleCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - visibleCount < 0 ? Math.max(0, republics.length - visibleCount) : prevIndex - visibleCount
    );
  };

  const visibleRepublics = republics.slice(currentIndex, currentIndex + visibleCount);

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
      id="portfolio"
      ref={ref}
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-metallic/5 via-cyber-green/5 to-cyber-blue/5" />
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => {
          const x1 = (i * 10) % 500;
          const y1 = (i * 13) % 500;
          const x2 = ((i * 16) + 250) % 500;
          const y2 = ((i * 19) + 200) % 500;
          const duration = 4 + (i % 5);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-metallic/40 rounded-full"
              initial={{
                x: x1,
                y: y1,
              }}
              animate={{
                x: [x1, x2],
                y: [y1, y2],
                opacity: [0.1, 0.7, 0.1],
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
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 holo-text"
            data-text="NOSSAS REPÚBLICAS"
          >
            NOSSAS REPÚBLICAS
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto glitch px-4"
            data-text="Conheça as melhores repúblicas selecionadas pela RUMON"
          >
            Conheça as melhores repúblicas selecionadas pela RUMON
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-metallic p-4 sm:p-6 lg:p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines max-w-4xl mx-auto"
          >
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed">
              Cada república da <span className="text-cyber-green font-semibold">RUMON</span> foi cuidadosamente selecionada 
              para oferecer o <span className="text-cyber-blue font-semibold">melhor ambiente</span> para sua vida universitária. 
              Desde repúblicas com foco em <span className="text-cyber-green font-semibold">tecnologia</span> até espaços 
              <span className="text-cyber-blue font-semibold"> comunitários</span>, temos a opção perfeita para você.
            </p>
          </motion.div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="min-h-[500px] sm:min-h-[600px]"
        >
          <div className="relative">
            {/* Carousel Container */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
            >
              {visibleRepublics.map((republic, index) => (
                <motion.div
                  key={republic.id}
                  variants={itemVariants}
                  className="group relative bg-metallic rounded-lg border border-cyber-green-dark shadow-lg scan-lines overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Placeholder */}
                  <div className="h-32 sm:h-40 lg:h-48 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-cyber-green" />
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex justify-between items-start mb-2 sm:mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-cyber-green group-hover:text-cyber-blue transition-colors duration-300">
                        {republic.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs sm:text-sm text-gray-300">★ {republic.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 mb-2 sm:mb-3">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">{republic.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                      {republic.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {republic.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-cyber-green/10 text-cyber-green text-xs rounded-full border border-cyber-green/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-cyber-blue">
                        {republic.price}
                      </span>
                      <motion.button
                        className="holo-button text-xs sm:text-sm px-3 sm:px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">VER DETALHES</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-metallic p-2 sm:p-3 rounded-full border border-cyber-green-dark shadow-lg hover:bg-cyber-green/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-cyber-green" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-metallic p-2 sm:p-3 rounded-full border border-cyber-green-dark shadow-lg hover:bg-cyber-green/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-cyber-green" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: Math.ceil(republics.length / visibleCount) }, (_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i * visibleCount)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentIndex === i * visibleCount 
                      ? 'bg-cyber-green' 
                      : 'bg-gray-400 hover:bg-cyber-green/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>

          {/* Ver Todas Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.button
              className="holo-button text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VER TODAS AS REPÚBLICAS</span>
            </motion.button>
          </motion.div>

          {/* Marketing Section for Scheduling Visits */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-cyber-green/10 via-cyber-blue/10 to-metallic/10 p-4 sm:p-6 lg:p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cyber-green mb-3 sm:mb-4">
                  Agende sua <span className="text-cyber-blue">Visita</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Não deixe para depois! Agende uma visita personalizada e conheça de perto 
                  as repúblicas que podem transformar sua experiência universitária. 
                  Nossa equipe está pronta para te receber e mostrar todos os detalhes.
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-cyber-green rounded-full mr-2"></span>
                    Visita Personalizada
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-cyber-blue rounded-full mr-2"></span>
                    Sem Compromisso
                  </div>
                  <div className="flex items-center text-xs sm:text-sm text-gray-400">
                    <span className="w-2 h-2 bg-metallic rounded-full mr-2"></span>
                    Horário Flexível
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    className="holo-button text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">AGENDAR VISITA</span>
                  </motion.button>
                  <motion.button
                    className="border-2 border-cyber-blue/50 text-cyber-blue px-4 sm:px-6 py-2 sm:py-3 rounded-none font-semibold hover:bg-cyber-blue/10 hover:border-cyber-blue transition-all duration-300 cursor-hover text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    FALAR NO WHATSAPP
                  </motion.button>
                </div>
              </div>
              
              <motion.div
                className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-cyber-green" />
                <motion.div
                  className="absolute inset-0 border-2 border-cyber-green/30 rounded-lg"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            className="holo-button text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">AGENDAR VISITA</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;


