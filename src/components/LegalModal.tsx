import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms';
  onClose: () => void;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[85vh] flex flex-col"
        role="dialog"
      >
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-sky-600" />
            <h3 className="text-base font-bold text-slate-900">
              {type === 'privacy'
                ? 'Политика конфиденциальности Fluen'
                : 'Условия обработки персональных данных'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Общие положения</strong>
                <br />
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сайта онлайн-школы Fluen. Мы с уважением относимся к вашей приватности и собираем только минимально необходимые данные для связи и проведения занятий.
              </p>
              <p>
                <strong>2. Собираемая информация</strong>
                <br />
                При заполнении формы заявки мы можем запрашивать: ваше имя, никнейм в мессенджере (Telegram) или номер телефона (WhatsApp), информацию о желаемом формате обучения и текущем уровне языка.
              </p>
              <p>
                <strong>3. Цели обработки</strong>
                <br />
                Указанные данные используются исключительно для:
                <br />
                • Организации обратной связи и ответа на ваш запрос;
                <br />
                • Согласования расписания пробного или регулярного занятия;
                <br />
                • Подбора программы обучения под ваши цели.
              </p>
              <p>
                <strong>4. Передача третьим лицам</strong>
                <br />
                Fluen никогда не продает, не сдает в аренду и не передает ваши персональные данные третьим лицам для рекламных или иных коммерческих целей.
              </p>
              <p>
                <strong>5. Контакты</strong>
                <br />
                По любым вопросам, связанным с изменением или удалением ваших данных, вы можете обратиться на официальную электронную почту: <strong>fluen.info@gmail.com</strong>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Согласие на обработку данных</strong>
                <br />
                Отправляя заявку на сайте Fluen, пользователь свободно, своей волей и в своем интересе дает согласие на обработку предоставленных контактных данных.
              </p>
              <p>
                <strong>2. Перечень действий</strong>
                <br />
                Обработка включает в себя сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение) и удаление данных.
              </p>
              <p>
                <strong>3. Срок действия согласия</strong>
                <br />
                Согласие действует до момента достижения целей обработки или до отзыва пользователем своего согласия путем направления запроса на <strong>fluen.info@gmail.com</strong>.
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
