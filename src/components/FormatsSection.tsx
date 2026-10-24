import React from 'react';
import { User, Users, Check, ArrowRight } from 'lucide-react';
import { Language, Format, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface FormatsSectionProps {
  config: SchoolConfig;
  lang: Language;
  onSelectFormat: (format: Format) => void;
}

export const FormatsSection: React.FC<FormatsSectionProps> = ({ config, lang, onSelectFormat }) => {
  const t = translations[lang].formats;

  return (
    <section id="formats" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-4">
            {t.title}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Format 1: Individual */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAFBFD] border border-slate-200/90 shadow-xs relative">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900">
                  <User className="w-6 h-6 text-sky-600" />
                </div>
                <span className="text-xs font-semibold text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200/80">
                  {t.individual.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {t.individual.title}
              </h3>

              <ul className="space-y-3.5 mb-8 text-sm text-slate-600">
                {t.individual.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectFormat('individual')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all shadow-xs cursor-pointer"
            >
              <span>{t.individual.button}</span>
              <ArrowRight className="w-4 h-4 text-sky-600" />
            </button>
          </div>

          {/* Format 2: Mini-groups */}
          <div className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white shadow-lg relative border border-slate-800">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                  <Users className="w-6 h-6" />
                </div>
                {config.groupEnrollmentOpen && (
                  <span className="text-xs font-semibold text-sky-300 bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800/80">
                    {t.enrollingBadge}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {t.group.title}
              </h3>

              <ul className="space-y-3.5 mb-8 text-sm text-slate-300">
                {t.group.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectFormat('group')}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.99]"
            >
              <span>{t.group.button}</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
