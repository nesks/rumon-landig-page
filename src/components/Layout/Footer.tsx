'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp, 
  Heart,
  GraduationCap,
  Shield,
  Zap,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'cyber-green' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'cyber-blue' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'metallic' },
    { icon: Mail, href: 'mailto:contato@rumon.com.br', label: 'Email', color: 'cyber-green' },
  ];

  const quickLinks = [
    { name: 'Início', href: '#home', icon: Building2 },
    { name: 'Sobre', href: '#sobre', icon: Users },
    { name: 'Serviços', href: '#servicos', icon: Zap },
    { name: 'Repúblicas', href: '#portfolio', icon: Building2 },
  ];

  const studentResources = [
    { name: 'Guia do Estudante', href: '#', icon: GraduationCap },
    { name: 'Dicas de Moradia', href: '#', icon: Heart },
    { name: 'Segurança', href: '#', icon: Shield },
    { name: 'Visita às Repúblicas', href: '#', icon: Zap },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="relative bg-black text-white overflow-hidden border-t border-cyber-green-dark">
      {/* Background Effects */}
      <div id="footer-background" className="absolute inset-0 pointer-events-none">
        <div id="footer-gradient" className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 via-cyber-blue/5 to-metallic/5" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => {
          const x1 = (i * 20) % 800;
          const y1 = (i * 25) % 400;
          const x2 = ((i * 30) + 400) % 800;
          const y2 = ((i * 35) + 200) % 400;
          const duration = 6 + (i % 4);

          return (
            <motion.div
              key={i}
              id={`footer-particle-${i}`}
              className="absolute w-1 h-1 bg-cyber-green/20 rounded-full"
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

      <div id="footer-container" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div id="footer-content" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            id="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2"
          >
            <div id="footer-brand-header" className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <motion.div
                id="footer-brand-icon"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center metallic"
              >
                <Building2 id="footer-brand-building" className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </motion.div>
              <div id="footer-brand-text">
                <h3 id="footer-brand-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold holo-text" data-text="RUMON">
                  RUMON
                </h3>
                <p id="footer-brand-subtitle" className="text-xs text-cyber-green tracking-wider">
                  FUTURE LIVING
                </p>
              </div>
            </div>
            
            <p id="footer-brand-description" className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6 max-w-md leading-relaxed">
              A <span id="footer-brand-highlight" className="text-cyber-green font-semibold">RUMON</span> - Repúblicas Unidas JM é a associação 
              que conecta estudantes ao futuro da moradia universitária. Transformamos a experiência 
              universitária através de repúblicas inovadoras e uma comunidade vibrante.
            </p>
            
            {/* Social Links */}
            <div id="footer-social-links" className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  id={`footer-social-${index}`}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-metallic border border-cyber-green-dark rounded-lg flex items-center justify-center hover:bg-${social.color} hover:border-${social.color} transition-all duration-300 cursor-hover`}
                  aria-label={social.label}
                >
                  <social.icon id={`footer-social-icon-${index}`} size={18} className="sm:w-5 sm:h-5 text-cyber-green" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            id="footer-quick-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 id="footer-quick-links-title" className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-cyber-green">Navegação</h4>
            <ul id="footer-quick-links-list" className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name} id={`footer-quick-link-item-${index}`}>
                  <motion.a
                    id={`footer-quick-link-${index}`}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, color: '#00ff88' }}
                    className="text-sm sm:text-base text-gray-300 hover:text-cyber-green transition-colors duration-300 flex items-center space-x-2 cursor-hover"
                  >
                    <link.icon id={`footer-quick-link-icon-${index}`} className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span id={`footer-quick-link-text-${index}`}>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Student Resources */}
          <motion.div
            id="footer-student-resources"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 id="footer-resources-title" className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-cyber-blue">Recursos Estudantis</h4>
            <ul id="footer-resources-list" className="space-y-2 sm:space-y-3">
              {studentResources.map((resource, index) => (
                <li key={resource.name} id={`footer-resource-item-${index}`}>
                  <motion.a
                    id={`footer-resource-${index}`}
                    href={resource.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, color: '#00d4ff' }}
                    className="text-sm sm:text-base text-gray-300 hover:text-cyber-blue transition-colors duration-300 flex items-center space-x-2 cursor-hover"
                  >
                    <resource.icon id={`footer-resource-icon-${index}`} className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span id={`footer-resource-text-${index}`}>{resource.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          id="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-cyber-green-dark"
        >
          <div id="footer-contact-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div id="footer-contact-email" className="flex items-center space-x-3">
              <div id="footer-contact-email-icon" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center">
                <Mail id="footer-contact-email-mail" className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div id="footer-contact-email-info">
                <p id="footer-contact-email-label" className="text-xs sm:text-sm text-gray-400">Email</p>
                <p id="footer-contact-email-value" className="text-sm sm:text-base text-cyber-green font-medium">contato@rumon.com.br</p>
              </div>
            </div>

            <div id="footer-contact-phone" className="flex items-center space-x-3">
              <div id="footer-contact-phone-icon" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center">
                <Phone id="footer-contact-phone-phone" className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div id="footer-contact-phone-info">
                <p id="footer-contact-phone-label" className="text-xs sm:text-sm text-gray-400">Telefone</p>
                <p id="footer-contact-phone-value" className="text-sm sm:text-base text-cyber-green font-medium">(31) 99999-9999</p>
              </div>
            </div>

            <div id="footer-contact-location" className="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div id="footer-contact-location-icon" className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center">
                <MapPin id="footer-contact-location-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
              <div id="footer-contact-location-info">
                <p id="footer-contact-location-label" className="text-xs sm:text-sm text-gray-400">Localização</p>
                <p id="footer-contact-location-value" className="text-sm sm:text-base text-cyber-green font-medium">João Monlevade, MG</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          id="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-cyber-green-dark flex flex-col sm:flex-row justify-between items-center"
        >
          <div id="footer-copyright" className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-0 text-center sm:text-left">
            <p id="footer-copyright-text">&copy; 2024 RUMON - Repúblicas Unidas JM. Todos os direitos reservados.</p>
            <p id="footer-copyright-subtitle" className="mt-1">Transformando a experiência universitária através da inovação.</p>
          </div>

          <motion.button
            id="footer-scroll-top"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyber-green to-cyber-blue rounded-lg flex items-center justify-center border border-cyber-green-dark hover:border-cyber-green transition-all duration-300 cursor-hover"
          >
            <ArrowUp id="footer-scroll-top-icon" className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


