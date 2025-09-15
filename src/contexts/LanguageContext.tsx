import React, { createContext, useContext, useState } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.techTalentSolutions': 'Tech Talent Solutions',
    'nav.process': 'Process',
    'nav.specialties': 'Specialties',
    'nav.whyChoose': 'Why Choose',
    'nav.about': 'About',
    'nav.testimonials': 'Testimonials',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Your Strategic IT Talent Partner',
    'hero.subtitle': 'We connect innovative companies with the best technology professionals in the market. Tech recruitment specialists focused on quality and precision.',
    'hero.cta': 'Contact Us',
    'hero.learn_more': 'Learn More',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'Miluz is a consultancy specialized in technology talent recruitment and selection. With years of market experience, we connect innovative companies with qualified professionals, focusing on perfect cultural and technical matching.',
    'about.mission': 'Our mission is to transform the tech recruitment process, offering personalized solutions that meet each client\'s specific needs.',
    'about.experience': 'Years of Experience',
    'about.placements': 'Professionals Placed',
    'about.clients': 'Satisfied Clients',
    
    // Services Section
    'services.title': 'Our Services',
    'services.recruitment.title': 'Specialized Recruitment',
    'services.recruitment.description': 'We identify and select the best technology talents for your company.',
    'services.recruitment.detailed': 'Our specialized recruitment process uses advanced methodologies to identify and attract the best technology professionals in the market. We combine traditional techniques with innovative digital tools to ensure we find the ideal candidate for each position.',
    'services.selection.title': 'Selection Process',
    'services.selection.description': 'Structured processes with personalized technical and behavioral assessments.',
    'services.selection.detailed': 'We develop personalized selection processes that evaluate both technical competencies and cultural fit. We use practical tests, behavioral interviews, and psychometric analyses to ensure the best selection.',
    'services.consulting.title': 'HR Consulting',
    'services.consulting.description': 'Strategic guidance to optimize your hiring and retention processes.',
    'services.consulting.detailed': 'We offer specialized consulting to optimize your tech HR processes, from team structuring to defining talent retention strategies. We help companies create organizational cultures attractive to technology professionals.',
    'services.headhunting.title': 'Executive Search',
    'services.headhunting.description': 'Active search for tech executives and leaders for strategic positions.',
    'services.headhunting.detailed': 'Specialists in identifying and recruiting technology executives for leadership positions. Our executive search process is discreet, efficient, and focused on professionals who can transform organizations.',
    
    // Service Pages
    'service.back_to_services': 'Back to Services',
    'service.contact_cta': 'Contact Us About This Service',
    'service.features.title': 'Service Features',
    'service.process.title': 'How It Works',
    'service.benefits.title': 'Benefits',
    
    // Recruitment Page
    'recruitment.features.1': 'Complete tech market mapping',
    'recruitment.features.2': 'Technical and behavioral profile analysis',
    'recruitment.features.3': 'Agile and transparent process',
    'recruitment.features.4': 'Post-hiring follow-up',
    'recruitment.process.1': 'Detailed job and requirements analysis',
    'recruitment.process.2': 'Candidate mapping and sourcing',
    'recruitment.process.3': 'Initial screening and technical assessment',
    'recruitment.process.4': 'Presentation of the best profiles',
    'recruitment.benefits.1': 'Reduced hiring time',
    'recruitment.benefits.2': 'Access to qualified talents',
    'recruitment.benefits.3': 'Candidate quality guarantee',
    'recruitment.benefits.4': 'Complete support throughout the process',
    
    // Selection Page
    'selection.features.1': 'Personalized technical assessments',
    'selection.features.2': 'Specialized behavioral tests',
    'selection.features.3': 'Structured interviews',
    'selection.features.4': 'Detailed candidate reports',
    'selection.process.1': 'Definition of selection criteria',
    'selection.process.2': 'Application of technical tests',
    'selection.process.3': 'Behavioral interviews',
    'selection.process.4': 'Final report and recommendation',
    'selection.benefits.1': 'More assertive selection',
    'selection.benefits.2': 'Reduced turnover',
    'selection.benefits.3': 'Better cultural fit',
    'selection.benefits.4': 'Structured and fair process',
    
    // Consulting Page
    'consulting.features.1': 'HR process diagnosis',
    'consulting.features.2': 'Talent retention strategies',
    'consulting.features.3': 'Tech team structuring',
    'consulting.features.4': 'Implementation of improvements',
    'consulting.process.1': 'Analysis of current processes',
    'consulting.process.2': 'Identification of opportunities',
    'consulting.process.3': 'Strategy development',
    'consulting.process.4': 'Implementation and monitoring',
    'consulting.benefits.1': 'More efficient processes',
    'consulting.benefits.2': 'Better talent retention',
    'home.process.title': 'Our Recruitment Process',
    'home.process.desc': 'A strategic, technology-driven approach to connect your company with top IT professionals.',
    'home.process.1.title': 'Profile Definition',
    'home.process.1.desc': "We analyze your company's needs, culture, and requirements. Strategic meetings with managers help define the ideal candidate profile and create a tailored action plan for sourcing and screening.",
    'home.process.2.title': 'Active Search & Screening',
    'home.process.2.desc': 'We identify and pre-qualify the best candidates using platforms like LinkedIn, social networks, and AI-powered CV analysis. We also run campaigns to attract high-performance talent.',
    'home.process.3.title': 'Interviews & Hiring',
    'home.process.3.desc': "We ensure candidates meet your expectations and align with your culture. Technical and behavioral interviews, aptitude tests, and negotiation support are provided through onboarding.",
    'headhunting.process.1': 'Target executive mapping',
    'headhunting.process.2': 'Personalized approach',
    'headhunting.process.3': 'Leadership competency evaluation',
    'headhunting.process.4': 'Hiring facilitation',
    'headhunting.benefits.1': 'Access to high-level executives',
    'headhunting.benefits.2': 'Confidential process',
    'headhunting.benefits.3': 'Selection of transformational leaders',
    'headhunting.benefits.4': 'Complete negotiation support',
    
    // Testimonials Section
    'testimonials.title': 'What Our Clients Say',
    'testimonials.1.text': 'Miluz transformed our hiring process. In just 3 weeks, they found the perfect senior developer for our team.',
    'testimonials.1.author': 'Fintech Startup CTO',
    'testimonials.2.text': 'Exceptional professionalism and deep understanding of the tech market. I highly recommend their services.',
    'testimonials.2.author': 'Technology Director',
    'testimonials.3.text': 'The matching was perfect! The quality of candidates presented exceeded our expectations.',
    'testimonials.3.author': 'Head of Product',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s talk about your needs',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.email': 'Email',
    'contact.info.linkedin': 'LinkedIn',
    'contact.sending': 'Sending...',
    'contact.quick_response': 'Quick Response',
    'contact.quick_response_desc': 'We usually reply within 2 business hours.',
    
    // Footer
    'footer.copyright': '© 2024 Miluz. All rights reserved.',
    'footer.description': 'Consultancy specialized in technology talent recruitment and selection.',
    
    // TechTalentSolutionsSection
    'home.techTalent.title': 'Tech Talent Solutions for Every Business',
    'home.techTalent.desc': 'We are specialists in technology and engineering recruitment, delivering customized, high quality hiring solutions for companies of all sizes, from agile startups to AI powered enterprises. Combining our specialized recruiter network with cutting edge technology, we optimize talent acquisition for maximum efficiency. Unlike traditional agencies, our flexible and targeted approach ensures your business connects with top tier professionals across diverse roles and industries, driving innovation and long term success.',
    'home.techTalent.differentials.title': 'Our Key Differentials',
    'home.techTalent.differentials.1.title': 'Fast and Scalable Hiring',
    'home.techTalent.differentials.1.desc': "Delivery of qualified candidates within 72 hours, ensuring efficiency in filling critical positions and accelerating your team's growth.",
    'home.techTalent.differentials.2.title': 'Maximum Expertise',
    'home.techTalent.differentials.2.desc': 'Advanced technology and proactive methods to source top talent worldwide, leveraging AI and data analytics for precision matching.',
    'home.techTalent.differentials.3.title': 'Specialized and structured hiring process',
    'home.techTalent.differentials.3.desc': 'An exclusive team per position, including senior recruiters and comprehensive client support, prioritizing quality and cultural fit above all.',

    // Specialties Section
    'home.specialties.title': 'Our Specialties',
    'home.specialties.desc': 'We cover a wide range of technology specialties to meet every business need.',
    'home.specialties.1.title': 'Software Development',
    'home.specialties.1.desc': 'Front-end, back-end, and full-stack development for web and mobile applications.',
    'home.specialties.1.tags': 'React, Node.js, Python, Java, Mobile',
    'home.specialties.2.title': 'Data & Analytics',
    'home.specialties.2.desc': 'Data engineering, analytics, and business intelligence solutions.',
    'home.specialties.2.tags': 'SQL, Power BI, Data Science, Big Data',
    'home.specialties.3.title': 'Cloud & DevOps',
    'home.specialties.3.desc': 'Cloud infrastructure, automation, and DevOps practices.',
    'home.specialties.3.tags': 'AWS, Azure, Docker, Kubernetes',
    'home.specialties.4.title': 'Product & UX/UI',
    'home.specialties.4.desc': 'Product management, user experience, and interface design.',
    'home.specialties.4.tags': 'Figma, Product Owner, UX Research',
    'home.specialties.5.title': 'QA & Testing',
    'home.specialties.5.desc': 'Quality assurance and automated/manual testing.',
    'home.specialties.5.tags': 'Cypress, Selenium, Manual QA',
    'home.specialties.6.title': 'Cybersecurity',
    'home.specialties.6.desc': 'Security analysis, risk management, and compliance.',
    'home.specialties.6.tags': 'Pentest, SOC, ISO 27001',

    // Why Choose Section
    'home.whychoose.title': 'Why Choose Miluz?',
    'home.whychoose.desc': 'Discover the benefits of working with a specialized tech recruitment partner.',
    'home.whychoose.benefit.1': 'Specialized tech recruitment',
    'home.whychoose.benefit.2': 'Fast and assertive hiring',
    'home.whychoose.benefit.3': 'Personalized service',
    'home.whychoose.benefit.4': 'Access to top talent',
    'home.whychoose.benefit.5': 'Complete process support',
    'home.whychoose.benefit.6': 'Market expertise',
    'home.whychoose.forcompanies.title': 'For Companies',
    'home.whychoose.forcompanies.desc': 'Solutions tailored for startups, scale-ups, and enterprises.',
    'home.whychoose.forprofessionals.title': 'For Professionals',
    'home.whychoose.forprofessionals.desc': 'Opportunities for tech professionals seeking new challenges.',
    'home.whychoose.process.title': 'Our Process',
    'home.whychoose.process.desc': 'A structured and transparent approach to hiring.',
    'home.whychoose.stats.1': '500+',
    'home.whychoose.stats.2': '98%',
    'home.whychoose.stats.3': '6+',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
