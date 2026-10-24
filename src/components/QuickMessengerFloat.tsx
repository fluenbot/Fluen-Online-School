import React, { useState } from 'react';
import { Send, MessageCircle, X, MessageSquarePlus } from 'lucide-react';
import { SchoolConfig } from '../types';

interface QuickMessengerFloatProps {
  config: SchoolConfig;
  onOpenForm: () => void;
}

export const QuickMessengerFloat: React.FC<QuickMessengerFloatProps> = ({ config, onOpenForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-3 mb-1 flex flex-col gap-2 min-w-44 animate-in slide-in-from-bottom-2 fade-in duration-150">
          <div className="text-[11px] font-bold text-slate-400 px-2 uppercase tracking-wider">
            Написать в Fluen
          </div>
          <a
            href={config.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors"
          >
            <Send className="w-4 h-4 text-sky-600" />
            <span>Telegram</span>
          </a>
          <a
            href={config.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenForm();
            }}
            className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer text-left"
          >
            <MessageSquarePlus className="w-4 h-4 text-slate-700" />
            <span>Форма подбора</span>
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-900/25 hover:bg-slate-800 active:scale-95 transition-all cursor-pointer group"
        aria-label="Связаться с нами"
        title="Связаться с нами"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-300" />
        ) : (
          <div className="relative">
            <Send className="w-5 h-5 text-sky-400 -translate-x-0.5 translate-y-0.5 group-hover:scale-105 transition-transform" />
          </div>
        )}
      </button>
    </div>
  );
};
