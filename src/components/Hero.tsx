import React, { useState } from 'react';
import { ArrowRight, Compass, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { Language, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface HeroProps {
  config: SchoolConfig;
  lang: Language;
  onOpenForm: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, lang, onOpenForm }) => {
  const t = translations[lang].hero;
  const [imageError, setImageError] = useState(false);

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-100/30 via-indigo-50/20 to-transparent -z-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Subtle Brand Slogan Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-slate-700 bg-white border border-slate-200/80 rounded-lg shadow-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12] text-balance mb-6">
              {config.headline || t.headline}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {config.subtitle || t.subtitle}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-sm transition-all whitespace-nowrap cursor-pointer"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>

              <button
                onClick={scrollToProcess}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <span>{t.secondaryCta}</span>
              </button>
            </div>

            {/* 3 Key Perks (Quiet unboxed metadata with separators) */}
            <div className="pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-600 font-medium">
              <span>{t.perks.location}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>{t.perks.formats}</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>{t.perks.goals}</span>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
              {!imageError ? (
                <img
                  src="/src/assets/images/hero_teacher_online_1792854181287.jpg"
                  alt="Fluen teacher conducting an online lesson"
                  className="w-full h-auto aspect-16/10 sm:aspect-4/3 object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full aspect-4/3 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center mb-4">
                    <Sparkles className="w-7 h-7 text-sky-300" />
                  </div>
                  <h3 className="text-lg font-bold">Fluen Online Campus</h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-xs">
                    Комфортные интерактивные занятия английским один на один и в мини-группах
                  </p>
                </div>
              )}

              {/* Measured Scrim & Subtle Overlaid Interactive Detail */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.lessonSnippet.title}</h4>
                    <p className="text-xs text-slate-500">{t.lessonSnippet.note}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/60">
                    {t.lessonSnippet.tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
