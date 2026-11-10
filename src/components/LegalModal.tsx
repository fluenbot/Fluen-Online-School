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

  const content = {
    privacy: {
      title: {
        ru: 'Политика конфиденциальности Fluen',
        en: 'Fluen Privacy Policy',
        ka: 'Fluen-ის კონფიდენციალურობის პოლიტიკა',
      },
      p1_title: {
        ru: '1. Общие положения',
        en: '1. General Provisions',
        ka: '1. ზოგადი დებულებები',
      },
      p1_text: {
        ru: 'Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации пользователей сайта онлайн-школы Fluen. Мы собираем только минимально необходимые данные для связи и проведения занятий.',
        en: 'This Privacy Policy sets out how Fluen Online Language School processes and protects user personal information. We only collect the minimal data required for communication and lessons.',
        ka: 'ეს კონფიდენციალურობის პოლიტიკა განსაზღვრავს ონლაინ-სკოლა Fluen-ის მომხმარებელთა პერსონალური ინფორმაციის დამუშავებისა და დაცვის წესს. ჩვენ ვაგროვებთ მხოლოდ მინიმალურ მონაცემებს კომუნიკაციისა და გაკვეთილების ჩატარებისთვის.',
      },
      p2_title: {
        ru: '2. Собираемая информация',
        en: '2. Information We Collect',
        ka: '2. შეგროვებული ინფორმაცია',
      },
      p2_text: {
        ru: 'При заполнении формы заявки мы запрашиваем: ваше имя, никнейм в мессенджере (Telegram) или номер телефона (WhatsApp), информацию о желаемом формате обучения и текущем уровне языка.',
        en: 'When submitting an application form, we may collect: your name, messenger username (Telegram) or phone number (WhatsApp), preferred lesson format, and current language level.',
        ka: 'განაცხადის შევსებისას ჩვენ ვითხოვთ: თქვენს სახელს, მესენჯერის იუზერნეიმს (Telegram) ან ტელეფონის ნომერს (WhatsApp), სწავლის სასურველ ფორმატსა და ენის დონეს.',
      },
      p3_title: {
        ru: '3. Цели обработки',
        en: '3. Purpose of Processing',
        ka: '3. დამუშავების მიზნები',
      },
      p3_text: {
        ru: 'Данные используются исключительно для: организации обратной связи, согласования расписания занятий и подбора учебной программы под ваши цели.',
        en: 'Your data is used strictly to: provide feedback, coordinate lesson schedules, and tailor the curriculum to your goals.',
        ka: 'მონაცემები გამოიყენება მხოლოდ: უკუკავშირისთვის, გაკვეთილების განრიგის შესათანხმებლად და სასწავლო პროგრამის თქვენს მიზნებზე მოსარგებად.',
      },
      p4_title: {
        ru: '4. Защита и передача третьим лицам',
        en: '4. Third-Party Sharing',
        ka: '4. მესამე პირებისთვის გადაცემა',
      },
      p4_text: {
        ru: 'Fluen никогда не продает, не сдает в аренду и не передает ваши персональные данные третьим лицам для рекламных или иных коммерческих целей.',
        en: 'Fluen never sells, rents, or shares your personal information with third parties for marketing or advertising purposes.',
        ka: 'Fluen არასდროს ყიდის, არ აქირავებს და არ გადასცემს თქვენს პერსონალურ მონაცემებს მესამე პირებს სარეკლამო ან კომერციული მიზნებისთვის.',
      },
      p5_title: {
        ru: '5. Контакты',
        en: '5. Contact Information',
        ka: '5. კონტაქტი',
      },
      p5_text: {
        ru: 'По любым вопросам, связанным с изменением или удалением данных, вы можете написать на почту: fluen.info@gmail.com.',
        en: 'For any questions regarding your data modification or removal, contact us at: fluen.info@gmail.com.',
        ka: 'ნებისმიერ საკითხზე მონაცემების შეცვლის ან წაშლის შესახებ შეგიძლიათ მოგვწეროთ ელ-ფოსტაზე: fluen.info@gmail.com.',
      },
    },
    terms: {
      title: {
        ru: 'Условия обработки персональных данных',
        en: 'Personal Data Processing Terms',
        ka: 'პერსონალურ მონაცემთა დამუშავების პირობები',
      },
      p1_title: {
        ru: '1. Согласие пользователя',
        en: '1. User Consent',
        ka: '1. მომხმარებლის თანხმობა',
      },
      p1_text: {
        ru: 'Отправляя заявку на сайте Fluen, пользователь свободно, своей волей и в своем интересе дает согласие на обработку предоставленных контактных данных.',
        en: 'By submitting an application on the Fluen website, the user freely and voluntarily consents to the processing of their contact details.',
        ka: 'Fluen-ის საიტზე განაცხადის გაგზავნით მომხმარებელი ნებაყოფლობით ეთანხმება მითითებული საკონტაქტო მონაცემების დამუშავებას.',
      },
      p2_title: {
        ru: '2. Перечень действий',
        en: '2. Scope of Processing',
        ka: '2. დამუშავების მოქმედებები',
      },
      p2_text: {
        ru: 'Обработка включает в себя сбор, запись, систематизацию, хранение, уточнение и удаление данных исключительно для связи с потенциальным учеником.',
        en: 'Processing includes collection, recording, organization, storage, updating, and deletion strictly for communicating with prospective students.',
        ka: 'დამუშავება მოიცავს მონაცემების შეგროვებას, სისტემატიზაციას, შენახვას, განახლებასა და წაშლას მხოლოდ პოტენციურ მოსწავლესთან კომუნიკაციის მიზნით.',
      },
      p3_title: {
        ru: '3. Срок действия согласия',
        en: '3. Validity Period',
        ka: '3. თანხმობის მოქმედების ვადა',
      },
      p3_text: {
        ru: 'Согласие действует до момента достижения целей обработки или до отзыва пользователем путем обращения на fluen.info@gmail.com.',
        en: 'Consent remains valid until processing purposes are achieved or revoked by the user via email to fluen.info@gmail.com.',
        ka: 'თანხმობა მოქმედებს დამუშავების მიზნების მიღწევამდე ან მომხმარებლის მიერ fluen.info@gmail.com-ზე მოთხოვნის გაგზავნამდე.',
      },
    },
    closeButton: {
      ru: 'Закрыть',
      en: 'Close',
      ka: 'დახურვა',
    },
  };

  const isPrivacy = type === 'privacy';
  const data = isPrivacy ? content.privacy : content.terms;

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
              {data.title[lang]}
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
          {isPrivacy ? (
            <>
              <p>
                <strong className="text-slate-800">{content.privacy.p1_title[lang]}</strong>
                <br />
                {content.privacy.p1_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.privacy.p2_title[lang]}</strong>
                <br />
                {content.privacy.p2_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.privacy.p3_title[lang]}</strong>
                <br />
                {content.privacy.p3_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.privacy.p4_title[lang]}</strong>
                <br />
                {content.privacy.p4_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.privacy.p5_title[lang]}</strong>
                <br />
                {content.privacy.p5_text[lang]}
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-slate-800">{content.terms.p1_title[lang]}</strong>
                <br />
                {content.terms.p1_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.terms.p2_title[lang]}</strong>
                <br />
                {content.terms.p2_text[lang]}
              </p>
              <p>
                <strong className="text-slate-800">{content.terms.p3_title[lang]}</strong>
                <br />
                {content.terms.p3_text[lang]}
              </p>
            </>
          )}
        </div>

        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            {content.closeButton[lang]}
          </button>
        </div>
      </div>
    </div>
  );
};
