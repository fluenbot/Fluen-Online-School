import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Send, MessageCircle, Phone, Sparkles } from 'lucide-react';
import {
  Language,
  SchoolConfig,
  ForWhom,
  Format,
  EnglishLevel,
  Goal,
  ContactChannel,
  LeadSubmission,
} from '../types';
import { translations } from '../i18n/translations';
import { saveNewLead } from '../utils/leadsStorage';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  lang: Language;
  initialForWhom?: ForWhom;
  initialFormat?: Format;
  initialLevel?: EnglishLevel;
  onSuccessSubmitted?: () => void;
}

export const LeadFormModal: React.FC<LeadFormModalProps> = ({
  isOpen,
  onClose,
  config,
  lang,
  initialForWhom = 'myself',
  initialFormat = 'undecided',
  initialLevel = 'unknown',
  onSuccessSubmitted,
}) => {
  const t = translations[lang].form;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [forWhom, setForWhom] = useState<ForWhom>(initialForWhom);
  const [format, setFormat] = useState<Format>(initialFormat);
  const [level, setLevel] = useState<EnglishLevel>(initialLevel);
  const [goal, setGoal] = useState<Goal>('speaking');
  const [name, setName] = useState('');
  const [channel, setChannel] = useState<ContactChannel>('telegram');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      if (initialForWhom) setForWhom(initialForWhom);
      if (initialFormat) setFormat(initialFormat);
      if (initialLevel) setLevel(initialLevel);
      setStep(1);
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen, initialForWhom, initialFormat, initialLevel]);

  if (!isOpen) return null;

  const handleNextFromStep1 = () => {
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Anti-spam check
    if (honeypot) {
      console.warn('Bot detected via honeypot');
      setIsSuccess(true);
      return;
    }

    if (!name.trim()) {
      setErrorMsg('Пожалуйста, укажите ваше имя.');
      return;
    }

    if (!contact.trim()) {
      setErrorMsg('Пожалуйста, укажите контакт для связи (Telegram, WhatsApp или телефон).');
      return;
    }

    setIsSubmitting(true);

    try {
      saveNewLead({
        name: name.trim(),
        contact: contact.trim(),
        channel,
        forWhom,
        format,
        level,
        goal,
        comment: comment.trim(),
        sourceLanguage: lang,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccessSubmitted) {
        onSuccessSubmitted();
      }
    } catch (err) {
      console.error('Error saving lead', err);
      setIsSubmitting(false);
      setErrorMsg('Произошла ошибка при сохранении заявки. Попробуйте еще раз или напишите нам напрямую в мессенджер.');
    }
  };

  // Generate Telegram direct link with pre-filled message text
  const getDirectTelegramLink = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Хочу записаться в Fluen.\nИмя: ${name || 'Гость'}\nФормат: ${format}\nДля кого: ${forWhom}\nУровень: ${level}`
    );
    return `${config.telegramUrl}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-5 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
            {!isSuccess && (
              <p className="text-xs text-slate-500 mt-0.5">
                {step === 1 ? t.step1 : step === 2 ? t.step2 : t.step3}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        {!isSuccess && (
          <div className="h-1 bg-slate-100 w-full flex">
            <div
              className="h-full bg-sky-500 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mx-auto mb-5 shadow-xs">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">{t.successTitle}</h4>
              <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto mb-8">
                {t.successText}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-8 max-w-md mx-auto text-left">
                <p className="text-xs font-semibold text-slate-500 mb-2">
                  {t.chatDirectly}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={getDirectTelegramLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-xl transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Открыть диалог в Telegram</span>
                  </a>
                  <a
                    href={config.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                {t.closeButton}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Invisible Honeypot */}
              <input
                type="text"
                name="website_fluen_trap"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* STEP 1: For Whom & Format */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* For Whom */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      {t.forWhomLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setForWhom('myself')}
                        className={`p-3.5 text-left rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                          forWhom === 'myself'
                            ? 'border-sky-500 bg-sky-50/50 text-slate-900 shadow-xs'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{t.forMyself}</span>
                          {forWhom === 'myself' && <Check className="w-4 h-4 text-sky-600" />}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setForWhom('child')}
                        className={`p-3.5 text-left rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                          forWhom === 'child'
                            ? 'border-sky-500 bg-sky-50/50 text-slate-900 shadow-xs'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{t.forChild}</span>
                          {forWhom === 'child' && <Check className="w-4 h-4 text-sky-600" />}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Format */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      {t.formatLabel}
                    </label>
                    <div className="space-y-2.5">
                      <button
                        type="button"
                        onClick={() => setFormat('group')}
                        className={`w-full p-3.5 text-left rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                          format === 'group'
                            ? 'border-sky-500 bg-sky-50/50 text-slate-900 shadow-xs font-semibold'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-slate-900">{t.formatGroup}</div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              {config.groupPriceGel} {config.currency} / месяц · 8 занятий в небольшой группе
                            </div>
                          </div>
                          {format === 'group' && <Check className="w-4 h-4 text-sky-600 shrink-0" />}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormat('individual')}
                        className={`w-full p-3.5 text-left rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                          format === 'individual'
                            ? 'border-sky-500 bg-sky-50/50 text-slate-900 shadow-xs font-semibold'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-slate-900">{t.formatIndividual}</div>
                            <div className="text-xs text-slate-500 mt-0.5">
                              Персональные занятия 1-на-1 под твои цели
                            </div>
                          </div>
                          {format === 'individual' && <Check className="w-4 h-4 text-sky-600 shrink-0" />}
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormat('undecided')}
                        className={`w-full p-3.5 text-left rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                          format === 'undecided'
                            ? 'border-sky-500 bg-sky-50/50 text-slate-900 shadow-xs font-semibold'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-slate-800 font-medium">{t.formatUndecided}</span>
                          {format === 'undecided' && <Check className="w-4 h-4 text-sky-600 shrink-0" />}
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNextFromStep1}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      <span>{t.nextStep}</span>
                      <ArrowRight className="w-4 h-4 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Current Level & Primary Goal */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  {/* English Level */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      {t.levelLabel}
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'zero', label: t.levelZero },
                        { id: 'beginner', label: t.levelBeginner },
                        { id: 'intermediate', label: t.levelIntermediate },
                        { id: 'unknown', label: t.levelUnknown },
                      ].map((lvl) => (
                        <button
                          key={lvl.id}
                          type="button"
                          onClick={() => setLevel(lvl.id as EnglishLevel)}
                          className={`w-full p-3 text-left rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                            level === lvl.id
                              ? 'border-sky-500 bg-sky-50/50 text-slate-900 font-semibold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{lvl.label}</span>
                            {level === lvl.id && <Check className="w-4 h-4 text-sky-600 shrink-0" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Goal */}
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-3">
                      {t.goalLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: 'speaking', label: t.goalSpeaking },
                        { id: 'work', label: t.goalWork },
                        { id: 'travel', label: t.goalTravel },
                        { id: 'child', label: t.goalChild },
                        { id: 'study', label: t.goalStudy },
                        { id: 'other', label: t.goalOther },
                      ].map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => setGoal(g.id as Goal)}
                          className={`p-2.5 text-left rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                            goal === g.id
                              ? 'border-sky-500 bg-sky-50/50 text-slate-900 font-semibold shadow-xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{g.label}</span>
                            {goal === g.id && <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextFromStep2}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer shadow-xs"
                    >
                      <span>{t.nextStep}</span>
                      <ArrowRight className="w-4 h-4 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Info & Submission */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {errorMsg && (
                    <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-xl">
                      {errorMsg}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">
                      {t.nameLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-slate-900"
                    />
                  </div>

                  {/* Channel Preference */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">
                      {t.channelLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setChannel('telegram')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          channel === 'telegram'
                            ? 'border-sky-500 bg-sky-50 text-sky-700'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Send className="w-3.5 h-3.5 text-sky-500" />
                        <span>Telegram</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setChannel('whatsapp')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          channel === 'whatsapp'
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setChannel('phone')}
                        className={`p-2 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          channel === 'phone'
                            ? 'border-slate-800 bg-slate-100 text-slate-900'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5 text-slate-600" />
                        <span>Телефон</span>
                      </button>
                    </div>
                  </div>

                  {/* Contact handle / number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">
                      {t.contactLabel} <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={
                        channel === 'telegram'
                          ? t.contactPlaceholderTelegram
                          : channel === 'whatsapp'
                          ? t.contactPlaceholderWhatsApp
                          : t.contactPlaceholderPhone
                      }
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-slate-900"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">
                      {t.commentLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t.commentPlaceholder}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all text-slate-900 resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-slate-400 leading-normal">
                    {t.consentText}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-70 rounded-xl transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      <span>{isSubmitting ? t.submitting : t.submitButton}</span>
                      <Check className="w-4 h-4 text-sky-400" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
