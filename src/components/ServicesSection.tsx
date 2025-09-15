import React from 'react';
import { Search, UserCheck, Lightbulb, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import HighlightedText from './HighlightedText';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Search,
      title: <HighlightedText>Monthly Subscription</HighlightedText>,
      description: (
        <>
          <span>
            <HighlightedText>Continuous recruitment</HighlightedText> for tech positions with a fixed monthly fee. Ideal for companies with ongoing hiring needs and demand for agility and predictability.
          </span>
          <ul className="mt-4 list-disc pl-5 text-[#39175d] text-sm">
            <li><HighlightedText>Unlimited positions</HighlightedText> per month</li>
            <li><HighlightedText>Priority service</HighlightedText> and dedicated recruiter</li>
            <li><HighlightedText>Predictable cost</HighlightedText> for your HR budget</li>
            <li><HighlightedText>Agile and assertive hiring</HighlightedText></li>
          </ul>
        </>
      ),
      gradient: 'from-[#39175d] to-[#0072B1]'
    },
    {
      icon: UserCheck,
      title: <HighlightedText>On-Demand Recruitment</HighlightedText>,
      description: (
        <>
          <span>
            <HighlightedText>Single position recruitment</HighlightedText> for specific tech vacancies. Pay only when you need to fill a position, with the same quality and expertise.
          </span>
          <ul className="mt-4 list-disc pl-5 text-[#39175d] text-sm">
            <li><HighlightedText>Pay per vacancy</HighlightedText></li>
            <li><HighlightedText>Specialized tech recruiters</HighlightedText></li>
            <li><HighlightedText>Quality guarantee</HighlightedText> for each hire</li>
            <li><HighlightedText>Full process support</HighlightedText></li>
          </ul>
        </>
      ),
      gradient: 'from-[#0072B1] to-[#00e6c3]'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-2 mb-4 animate-fade-in">
              <HighlightedText>{t('services.title')}</HighlightedText>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 justify-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-transparent shadow-lg transition-all duration-500 overflow-hidden animate-fade-in cursor-pointer transform hover:scale-105 hover:border-[#00e6c3] flex flex-col items-center justify-center text-center"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-8 flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#39175d] mb-4 group-hover:text-[#00e6c3] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <div className="text-[#39175d]/80 leading-relaxed mb-2 sm:mb-4 text-base sm:text-lg">
                    {service.description}
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-4`}></div>
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
