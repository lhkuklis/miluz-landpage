import React from 'react';
import { Search, UserCheck, Lightbulb, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t('services.recruitment.title'),
      description: t('services.recruitment.description'),
      gradient: 'from-[#39175d] to-[#0072B1]'
    },
    {
      icon: UserCheck,
      title: t('services.selection.title'),
      description: t('services.selection.description'),
      gradient: 'from-[#0072B1] to-[#00e6c3]'
    },
    {
      icon: Lightbulb,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      gradient: 'from-[#00e6c3] to-[#39175d]'
    },
    {
      icon: Crown,
      title: t('services.headhunting.title'),
      description: t('services.headhunting.description'),
      gradient: 'from-[#39175d] to-[#00e6c3]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#39175d] mb-4 animate-fade-in">
              {t('services.title')}
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-transparent shadow-lg transition-all duration-500 overflow-hidden animate-fade-in cursor-pointer transform hover:scale-105 hover:border-[#00e6c3]"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 sm:p-8">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#39175d] mb-3 sm:mb-4 group-hover:text-[#00e6c3] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#39175d]/80 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {service.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
