import React from 'react';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Language, Format, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface PricingSectionProps {
  config: SchoolConfig;
  lang: Language;
  onSelectPlan: (format: Format) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ config, lang, onSelectPlan }) => {
  const t = translations[lang].pricing;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FAFBFD] border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {/* Plan 1: Mini-Group */}
          <div className="flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-white border-2 border-sky-600/30 shadow-md shadow-sky-600/5 relative">
            <div className="absolute -top-3.5 left-8 px-3 py-0.5 bg-sky-600 text-white text-xs font-semibold rounded-md shadow-xs">
              Стартовый набор
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t.group.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Для тех, кто ценит разговорную практику и командную атмосферу
              </p>

              {/* Price display with tabular figures */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight">
                    {config.groupPriceGel} {config.currency}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    / {config.groupLessonsPerMonth} уроков в месяц
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  ~{(config.groupPriceGel / config.groupLessonsPerMonth).toFixed(1)} {config.currency} за один урок
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 text-sm text-slate-600">
                {t.group.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('group')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <span>{t.group.button}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>

          {/* Plan 2: Individual */}
          <div className="flex flex-col justify-between p-8 sm:p-9 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {t.individual.title}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Максимальный фокус на персональных целях и гибком расписании
              </p>

              {/* Price display */}
              <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {t.individual.pricePerMonth}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {t.individual.duration}
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {config.individualPriceNote}
                </div>
              </div>

              <ul className="space-y-3.5 mb-8 text-sm text-slate-600">
                {t.individual.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan('individual')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-all cursor-pointer active:scale-[0.98]"
            >
              <span>{t.individual.button}</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Currency & Honesty Clarification */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 leading-relaxed">
            {t.currencyNote}
          </p>
        </div>
      </div>
    </section>
  );
};
