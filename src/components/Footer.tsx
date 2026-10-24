import React from 'react';
import { Send, MessageCircle, Mail, Settings } from 'lucide-react';
import { Language, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface FooterProps {
  config: SchoolConfig;
  lang: Language;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  lang,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAdmin,
}) => {
  const t = translations[lang].footer;
  const tNav = translations[lang].nav;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contacts" className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-4 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-900 flex items-center justify-center font-bold text-lg">
                F
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">Fluen</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mb-2"></span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              {t.desc}
            </p>
            <p className="text-xs text-sky-400 font-medium">
              {config.slogan}
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => handleScroll('audience')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {tNav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('formats')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {tNav.formats}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('pricing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {tNav.courses}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('teacher')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {tNav.teacher}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {tNav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              {t.contacts}
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{config.email}</span>
                </a>
              </div>

              <div>
                <a
                  href={config.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram: {config.telegramUsername}</span>
                </a>
              </div>

              <div>
                <a
                  href={config.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: {config.whatsappNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Fluen. {t.rights}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.privacy}
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.terms}
            </button>
            <span>·</span>
            {/* Discreet Admin Link */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-400 transition-colors cursor-pointer"
              title="Панель владельца школы"
            >
              <Settings className="w-3 h-3" />
              <span>{t.adminAccess}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
