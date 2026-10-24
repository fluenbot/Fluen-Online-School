import React from 'react';
import { MessageCircle, Smile, Sparkles, UserCheck, Mic, Laptop } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface WhyFluenProps {
  lang: Language;
}

export const WhyFluen: React.FC<WhyFluenProps> = ({ lang }) => {
  const t = translations[lang].why;

  const icons = [
    <MessageCircle className="w-5 h-5 text-sky-600" />,
    <Smile className="w-5 h-5 text-amber-600" />,
    <Sparkles className="w-5 h-5 text-indigo-600" />,
    <UserCheck className="w-5 h-5 text-emerald-600" />,
    <Mic className="w-5 h-5 text-rose-600" />,
    <Laptop className="w-5 h-5 text-blue-600" />,
  ];

  return (
    <section id="why" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Bento Grid / Curated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-5">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
