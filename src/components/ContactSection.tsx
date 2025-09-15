import React, { useState } from 'react';
import { Mail, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: 'Hello, I would like to know more about Miluz services. Please contact me.'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Montar mensagem para WhatsApp
    const msg =
      `Nome: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefone: ${formData.phone}\n` +
      `Empresa: ${formData.company}\n` +
      `Mensagem: ${formData.message}`;
    const url = `https://wa.me/5511969114510?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: () => (
        <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.686z"/>
        </svg>
      ),
      label: t('contact.info.whatsapp'),
  link: 'https://wa.me/5511969114510'
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
  link: 'mailto:contact@miluz.work'
    },
    {
      icon: Linkedin,
      label: t('contact.info.linkedin'),
  link: 'https://www.linkedin.com/company/miluzwork'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#39175d] mb-4 animate-fade-in">
              {t('contact.title')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Contact Form */}
            <div className="animate-fade-in flex flex-col justify-center h-full" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#39175d] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#00e6c3]/40 rounded-lg focus:ring-2 focus:ring-[#00e6c3] focus:border-transparent bg-white text-[#39175d] placeholder-[#39175d]/40"
                    placeholder="e.g. John Doe"
                    onInvalid={e => e.currentTarget.setCustomValidity('Please fill out this field.')}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#39175d] mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#00e6c3]/40 rounded-lg focus:ring-2 focus:ring-[#00e6c3] focus:border-transparent bg-white text-[#39175d] placeholder-[#39175d]/40"
                    placeholder="e.g. john@email.com"
                    onInvalid={e => e.currentTarget.setCustomValidity('Please fill out this field.')}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#39175d] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#00e6c3]/40 rounded-lg focus:ring-2 focus:ring-[#00e6c3] focus:border-transparent bg-white text-[#39175d] placeholder-[#39175d]/40"
                    placeholder="e.g. +1 234 567 8901"
                    onInvalid={e => e.currentTarget.setCustomValidity('Please fill out this field.')}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#39175d] mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#00e6c3]/40 rounded-lg focus:ring-2 focus:ring-[#00e6c3] focus:border-transparent bg-white text-[#39175d] placeholder-[#39175d]/40"
                    placeholder={t('contact.form.company')}
                    onInvalid={e => e.currentTarget.setCustomValidity('Please fill out this field.')}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#39175d] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-[#00e6c3]/40 rounded-lg focus:ring-2 focus:ring-[#00e6c3] focus:border-transparent bg-white text-[#39175d] placeholder-[#39175d]/40"
                    placeholder={t('contact.form.message')}
                    onInvalid={e => e.currentTarget.setCustomValidity('Please fill out this field.')}
                    onInput={e => e.currentTarget.setCustomValidity('')}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00e6c3] to-[#0072B1] hover:from-[#0072B1] hover:to-[#00e6c3] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-slide-in-right flex flex-col justify-center h-full" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#00e6c3]/20 shadow-lg">
                <h3 className="text-2xl font-bold text-[#39175d] mb-6">
                  {t('contact.info.title')}
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-lg hover:shadow-lg group hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-2 sm:p-3 bg-gradient-to-r from-[#00e6c3] to-[#0072B1] rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#39175d] group-hover:text-[#0072B1] transition-colors duration-300 text-sm sm:text-base">
                          {info.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Additional CTA */}
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-[#00e6c3] to-[#0072B1] rounded-lg text-white transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                  <h4 className="font-bold text-base sm:text-lg mb-2">
                    {t('contact.quick_response')}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-90">
                    {t('contact.quick_response_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
