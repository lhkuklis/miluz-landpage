import React, { createContext, useContext, useState } from 'react';

type Language = 'pt-BR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
    // Navigation
    'nav.home': 'Início',
    'nav.techTalentSolutions': 'Soluções de Talentos',
    'nav.process': 'Processo',
    'nav.specialties': 'Especialidades',
    'nav.whyChoose': 'Por que escolher',
    'nav.about': 'Sobre',
    'nav.testimonials': 'Depoimentos',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',

    // Hero Section
    'hero.title': 'Contrate profissionais qualificados com mais rapidez e menos esforço para o seu time',
    'hero.subtitle': 'Recrutamento e seleção para empresas que precisam preencher vagas com qualidade, processo estruturado e suporte consultivo.',
    'hero.cta': 'Solicitar diagnóstico gratuito',
    'hero.learn_more': 'Agendar conversa',
    'hero.badge': 'Recrutamento e seleção generalista com suporte consultivo',
    'hero.bullet.1': 'Atendimento consultivo desde o briefing',
    'hero.bullet.2': 'Vagas preenchidas com maior assertividade',
    'hero.bullet.3': 'Processo ágil e transparente durante toda a contratação',

    // About Section
    'about.title': 'Quem somos',
    'about.description': 'A Miluz é uma consultoria de recrutamento e seleção generalista que conecta empresas a profissionais qualificados nas áreas mais estratégicas. Atuamos com processo consultivo, mapeamento ativo e suporte até a contratação.',
    'about.mission': 'Nossa missão é tornar seu recrutamento mais rápido, mais assertivo e menos custoso para o seu time de RH.',
    'about.experience': 'Anos de experiência',
    'about.placements': 'Contratações realizadas',
    'about.clients': 'Clientes satisfeitos',
    'about.cta': 'Solicitar diagnóstico gratuito',

    // About Features
    'about.feature.matching.title': 'Matching altamente assertivo',
    'about.feature.matching.desc': 'Selecionamos candidatos com foco em fit cultural, competências e potencial de impacto na sua empresa.',
    'about.feature.network.title': 'Rede ativa e qualificada',
    'about.feature.network.desc': 'Procuramos profissionais em vários canais e abordamos talentos que não estão no mercado aberto.',
    'about.feature.excellence.title': 'Execução com transparência',
    'about.feature.excellence.desc': 'Acompanhamos cada etapa com comunicação clara e entregas rápidas para sua tomada de decisão.',

    // Services Section
    'services.title': 'Nossos Serviços',
    'services.recruitment.title': 'Recrutamento Especializado',
    'services.recruitment.description': 'Identificamos e selecionamos os melhores profissionais para sua empresa, em TI e outras áreas.',
    'services.recruitment.detailed': 'Nosso processo combina análise de mercado, mapeamento ativo e entrevistas detalhadas para encontrar os candidatos mais alinhados ao seu negócio.',
    'services.selection.title': 'Processo de Seleção',
    'services.selection.description': 'Processos estruturados com avaliações técnicas, comportamentais e fit cultural.',
    'services.selection.detailed': 'Desenvolvemos processos sob medida, usando entrevistas, testes e análises comportamentais para garantir a escolha mais assertiva.',
    'services.consulting.title': 'Consultoria de RH',
    'services.consulting.description': 'Orientação estratégica para otimizar recrutamento, retenção e desenvolvimento de talentos.',
    'services.consulting.detailed': 'Oferecemos consultoria para aprimorar seus processos de RH e recrutamento, com foco em organização, employer branding e retenção de profissionais.',
    'services.headhunting.title': 'Headhunting',
    'services.headhunting.description': 'Busca ativa de profissionais estratégicos e líderes para posições-chave.',
    'services.headhunting.detailed': 'Especialistas em encontrar líderes e talentos de alta performance, com processo confidencial e foco no impacto para o negócio.',

    // Service Pages
    'service.back_to_services': 'Voltar aos serviços',
    'service.contact_cta': 'Fale conosco sobre este serviço',
    'service.features.title': 'Diferenciais do serviço',
    'service.process.title': 'Como funciona',
    'service.benefits.title': 'Benefícios',
    'service.cta': 'Entre em contato',

    // Recruitment Page
    'recruitment.features.1': 'Mapeamento completo de mercado',
    'recruitment.features.2': 'Análise de perfil técnico e comportamental',
    'recruitment.features.3': 'Processo ágil e transparente',
    'recruitment.features.4': 'Acompanhamento pós-contratação',
    'recruitment.process.1': 'Análise da vaga e necessidades',
    'recruitment.process.2': 'Mapeamento e prospecção ativa',
    'recruitment.process.3': 'Triagem e entrevistas iniciais',
    'recruitment.process.4': 'Apresentação dos melhores candidatos',
    'recruitment.benefits.1': 'Redução do tempo de contratação',
    'recruitment.benefits.2': 'Acesso a talentos qualificados',
    'recruitment.benefits.3': 'Garantia de qualidade',
    'recruitment.benefits.4': 'Suporte completo durante o processo',

    // Selection Page
    'selection.features.1': 'Avaliações técnicas personalizadas',
    'selection.features.2': 'Testes comportamentais especializados',
    'selection.features.3': 'Entrevistas estruturadas',
    'selection.features.4': 'Relatórios detalhados de candidato',
    'selection.process.1': 'Definição de critérios de seleção',
    'selection.process.2': 'Aplicação de testes alinhados à vaga',
    'selection.process.3': 'Entrevistas comportamentais',
    'selection.process.4': 'Relatório final e recomendação',
    'selection.benefits.1': 'Seleção mais assertiva',
    'selection.benefits.2': 'Menor turnover',
    'selection.benefits.3': 'Melhor fit cultural',
    'selection.benefits.4': 'Processo justo e transparente',

    // Consulting Page
    'consulting.features.1': 'Diagnóstico de processos de RH',
    'consulting.features.2': 'Estratégias de retenção de talentos',
    'consulting.features.3': 'Estruturação e governança de times',
    'consulting.features.4': 'Implementação de melhorias',
    'consulting.process.1': 'Análise dos processos atuais',
    'consulting.process.2': 'Identificação de oportunidades',
    'consulting.process.3': 'Desenvolvimento de estratégia',
    'consulting.process.4': 'Implementação e monitoramento',
    'consulting.benefits.1': 'Processos mais eficientes',
    'consulting.benefits.2': 'Melhor retenção de talentos',

    'home.process.title': 'Nosso Processo de Recrutamento',
    'home.process.desc': 'Uma abordagem estratégica e ágil para conectar sua empresa aos melhores talentos do mercado.',
    'home.process.1.title': 'Definição de Perfil',
    'home.process.1.desc': 'Analisamos as necessidades, cultura e desafios da sua empresa para definir o perfil ideal e o plano de atração.',
    'home.process.2.title': 'Busca Ativa e Triagem',
    'home.process.2.desc': 'Realizamos mapeamento, prospecção e pré-seleção de candidatos por meio de diversas fontes e inteligência de mercado.',
    'home.process.3.title': 'Entrevistas e Contratação',
    'home.process.3.desc': 'Garantimos alinhamento entre candidato e empresa com entrevistas, avaliações e apoio na negociação.',

    'headhunting.process.1': 'Mapeamento de executivos',
    'headhunting.process.2': 'Abordagem personalizada',
    'headhunting.process.3': 'Avaliação de competências de liderança',
    'headhunting.process.4': 'Facilitação da contratação',
    'headhunting.benefits.1': 'Acesso a executivos seniores',
    'headhunting.benefits.2': 'Processo confidencial',
    'headhunting.benefits.3': 'Seleção de líderes estratégicos',
    'headhunting.benefits.4': 'Apoio completo na negociação',

    // Testimonials Section
    'testimonials.title': 'O que nossos clientes dizem',
    'testimonials.subtitle': 'Depoimentos reais de empresas que aceleraram contratações com a Miluz.',
    'testimonials.1.text': 'A Miluz trouxe candidatos verdadeiramente alinhados ao nosso perfil e reduziu o tempo de contratação pela metade.',
    'testimonials.1.author': 'CTO de Startup',
    'testimonials.2.text': 'Profissionalismo excepcional e compreensão do mercado. Recomendo fortemente seus serviços.',
    'testimonials.2.author': 'Diretor de Operações',
    'testimonials.3.text': 'O matching foi perfeito! A qualidade dos candidatos superou nossas expectativas.',
    'testimonials.3.author': 'Head de Produto',

    // Contact Section
    'contact.title': 'Fale conosco',
    'contact.subtitle': 'Vamos conversar sobre as suas necessidades',
    'contact.form.name': 'Nome completo',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefone',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar mensagem',
    'contact.placeholder.name': 'Ex. João Silva',
    'contact.placeholder.email': 'Ex. joao@empresa.com',
    'contact.placeholder.phone': 'Ex. +55 11 99999-9999',
    'contact.placeholder.company': 'Ex. Minha Empresa',
    'contact.placeholder.message': 'Escreva aqui sua mensagem',
    'contact.message.default': 'Olá, gostaria de saber mais sobre os serviços da Miluz. Por favor, entre em contato.',
    'contact.info.title': 'Informações de contato',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.email': 'E-mail',
    'contact.info.linkedin': 'LinkedIn',
    'contact.sending': 'Enviando...',
    'contact.quick_response': 'Resposta rápida',
    'contact.quick_response_desc': 'Normalmente respondemos em até 2 horas úteis.',
    'contact.success.title': 'Mensagem enviada!',
    'contact.success.description': 'Entraremos em contato em breve via WhatsApp.',
    'contact.error.title': 'Erro',
    'contact.error.description': 'Houve um erro ao enviar sua mensagem. Por favor, tente novamente.',
    'contact.validation.required': 'Por favor, preencha este campo.',

    // Footer
    'footer.copyright': 'Todos os direitos reservados.',
    'footer.description': 'Consultoria de recrutamento e seleção para todas as áreas.',
    'footer.cta.label': 'Pronto para contratar?',
    'footer.cta.title': 'Vamos acelerar sua próxima contratação',
    'footer.cta.description': 'Receba orientação consultiva, shortlist qualificado e diagnóstico de recrutamento gratuito para sua equipe.',
    'footer.cta.button': 'Solicitar diagnóstico',

    // TechTalentSolutionsSection
    'home.techTalent.title': 'Soluções de Talentos para o seu negócio',
    'home.techTalent.desc': 'Atuamos com recrutamento e seleção generalista para empresas que buscam agilidade, qualidade e assertividade. Unimos processos estratégicos, tecnologia e networking para entregar profissionais alinhados ao seu time.',
    'home.techTalent.differentials.title': 'Nossos diferenciais',
    'home.techTalent.differentials.1.title': 'Contratações rápidas e escaláveis',
    'home.techTalent.differentials.1.desc': 'Entregamos candidatos qualificados em prazos ágeis para apoiar seu crescimento.',
    'home.techTalent.differentials.2.title': 'Experiência e inteligência de mercado',
    'home.techTalent.differentials.2.desc': 'Usamos métodos proativos e dados para encontrar profissionais com alto potencial de ajuste.',
    'home.techTalent.differentials.3.title': 'Processo estruturado e consultivo',
    'home.techTalent.differentials.3.desc': 'Times dedicados a cada vaga, com acompanhamento consultivo do início ao fim.',

    // Specialties Section
    'home.specialties.title': 'Especialidades que atendemos',
    'home.specialties.desc': 'Recrutamos talentos para áreas-chave da sua empresa, com foco em fit cultural, resultado e alinhamento estratégico.',
    'home.specialties.1.title': 'Comercial e Vendas',
    'home.specialties.1.desc': 'Profissionais para crescimento de receita, gestão de contas e desenvolvimento de negócios.',
    'home.specialties.1.tags': 'Vendas, SDR, Account Executive',
    'home.specialties.2.title': 'Marketing e Customer Success',
    'home.specialties.2.desc': 'Times focados em geração de demanda, marca e experiência do cliente.',
    'home.specialties.2.tags': 'Marketing, Customer Success, Comunicação',
    'home.specialties.3.title': 'Operações e Logística',
    'home.specialties.3.desc': 'Profissionais que mantêm operações eficientes e entregas consistentes.',
    'home.specialties.3.tags': 'Operações, Logística, Suprimentos',
    'home.specialties.4.title': 'Finanças e Controladoria',
    'home.specialties.4.desc': 'Especialistas em finanças, planejamento e controle para decisões seguras.',
    'home.specialties.4.tags': 'Finanças, Contabilidade, Controladoria',
    'home.specialties.5.title': 'Recursos Humanos e Pessoas',
    'home.specialties.5.desc': 'Recrutamos talentos que fortalecem cultura, liderança e desenvolvimento humano.',
    'home.specialties.5.tags': 'RH, Talent Acquisition, Employer Branding',
    'home.specialties.6.title': 'Tecnologia e Digital',
    'home.specialties.6.desc': 'Desenvolvimento de produtos, dados e infraestrutura para negócios digitais.',
    'home.specialties.6.tags': 'TI, Produto, Dados',

    // Why Choose Section
    'home.whychoose.title': 'Por que escolher a Miluz?',
    'home.whychoose.desc': 'Acelere suas contratações com um parceiro que entende pessoas, cultura e mercado.',
    'home.whychoose.benefit.1': 'Recrutamento e seleção generalista',
    'home.whychoose.benefit.2': 'Contratações ágeis e assertivas',
    'home.whychoose.benefit.3': 'Atendimento personalizado',
    'home.whychoose.benefit.4': 'Acesso a talentos qualificados',
    'home.whychoose.benefit.5': 'Suporte completo em todas as etapas',
    'home.whychoose.benefit.6': 'Experiência de mercado',
    'home.whychoose.forcompanies.title': 'Para empresas',
    'home.whychoose.forcompanies.desc': 'Soluções customizadas para empresas em crescimento e operações maduras.',
    'home.whychoose.forprofessionals.title': 'Para profissionais',
    'home.whychoose.forprofessionals.desc': 'Oportunidades em empresas que valorizam talento e desenvolvimento.',
    'home.whychoose.process.title': 'Nosso processo',
    'home.whychoose.process.desc': 'Abordagem estruturada e transparente para acelerar contratações.',
    'home.whychoose.stats.1': '500+',
    'home.whychoose.stats.2': '98%',
    'home.whychoose.stats.3': '6+',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

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
