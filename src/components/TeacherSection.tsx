import React, { useState } from 'react';
import { Award, BookOpen, Compass, ArrowRight, UserCheck } from 'lucide-react';
import { Language, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface TeacherSectionProps {
  config: SchoolConfig;
  lang: Language;
  onOpenForm: () => void;
}

export const TeacherSection: React.FC<TeacherSectionProps> = ({ config, lang, onOpenForm }) => {
  const t = translations[lang].teacher;
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="teacher" className="py-16 sm:py-24 bg-white border-b border-slate-200/60 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Teacher Portrait */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-lg shadow-slate-900/5 max-w-md mx-auto">
              {!photoError ? (
                <img
                  src={config.teacher.photoUrl || '/src/assets/images/teacher_profile_photo_1792854182867.jpg'}
                  alt={config.teacher.name}
                  className="w-full h-auto aspect-4/3 sm:aspect-1/1 object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoError(true)}
                />
              ) : (
                <div className="w-full aspect-1/1 bg-gradient-to-tr from-slate-900 to-indigo-950 flex flex-col items-center justify-center p-8 text-center text-white">
                  <UserCheck className="w-16 h-16 text-sky-400 mb-3" />
                  <span className="text-lg font-bold">{config.teacher.name}</span>
                  <span className="text-xs text-slate-300 mt-1">Сертифицированный преподаватель Fluen</span>
                </div>
              )}

              {/* Quiet caption underneath */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{config.teacher.name}</h4>
                  <p className="text-xs text-slate-500">Преподаватель английского языка</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                  <Award className="w-3.5 h-3.5" />
                  <span>Верифицировано</span>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Biography & Approach */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-lg border border-sky-200/60 mb-5">
              <span>{t.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance mb-6">
              {t.title}
            </h2>

            <div className="text-base text-slate-600 leading-relaxed space-y-4 mb-8">
              <p>
                {config.teacher.bio || t.bio}
              </p>
            </div>

            {/* Verified Attributes List */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-slate-200/80 mb-8">
              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Образование</div>
                  <div className="text-slate-500 mt-0.5">{config.teacher.education}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Уровень языка</div>
                  <div className="text-slate-500 mt-0.5">{config.teacher.level}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Методология</div>
                  <div className="text-slate-500 mt-0.5">{config.teacher.approach}</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenForm}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs cursor-pointer active:scale-[0.98]"
            >
              <span>{t.button}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
