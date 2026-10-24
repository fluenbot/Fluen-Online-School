import { SchoolConfig } from '../types';

export const DEFAULT_SCHOOL_CONFIG: SchoolConfig = {
  name: 'Fluen',
  slogan: 'Fluen — учи язык. Полюби процесс.',
  headline: 'Английский, который становится частью твоей жизни.',
  subtitle: 'Изучай английский онлайн в комфортной атмосфере, развивай разговорные навыки и двигайся к своим целям вместе с Fluen.',
  groupPriceGel: 160,
  groupLessonsPerMonth: 8,
  groupNote: '8 занятий в месяц · онлайн в мини-группе · предварительная стартовая цена',
  individualPriceNote: 'Стоимость уточняется в зависимости от длительности и частоты занятий',
  telegramUsername: '@fluen_english',
  telegramUrl: 'https://t.me/fluen_english',
  whatsappNumber: '+995 500 000 000',
  whatsappUrl: 'https://wa.me/995500000000',
  email: 'fluen.info@gmail.com',
  teacher: {
    name: 'Преподаватель Fluen',
    role: 'Твой проводник в мире английского',
    bio: 'Наш преподаватель помогает ученикам изучать английский в комфортной атмосфере, постепенно развивать разговорные навыки и увереннее использовать язык в жизни. В обучении особое внимание уделяется понятному объяснению материала, практике и индивидуальным целям ученика.',
    education: 'Высшее лингвистическое образование, опыт преподавания взрослым и детям',
    level: 'C1-C2 Advanced / Proficient English',
    approach: 'Коммуникативная методика, бережный разбор ошибок и преодоление языкового барьера',
    photoUrl: '/src/assets/images/teacher_profile_photo_1792854182867.jpg',
  },
  groupEnrollmentOpen: true,
  currency: 'GEL',
};

const STORAGE_KEY = 'fluen_school_config_v1';

export function getStoredConfig(): SchoolConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SCHOOL_CONFIG;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_SCHOOL_CONFIG, ...parsed, teacher: { ...DEFAULT_SCHOOL_CONFIG.teacher, ...(parsed.teacher || {}) } };
  } catch (err) {
    console.warn('Failed to parse stored school config, using default', err);
    return DEFAULT_SCHOOL_CONFIG;
  }
}

export function saveStoredConfig(config: SchoolConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (err) {
    console.error('Failed to save school config to storage', err);
  }
}

export function resetStoredConfig(): SchoolConfig {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to reset school config', err);
  }
  return DEFAULT_SCHOOL_CONFIG;
}
