'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  Building2, 
  Users,
  Heart,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    university: '',
    message: '',
    interest: 'republica'
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contato@rumon.com.br",
      description: "Envie suas dúvidas e solicitações",
      color: "cyber-green"
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "(31) 99999-9999",
      description: "Atendimento 24/7 para emergências",
      color: "cyber-blue"
    },
    {
      icon: MapPin,
      title: "Endereço",
      value: "João Monlevade, MG",
      description: "Centro de atendimento RUMON",
      color: "metallic"
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Segunda a Sexta",
      description: "8h às 18h - Sábados 9h às 14h",
      color: "cyber-green"
    }
  ];

  const quickActions = [
    {
      icon: Building2,
      title: "Ver Repúblicas",
      description: "Explore nossas repúblicas disponíveis",
      action: "EXPLORAR",
      color: "cyber-green"
    },
    {
      icon: MessageCircle,
      title: "Tour Virtual",
      description: "Agende um tour virtual personalizado",
      action: "AGENDAR",
      color: "cyber-blue"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conecte-se com outros estudantes",
      action: "CONECTAR",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-20 px-4 sm:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-blue/5 to-metallic/5" />
        
        {/* Floating particles */}
        {[...Array(35)].map((_, i) => {
          const x1 = (i * 8) % 600;
          const y1 = (i * 11) % 600;
          const x2 = ((i * 14) + 300) % 600;
          const y2 = ((i * 17) + 250) % 600;
          const duration = 5 + (i % 6);

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
                opacity: [0.1, 0.8, 0.1],
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
            data-text="ENTRE EM CONTATO"
          >
            ENTRE EM CONTATO
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto glitch"
            data-text="Estamos aqui para ajudar você a encontrar sua república ideal"
          >
            Estamos aqui para ajudar você a encontrar sua república ideal
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-metallic p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              A <span className="text-cyber-green font-semibold">RUMON</span> está sempre pronta para ajudar você 
              a encontrar a <span className="text-cyber-blue font-semibold">república perfeita</span>. 
              Entre em contato conosco e descubra como podemos transformar sua 
              <span className="text-cyber-green font-semibold"> experiência universitária</span>.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-metallic p-8 rounded-lg border border-cyber-green-dark shadow-lg scan-lines"
            >
              <h3 className="text-2xl font-bold text-cyber-green mb-6">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                      placeholder="(31) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Curso
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                      placeholder="Ex: Engenharia Civil"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Universidade
                  </label>
                  <input
                    type="text"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                    placeholder="Ex: UFOP"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Interesse Principal
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300"
                  >
                    <option value="republica">Conhecer Repúblicas</option>
                    <option value="tour">Agendar Tour Virtual</option>
                    <option value="duvida">Tirar Dúvidas</option>
                    <option value="parceria">Proposta de Parceria</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/20 border border-cyber-green-dark rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyber-green focus:ring-1 focus:ring-cyber-green transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre suas necessidades e expectativas..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full holo-button cursor-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="inline-block mr-2" />
                  <span className="relative z-10">ENVIAR MENSAGEM</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-cyber-blue mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="group bg-metallic p-4 rounded-lg border border-cyber-green-dark shadow-lg scan-lines cursor-hover"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-${info.color} to-${info.color}-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-6 h-6 text-black" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-cyber-green group-hover:text-cyber-blue transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-gray-300 font-medium">{info.value}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-cyber-green mb-6">
                Ações Rápidas
              </h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    className="group bg-metallic p-4 rounded-lg border border-cyber-green-dark shadow-lg scan-lines cursor-hover"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br from-${action.color} to-${action.color}-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <action.icon className="w-6 h-6 text-black" />
                        </motion.div>
                        <div>
                          <h4 className="font-bold text-cyber-green group-hover:text-cyber-blue transition-colors duration-300">
                            {action.title}
                          </h4>
                          <p className="text-sm text-gray-400">{action.description}</p>
                        </div>
                      </div>
                      <motion.button
                        className="holo-button text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="relative z-10">{action.action}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-cyber-green/10 via-cyber-blue/10 to-metallic/10 p-6 rounded-lg border border-cyber-green-dark shadow-lg scan-lines">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-cyber-green mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-cyber-green mb-2">
                    +500 Estudantes Atendidos
                  </h4>
                  <p className="text-gray-300">
                    Junte-se à comunidade RUMON e transforme sua experiência universitária
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
            <Zap className="inline-block mr-2" />
            <span className="relative z-10">FALAR COM UM ESPECIALISTA</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;


