import React from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

interface ServicePageLayoutProps {
  serviceKey: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  features: string[];
  process: string[];
  benefits: string[];
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  serviceKey,
  icon: Icon,
  gradient,
  features,
  process,
  benefits
}) => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/#services"
              className="inline-flex items-center space-x-2 text-miluz-purple hover:text-miluz-blue transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">{t('service.back_to_services')}</span>
            </Link>

            {/* Hero Content */}
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl mb-6`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-miluz-purple mb-6">
                {t(`services.${serviceKey}.title`)}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                {t(`services.${serviceKey}.detailed`)}
              </p>

              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-miluz-purple to-miluz-teal text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {t('service.contact_cta')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-miluz-purple text-center mb-12">
              {t('service.features.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <CheckCircle className="h-8 w-8 text-miluz-teal mb-4" />
                  <h3 className="font-semibold text-miluz-purple mb-2">
                    {t(feature)}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-miluz-purple text-center mb-12">
              {t('service.process.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto`}>
                    {index + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {t(step)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-miluz-purple text-center mb-12">
              {t('service.benefits.title')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-miluz-teal mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    {t(benefit)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-miluz-purple to-miluz-teal">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato e descubra como podemos ajudar sua empresa.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-miluz-purple font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {t('service.cta')}
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePageLayout;
