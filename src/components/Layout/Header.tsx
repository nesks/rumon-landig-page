'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Cpu, Home, Building2, Users, Camera } from 'lucide-react';
import ThemeToggle from '@/components/UI/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', href: '#home', icon: Home },
    { name: 'Sobre', href: '#sobre', icon: Users },
    { name: 'Serviços', href: '#servicos', icon: Cpu },
    { name: 'Repúblicas', href: '#portfolio', icon: Building2 },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      id="main-header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-lg border-b border-green-500/30 shadow-lg shadow-green-500/10' 
          : 'bg-transparent'
      }`}
    >
      <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="header-content" className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            id="header-logo"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-hover"
            onClick={() => handleNavClick('#home')}
          >
            <motion.div
              id="header-logo-icon"
              animate={{ 
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-400 rounded-lg flex items-center justify-center metallic"
            >
                <img 
                id="header-logo-cpu" 
                src="/icon.png" 
                alt="RUMON Logo" 
                className="bg-white rounded-lg"
              />
            </motion.div>
            <div id="header-logo-text">
              <h1 id="header-logo-title" className="text-2xl lg:text-3xl font-bold holo-text">
                RUMON
              </h1>
              <p id="header-logo-subtitle" className="text-xs text-green-400 tracking-wider">
                FUTURE LIVING
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav id="header-desktop-nav" className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                id={`header-nav-item-${index}`}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  y: -2,
                  textShadow: "0 0 10px #00ff88",
                }}
                className="text-gray-300 hover:text-green-400 transition-all duration-300 relative group cursor-hover flex items-center space-x-2"
              >
                <item.icon id={`header-nav-icon-${index}`} size={16} />
                <span id={`header-nav-text-${index}`}>{item.name}</span>
                <motion.div
                  id={`header-nav-underline-${index}`}
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"
                />
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle */}
          <motion.div
            id="header-actions"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <div id="header-theme-toggle">
              <ThemeToggle />
            </div>
            
            {/* CTA Button */}
            <motion.button
              id="header-cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="holo-button cursor-hover"
              onClick={() => handleNavClick('#portfolio')}
            >
              <span id="header-cta-text" className="relative z-10">CONECTAR</span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            id="header-mobile-menu-button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-green-400 p-2 cursor-hover"
          >
            <motion.div
              id="header-mobile-menu-icon"
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X id="header-mobile-close" size={24} /> : <Menu id="header-mobile-open" size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="header-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-green-500/30 scan-lines"
          >
            <div id="header-mobile-menu-content" className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  id={`header-mobile-nav-item-${index}`}
                  onClick={() => handleNavClick(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors py-3 cursor-hover w-full text-left"
                >
                  <item.icon id={`header-mobile-nav-icon-${index}`} size={20} />
                  <span id={`header-mobile-nav-text-${index}`}>{item.name}</span>
                </motion.button>
              ))}
              <div id="header-mobile-actions" className="flex items-center justify-between mt-4">
                <div id="header-mobile-theme-toggle">
                  <ThemeToggle />
                </div>
                <motion.button
                  id="header-mobile-cta"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="holo-button"
                  onClick={() => handleNavClick('#portfolio')}
                >
                  CONECTAR
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;