import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { Rocket, Globe, Users } from 'lucide-react';
// ...existing code...

const TechTalentSolutionsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="techtalentsolutions" className="py-24 bg-gradient-to-b from-white to-slate-50 text-center">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="heading-2 mb-6 tracking-tight">
            {t('home.techTalent.title')}
          </h2>
          <p className="text-xl sm:text-2xl text-[#39175d]/70 leading-relaxed font-light">
            {t('home.techTalent.desc')}
          </p>
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-[#0072B1] mb-16 animate-fade-in">
          {t('home.techTalent.differentials.title')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          { [
            {
              icon: <Rocket className="w-12 h-12 text-white" />,
              title: t('home.techTalent.differentials.1.title'),
              desc: t('home.techTalent.differentials.1.desc'),
              gradient: 'from-[#00e6c3] to-[#0072B1]',
              hoverGradient: 'group-hover:from-[#00e6c3] group-hover:to-[#39175d]',
            },
            {
              icon: <Globe className="w-12 h-12 text-white" />,
              title: t('home.techTalent.differentials.2.title'),
              desc: t('home.techTalent.differentials.2.desc'),
              gradient: 'from-[#0072B1] to-[#39175d]',
              hoverGradient: 'group-hover:from-[#0072B1] group-hover:to-[#00e6c3]',
            },
            {
              icon: <Users className="w-12 h-12 text-white" />,
              title: t('home.techTalent.differentials.3.title'),
              desc: t('home.techTalent.differentials.3.desc'),
              gradient: 'from-[#39175d] to-[#00e6c3]',
              hoverGradient: 'group-hover:from-[#39175d] group-hover:to-[#0072B1]',
            }
          ].map((item, i) => (
            <div key={i} className="group relative">
              {/* Glass Card */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon with gradient background */}
                <div className={`relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${item.gradient} ${item.hoverGradient} flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {item.icon}
                </div>
                
                <h4 className="relative z-10 font-bold text-2xl mb-4 text-[#39175d] group-hover:text-[#0072B1] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="relative z-10 text-[#39175d]/70 text-lg leading-relaxed font-light">
                  {item.desc}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#00e6c3]/10 to-[#0072B1]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-[#39175d]/10 to-[#00e6c3]/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTalentSolutionsSection;
