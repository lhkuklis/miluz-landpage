import React from 'react';
import { Trophy, Search, Headphones } from 'lucide-react';

const TechTalentSolutionsSection = () => {
  return (
    <section id="techtalentsolutions" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 sm:px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">Nossos diferenciais</p>
          <h2 className="heading-2 mb-4 sm:mb-6 tracking-tight leading-tight">
            Resultados mais rápidos com menos desgaste para sua equipe
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Trophy className="h-7 w-7 text-white" />,
              title: 'Contratação mais rápida',
              desc: 'Processo otimizado para reduzir tempo de fechamento.'
            },
            {
              icon: <Search className="h-7 w-7 text-white" />,
              title: 'Busca ativa qualificada',
              desc: 'Mapeamento e abordagem de profissionais alinhados.'
            },
            {
              icon: <Headphones className="h-7 w-7 text-white" />,
              title: 'Acompanhamento consultivo',
              desc: 'Suporte do início da vaga até a contratação.'
            }
          ].map((item, index) => (
            <div key={index} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00e6c3] shadow-md shadow-[#00e6c319]">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-950 mb-3">{item.title}</h3>
              <p className="text-slate-700 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechTalentSolutionsSection;
