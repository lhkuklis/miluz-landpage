import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Search, ShieldCheck } from 'lucide-react';
import HighlightedText from './HighlightedText';

const ProcessSection = () => {
  const { t } = useLanguage();
  const steps = [
    {
      icon: <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#00e6c3] mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"><Target className="w-8 h-8 text-white" /></span>,
      title: t('home.process.1.title'),
      desc: t('home.process.1.desc'),
      hover: 'hover:border-[#00e6c3] hover:shadow-[#00e6c3]/30',
    },
    {
      icon: <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#0072B1] mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"><Search className="w-8 h-8 text-white" /></span>,
      title: t('home.process.2.title'),
      desc: t('home.process.2.desc'),
      hover: 'hover:border-[#0072B1] hover:shadow-[#0072B1]/30',
    },
    {
      icon: <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00e6c3] to-[#39175d] mb-4 transition-transform duration-300 group-hover:scale-110 shadow-lg"><ShieldCheck className="w-8 h-8 text-white" /></span>,
      title: t('home.process.3.title'),
      desc: t('home.process.3.desc'),
      hover: 'hover:border-[#39175d] hover:shadow-[#39175d]/30',
    },
  ];
  return (
    <section id="process" className="py-20 bg-[#f8fafc] text-center">
      <div className="container mx-auto px-6 sm:px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#39175d] mb-3 sm:mb-4">
          {t('home.process.title')}
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#39175d]/80 mb-8 sm:mb-16 px-4">
          {t('home.process.desc')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col items-center group bg-white rounded-2xl border-2 border-transparent shadow-lg transition-all duration-300 p-6 sm:p-10 cursor-pointer ${step.hover}`}>
              {step.icon}
              <h4 className="font-bold text-lg sm:text-xl mb-2 text-[#39175d] group-hover:text-[#00e6c3] transition-colors duration-300 text-center">{step.title}</h4>
              <p className="text-[#39175d]/80 text-sm sm:text-base max-w-xs text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
