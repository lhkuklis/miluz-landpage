import React from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import HighlightedText from './HighlightedText';

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonials.1.text'),
      author: t('testimonials.1.author'),
      rating: 5
    },
    {
      text: t('testimonials.2.text'),
      author: t('testimonials.2.author'),
      rating: 5
    },
    {
      text: t('testimonials.3.text'),
      author: t('testimonials.3.author'),
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="heading-2 mb-4 animate-fade-in">
              {t('testimonials.title')}
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-transparent shadow-lg transition-all duration-500 p-6 sm:p-8 relative animate-fade-in group cursor-pointer hover:scale-105 hover:border-[#00e6c3]"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 sm:left-8 transition-transform duration-300 group-hover:scale-110">
                  <div className="bg-gradient-to-r from-[#39175d] to-[#00e6c3] p-2 sm:p-3 rounded-full">
                    <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3 sm:mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[#39175d]/80 leading-relaxed mb-4 sm:mb-6 italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-[#00e6c3]/20 pt-3 sm:pt-4">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#00e6c3] to-[#0072B1] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-white font-bold text-xs sm:text-sm">
                        {testimonial.author.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#39175d] group-hover:text-[#00e6c3] transition-colors duration-300 text-sm sm:text-base">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
