'use client';

import dynamic from 'next/dynamic';

// Components
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import ServicesSection from '@/components/Sections/ServicesSection';
import PortfolioSection from '@/components/Sections/PortfolioSection';
import TestimonialsSection from '@/components/Sections/TestimonialsSection';

// Animations
import ScrollProgressBar from '@/components/Animations/ScrollProgressBar';
import CustomCursor from '@/components/Animations/CustomCursor';

// Dynamic imports for better performance
const FloatingElements = dynamic(() => import('@/components/3D/FloatingElements'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10" />,
});

export default function Home() {
  return (
    <>
      {/* Global Elements */}
      <ScrollProgressBar />
      <CustomCursor />
      <FloatingElements />

      {/* Layout */}
      <Header />

      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
