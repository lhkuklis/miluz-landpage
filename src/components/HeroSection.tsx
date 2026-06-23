import React from 'react';
import { Play } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,230,195,0.15),_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(7,179,255,0.16),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.70))]" />
      <div className="absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-4 relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm shadow-black/20 mb-8">
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight sm:leading-[1.05] mb-8 max-w-3xl mx-auto">
            {t('hero.title')}
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-xl text-slate-200 leading-relaxed sm:leading-8 mb-12">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-[#00e6c3] text-slate-950 font-semibold px-10 py-4 rounded-full shadow-lg shadow-[#00e6c34d] hover:shadow-[#00e6c380] transition duration-300"
            >
              {t('hero.cta')}
            </Button>
            <Button
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border border-slate-200/10 text-slate-100 hover:bg-white/10 px-10 py-4 rounded-full transition duration-300"
            >
              {t('hero.learn_more')}
              <Play className="h-5 w-5 ml-2" />
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 text-left max-w-3xl mx-auto text-sm sm:text-base text-slate-200">
            {['hero.bullet.1', 'hero.bullet.2', 'hero.bullet.3'].map((key, index) => (
              <div key={index} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm shadow-black/5">
                <span className="mt-0.5 text-[#00e6c3]">✓</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
