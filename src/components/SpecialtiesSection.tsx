import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Database, Cloud, Smartphone, Briefcase, Shield } from 'lucide-react';
import HighlightedText from './HighlightedText';

const specialties = [
  {
    icon: <Code className="w-10 h-10 text-[#00e6c3]" />, // Development
    titleKey: 'home.specialties.1.title',
    descKey: 'home.specialties.1.desc',
    tagsKey: 'home.specialties.1.tags',
    hover: 'hover:border-[#00e6c3] hover:shadow-[#00e6c3]/30',
  },
  {
    icon: <Database className="w-10 h-10 text-[#0072B1]" />, // Data & Analytics
    titleKey: 'home.specialties.2.title',
    descKey: 'home.specialties.2.desc',
    tagsKey: 'home.specialties.2.tags',
    hover: 'hover:border-[#0072B1] hover:shadow-[#0072B1]/30',
  },
  {
    icon: <Cloud className="w-10 h-10 text-[#39175d]" />, // Cloud & Infrastructure
    titleKey: 'home.specialties.3.title',
    descKey: 'home.specialties.3.desc',
    tagsKey: 'home.specialties.3.tags',
    hover: 'hover:border-[#39175d] hover:shadow-[#39175d]/30',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-[#00e6c3]" />, // Mobile Development
    titleKey: 'home.specialties.4.title',
    descKey: 'home.specialties.4.desc',
    tagsKey: 'home.specialties.4.tags',
    hover: 'hover:border-[#00e6c3] hover:shadow-[#00e6c3]/30',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-[#0072B1]" />, // IT Management
    titleKey: 'home.specialties.5.title',
    descKey: 'home.specialties.5.desc',
    tagsKey: 'home.specialties.5.tags',
    hover: 'hover:border-[#0072B1] hover:shadow-[#0072B1]/30',
  },
  {
    icon: <Shield className="w-10 h-10 text-[#39175d]" />, // Cybersecurity
    titleKey: 'home.specialties.6.title',
    descKey: 'home.specialties.6.desc',
    tagsKey: 'home.specialties.6.tags',
    hover: 'hover:border-[#39175d] hover:shadow-[#39175d]/30',
  },
];

const SpecialtiesSection = () => {
  const { t } = useLanguage();
  return (
    <section id="specialties" className="py-20 bg-white text-center">
      <h2 className="heading-2 mb-4">
        {t('home.specialties.title')}
      </h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#39175d]/80 mb-12">
        {t('home.specialties.desc')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {specialties.map((spec, i) => (
          <div key={i} className={`bg-white rounded-2xl border-2 border-transparent shadow-lg transition-all duration-300 p-10 flex flex-col items-center group cursor-pointer ${spec.hover}`}>
            <span className="flex items-center justify-center w-16 h-16 rounded-xl bg-[#00e6c3]/10 mb-4 transition-transform duration-300 group-hover:scale-110">
              {spec.icon}
            </span>
            <h3 className="font-bold text-xl text-[#39175d] mb-2 group-hover:text-[#00e6c3] transition-colors duration-300">{t(spec.titleKey)}</h3>
            <p className="text-[#39175d]/80 text-base mb-4">{t(spec.descKey)}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {t(spec.tagsKey).split(',').map((tag, idx) => (
                <span key={idx} className="bg-[#00e6c3]/10 text-[#00e6c3] px-3 py-1 rounded-full text-xs font-semibold">
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
