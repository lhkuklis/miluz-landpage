import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white text-[#39175d] border-t border-[#00e6c3]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start md:items-start text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-6 mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <img 
             src="/images/logo.png" 
                alt="Miluz Logo" 
                className="h-10 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-[#39175d]/80 leading-relaxed max-w-xs mx-auto md:mx-0">
              {t('footer.description')}
            </p>
            <div className="flex justify-center md:justify-start space-x-3 mt-2">
              <a
                href="https://www.linkedin.com/company/miluz1"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 bg-[#0A66C2]/10 rounded-lg hover:bg-[#0A66C2] transition-colors duration-300"
                aria-label="Miluz no LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#0A66C2] group-hover:text-white" />
              </a>
              <a
                href="mailto:contact@miluz.work"
                className="group p-2 bg-[#0072B1]/10 rounded-lg hover:bg-[#0072B1] transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-[#0072B1] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4 text-[#00e6c3]">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('techtalentsolutions')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.techTalentSolutions')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.process')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('specialties')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.specialties')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('whychoose')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.whyChoose')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.testimonials')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.services')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-bold text-lg mb-4 text-[#00e6c3]">{t('contact.info.title')}</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@miluz.work"
                className="flex items-center space-x-3 text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
              >
                <Mail className="h-4 w-4 text-[#00e6c3]" />
                <span>contact@miluz.work</span>
              </a>
              <a
                href="https://wa.me/5511969114510"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-[#00e6c3]" />
                <span>+55 11 96911 4510</span>
              </a>
              {/* Número removido conforme solicitado */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#00e6c3]/20 mt-12 pt-8 text-center">
          <p className="text-[#39175d]/80">
            © 2025 Miluz. {t('footer.copyright').replace('© 2024 Miluz. ', '')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
