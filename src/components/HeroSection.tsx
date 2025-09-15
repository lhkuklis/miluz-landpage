import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('techtalentsolutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#39175d] via-[#0072B1] to-[#00e6c3] font-[Inter,sans-serif]">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/20 rounded-full mix-blend-soft-light filter blur-3xl animate-float" />
        <div className="absolute top-40 right-32 w-80 h-80 bg-[#00e6c3]/30 rounded-full mix-blend-soft-light filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-[#0072B1]/20 rounded-full mix-blend-soft-light filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-white/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="container mx-auto px-6 sm:px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 animate-scale-in">
            <Sparkles className="w-4 h-4 text-[#00e6c3]" />
            <span className="text-sm font-medium text-white/90">Leading Innovation in Tech Talents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9] text-white drop-shadow-2xl">
            Your Strategic <span className="text-[#00e6c3]">IT</span> Talent Partner
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group bg-white text-[#39175d] hover:bg-[#00e6c3] hover:text-white font-bold px-10 py-4 rounded-full shadow-2xl hover:shadow-[#00e6c3]/50 transform hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto border-2 border-transparent hover:border-white/20"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="group border-2 border-white/30 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 text-lg w-full sm:w-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 hover:shadow-lg"
            >
              <Play className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span>{t('hero.learn_more')}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
