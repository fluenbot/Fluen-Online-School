import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface ReviewsSectionProps {
  lang: Language;
  onOpenForm: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang, onOpenForm }) => {
  const t = translations[lang].reviews;
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-slate-800">
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-300 bg-sky-950/80 px-3 py-1 rounded-md border border-sky-800/80 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.launchNoticeTitle}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance mb-4">
                {t.title}
              </h2>

              <p className="text-base text-slate-300 leading-relaxed mb-6">
                {t.launchNoticeText}
              </p>

              <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 mb-8 max-w-xl">
                <p className="text-sm text-sky-200 font-medium">
                  ✨ {t.firstCohortPerk}
                </p>
              </div>

              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.98]"
              >
                <span>Присоединиться к первому потоку</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-800 shadow-md">
                {!imgError ? (
                  <img
                    src="/src/assets/images/study_cards_atmosphere_1792854182278.jpg"
                    alt="Fluen study atmosphere"
                    className="w-full h-auto aspect-4/3 object-cover"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full aspect-4/3 bg-slate-800 flex items-center justify-center p-6 text-slate-400 text-center text-xs">
                    Fluen Learning Desk
                  </div>
                )}
                <div className="p-4 bg-slate-900/90 text-xs text-slate-400 flex items-center justify-between border-t border-slate-800">
                  <span>Учебные материалы Fluen</span>
                  <span className="text-sky-400 font-medium">Онлайн-платформа</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
