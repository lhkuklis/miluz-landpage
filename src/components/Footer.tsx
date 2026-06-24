import React from 'react';
import { Mail, Phone } from 'lucide-react';
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
        <div className="mb-12 rounded-[2rem] border border-[#00e6c3]/15 bg-[#0f172a] p-8 text-white shadow-2xl shadow-slate-900/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-[#94f4e2] mb-3">
                {t('footer.cta.label')}
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                {t('footer.cta.title')}
              </h2>
              <p className="mt-3 text-slate-300 max-w-2xl">
                {t('footer.cta.description')}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00e6c3] px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-[#00c6a2]"
            >
              {t('footer.cta.button')}
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:items-start text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start gap-6 mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <img 
             src="/images/logo.png" 
                alt="Miluz Logo" 
                className="h-10 w-auto mx-auto md:mx-0"
              />
            </div>
            {/* Description removed per request */}
            <div className="flex justify-center md:justify-start space-x-3 mt-2">
              <a
                href="mailto:contato@miluz.com.br"
                className="group p-2 bg-[#0072B1]/10 rounded-lg hover:bg-[#0072B1] transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-[#0072B1] group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="font-bold text-lg mb-4 text-[#00e6c3]">{t('contact.info.title')}</h3>
            <div className="space-y-3">
              <a
                href="mailto:contato@miluz.com.br"
                className="flex items-center space-x-3 text-[#39175d]/80 hover:text-[#00e6c3] transition-colors duration-300"
              >
                <Mail className="h-4 w-4 text-[#00e6c3]" />
                <span>contato@miluz.com.br</span>
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
          <p className="text-[#39175d]/80 mb-2">
            {t('footer.description')}
          </p>
          <p className="text-[#39175d]/80">
            © 2026 Miluz. CNPJ 47.389.685/0001-73. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
