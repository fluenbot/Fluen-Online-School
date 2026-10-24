import React from 'react';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import { Language, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface FinalCtaProps {
  config: SchoolConfig;
  lang: Language;
  onOpenForm: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ config, lang, onOpenForm }) => {
  const t = translations[lang].finalCta;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 p-8 sm:p-14 lg:p-18 text-center text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 text-balance">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 max-w-xl mx-auto">
              {t.text}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl transition-all shadow-md active:scale-[0.98] cursor-pointer"
              >
                <span>{t.primaryButton}</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Quick messenger contact option */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
              <span>{t.haveQuestions}</span>
              <a
                href={config.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Telegram ({config.telegramUsername})</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href={config.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
