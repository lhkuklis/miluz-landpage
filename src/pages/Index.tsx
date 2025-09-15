import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TechTalentSolutionsSection from '@/components/TechTalentSolutionsSection';
import ProcessSection from '@/components/ProcessSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <TechTalentSolutionsSection />
        <ProcessSection />
        <SpecialtiesSection />
        <WhyChooseSection />
        <AboutSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <ScrollToTopButton />
      </div>
    </LanguageProvider>
  );
};

export default Index;
