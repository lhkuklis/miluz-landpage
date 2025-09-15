import React from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, ArrowRight } from 'lucide-react';

const WhyChooseSection = () => {
  const { t } = useLanguage();
  return (
    <section id="whychoose" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU3LDIzLDkzLDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
      
      <div className="container mx-auto px-6 sm:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#39175d] mb-6 tracking-tight leading-tight">
                  {t('home.whychoose.title')}
                </h2>
                <p className="text-xl sm:text-2xl text-[#39175d]/70 leading-relaxed font-light">
                  {t('home.whychoose.desc')}
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:bg-white/80 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-[#00e6c3] flex-shrink-0 mt-0.5" />
                    <span className="text-[#39175d]/90 font-medium">{t(`home.whychoose.benefit.${i+1}`)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {[{
                title: t('home.whychoose.forcompanies.title'),
                desc: t('home.whychoose.forcompanies.desc'),
                gradient: 'from-[#00e6c3] to-[#0072B1]',
                iconBg: 'bg-[#00e6c3]'
              }, {
                title: t('home.whychoose.forprofessionals.title'),
                desc: t('home.whychoose.forprofessionals.desc'),
                gradient: 'from-[#0072B1] to-[#39175d]',
                iconBg: 'bg-[#0072B1]'
              }, {
                title: t('home.whychoose.process.title'),
                desc: t('home.whychoose.process.desc'),
                gradient: 'from-[#39175d] to-[#00e6c3]',
                iconBg: 'bg-gradient-to-r from-[#39175d] to-[#00e6c3]',
                special: true
              }].map((card, i) => (
                <div key={i} className="group relative">
                  <div className={`relative bg-white/90 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${card.special ? 'ring-2 ring-[#00e6c3]/20' : ''}`}>
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-3 text-[#39175d] group-hover:text-[#0072B1] transition-colors duration-300">
                          {card.title}
                        </h3>
                        <p className="text-[#39175d]/70 leading-relaxed font-light">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Decorative glow */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${card.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
