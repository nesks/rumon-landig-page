'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Star, 
  Quote,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      course: "Engenharia Civil",
      university: "UFOP",
      text: "A RUMON transformou minha experiência universitária! Encontrei não só uma moradia perfeita, mas uma comunidade incrível. O suporte é excepcional e a localização é ideal.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Carlos Santos",
      course: "Sistemas de Informação",
      university: "UFOP",
      text: "A experiência com a RUMON foi fantástica! Pude conhecer todas as repúblicas e escolher a melhor opção. A RUMON realmente pensa no futuro dos estudantes.",
      rating: 5,
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Mariana Costa",
      course: "Administração",
      university: "UFOP",
      text: "Graças à RUMON, encontrei não só uma moradia, mas uma família. A comunidade é incrível e o suporte é 24/7. Recomendo para todos!",
      rating: 5,
      avatar: "/api/placeholder/60/60"
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
      id="depoimentos"
      ref={ref}
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-blue/5 to-metallic/5" />
        
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => {
          const x1 = (i * 15) % 600;
          const y1 = (i * 18) % 400;
          const x2 = ((i * 22) + 300) % 600;
          const y2 = ((i * 25) + 200) % 400;
          const duration = 4 + (i % 3);

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyber-green/30 rounded-full"
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
          >
            O que nossos <span className="text-cyber-green">estudantes</span> dizem
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Descubra como a RUMON está transformando a experiência universitária 
            através dos depoimentos de quem já faz parte da nossa comunidade.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Current Testimonial */}
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="group relative bg-metallic p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center mr-6">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-cyber-green">{testimonials[currentTestimonialIndex].name}</h4>
                  <p className="text-lg text-gray-400">{testimonials[currentTestimonialIndex].course}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentTestimonialIndex].university}</p>
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-300 leading-relaxed italic text-lg mb-6">
                "{testimonials[currentTestimonialIndex].text}"
              </blockquote>

              <Quote className="w-10 h-10 text-cyber-green/30 absolute top-6 right-6" />
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                onClick={() => setCurrentTestimonialIndex((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center border border-cyber-green-dark hover:border-cyber-green transition-all duration-300 cursor-hover"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </motion.button>

              {/* Testimonial Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonialIndex(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-hover ${
                      index === currentTestimonialIndex 
                        ? 'bg-cyber-green' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={() => setCurrentTestimonialIndex((prev) => 
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-full flex items-center justify-center border border-cyber-green-dark hover:border-cyber-green transition-all duration-300 cursor-hover"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
