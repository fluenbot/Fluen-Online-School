import React from 'react';
import { Briefcase, Heart, Compass, ArrowRight } from 'lucide-react';
import { Language, ForWhom, EnglishLevel } from '../types';
import { translations } from '../i18n/translations';

interface TargetAudienceProps {
  lang: Language;
  onSelectAudience: (params: { forWhom?: ForWhom; level?: EnglishLevel }) => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ lang, onSelectAudience }) => {
  const t = translations[lang].audience;

  return (
    <section id="audience" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Adults */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-105 transition-transform">
                <Briefcase className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.adults.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t.adults.desc}
              </p>
            </div>

            <button
              onClick={() => onSelectAudience({ forWhom: 'myself' })}
              className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors cursor-pointer"
            >
              <span>{t.adults.button}</span>
              <ArrowRight className="w-4 h-4 text-sky-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Card 2: Kids */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.kids.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t.kids.desc}
              </p>
            </div>

            <button
              onClick={() => onSelectAudience({ forWhom: 'child' })}
              className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors cursor-pointer"
            >
              <span>{t.kids.button}</span>
              <ArrowRight className="w-4 h-4 text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Card 3: From Scratch */}
          <div className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 hover:border-slate-300 transition-all shadow-xs group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {t.zero.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                {t.zero.desc}
              </p>
            </div>

            <button
              onClick={() => onSelectAudience({ level: 'zero' })}
              className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors cursor-pointer"
            >
              <span>{t.zero.button}</span>
              <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
