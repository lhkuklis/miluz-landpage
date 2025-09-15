import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const servicePages = [
    { key: 'recruitment', path: '/services/recruitment' },
    { key: 'selection', path: '/services/selection' },
    { key: 'consulting', path: '/services/consulting' },
    { key: 'headhunting', path: '/services/headhunting' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/70 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img 
             src="/images/logo.png" 
                alt="Miluz Logo" 
                className="h-10 w-auto drop-shadow-sm"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide"
            >
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('techtalentsolutions')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.techTalentSolutions')}</button>
            <button onClick={() => scrollToSection('process')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.process')}</button>
            <button onClick={() => scrollToSection('specialties')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.specialties')}</button>
            <button onClick={() => scrollToSection('whychoose')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.whyChoose')}</button>
            <button onClick={() => scrollToSection('about')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.testimonials')}</button>
            <button onClick={() => scrollToSection('services')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('contact')} className="text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold text-sm tracking-wide">{t('nav.contact')}</button>
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-[#39175d] hover:text-[#00e6c3] hover:bg-[#39175d]/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#00e6c3]/30">
            <nav className="flex flex-col space-y-3 pt-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.home')}</Link>
              <button onClick={() => {scrollToSection('techtalentsolutions'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.techTalentSolutions')}</button>
              <button onClick={() => {scrollToSection('process'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.process')}</button>
              <button onClick={() => {scrollToSection('specialties'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.specialties')}</button>
              <button onClick={() => {scrollToSection('whychoose'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.whyChoose')}</button>
              <button onClick={() => {scrollToSection('about'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.about')}</button>
              <button onClick={() => {scrollToSection('testimonials'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.testimonials')}</button>
              <button onClick={() => {scrollToSection('services'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.services')}</button>
              <button onClick={() => {scrollToSection('contact'); setIsMenuOpen(false);}} className="text-left text-[#39175d] hover:text-[#00e6c3] transition-colors font-semibold">{t('nav.contact')}</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
