import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: TrendingUp,
      number: '3+',
      label: t('about.experience')
    },
    {
      icon: Users,
      number: '500+',
      label: t('about.placements')
    },
    {
      icon: Award,
      number: '50+',
      label: t('about.clients')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#39175d] mb-4 animate-fade-in">
              {t('about.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-base sm:text-lg text-[#39175d]/80 leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-base sm:text-lg text-[#39175d]/80 leading-relaxed">
                {t('about.mission')}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-6 sm:mt-8">
                {[
                  { icon: Target, title: 'Precise Matching', desc: 'Focus on technical and cultural compatibility', color: '#00e6c3' },
                  { icon: Users, title: 'Qualified Network', desc: 'Solid base of specialized professionals', color: '#0072B1' },
                  { icon: Award, title: 'Excellence', desc: 'Optimized processes and guaranteed results', color: '#39175d' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#00e6c3]">
                    <div className="p-2 rounded-lg transition-transform duration-300 group-hover:scale-110" style={{ background: feature.color + '10' }}>
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#39175d] mb-1 group-hover:text-[#00e6c3] transition-colors duration-300 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-[#39175d]/70 text-xs sm:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative z-10">
                <div className="grid grid-cols-1 gap-6 sm:gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center group bg-white rounded-xl border-2 border-transparent shadow-lg transition-all duration-300 p-4 sm:p-6 cursor-pointer hover:border-[#00e6c3]">
                      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#39175d] to-[#00e6c3] rounded-full mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">
                        <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-[#39175d] mb-2 group-hover:text-[#00e6c3] transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-[#39175d]/70 font-medium text-sm sm:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-[#00e6c3] to-[#0072B1] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
