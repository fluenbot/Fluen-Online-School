import React, { useState } from 'react';
import { Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language, SchoolConfig } from '../types';
import { translations } from '../i18n/translations';

interface NavbarProps {
  config: SchoolConfig;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, lang, onSelectLang, onOpenForm }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'ka', label: 'KA' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAFBFD]/90 backdrop-blur-md border-b border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav links) - Zone 3 (Action) */}
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark */}
          <a
            href="#"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-slate-900 focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-sky-400 flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-slate-800 transition-colors">
              F
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
              Fluen
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mb-2"></span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => handleNavClick('#audience')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('#formats')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.formats}
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.courses}
            </button>
            <button
              onClick={() => handleNavClick('#teacher')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.teacher}
            </button>
            <button
              onClick={() => handleNavClick('#why')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.faq}
            </button>
          </nav>

          {/* Zone 3: 1 primary CTA + language switch */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Clean Segmented Language Control */}
            <div className="flex items-center bg-slate-100/80 p-0.5 rounded-lg border border-slate-200/60 text-xs font-semibold">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => onSelectLang(item.code)}
                  className={`px-2 py-1 rounded-md transition-all cursor-pointer ${
                    lang === item.code
                      ? 'bg-white text-slate-900 shadow-xs font-bold'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                  aria-label={`Switch language to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenForm}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.ctaButton}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-3 text-base font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('#audience')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('#formats')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.formats}
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.courses}
            </button>
            <button
              onClick={() => handleNavClick('#teacher')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.teacher}
            </button>
            <button
              onClick={() => handleNavClick('#why')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.about}
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className="text-left py-2 hover:text-sky-600 transition-colors border-b border-slate-100"
            >
              {t.faq}
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenForm();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-white bg-slate-900 rounded-xl shadow-xs hover:bg-slate-800 transition-colors cursor-pointer"
              >
                {t.ctaButton}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
