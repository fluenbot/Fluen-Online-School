import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const t = translations[lang].process;

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Clean Editorial Numbered Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {t.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between relative group hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-sky-600/80 mb-4 tracking-tight">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Шаг {idx + 1} из 4</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-sky-500 transition-colors"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
