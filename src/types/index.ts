export type Language = 'ru' | 'en' | 'ka';

export interface SchoolConfig {
  name: string;
  slogan: string;
  headline: string;
  subtitle: string;
  groupPriceGel: number;
  groupLessonsPerMonth: number;
  groupNote: string;
  individualPriceNote: string;
  telegramUsername: string;
  telegramUrl: string;
  whatsappNumber: string;
  whatsappUrl: string;
  email: string;
  teacher: {
    name: string;
    role: string;
    bio: string;
    education: string;
    level: string;
    approach: string;
    photoUrl: string;
  };
  groupEnrollmentOpen: boolean;
  currency: string;
}

export type ForWhom = 'myself' | 'child';
export type Format = 'individual' | 'group' | 'undecided';
export type EnglishLevel = 'zero' | 'beginner' | 'intermediate' | 'advanced' | 'unknown';
export type Goal = 'speaking' | 'work' | 'travel' | 'child' | 'study' | 'other';
export type ContactChannel = 'telegram' | 'whatsapp' | 'phone';

export interface LeadSubmission {
  id: string;
  createdAt: string;
  name: string;
  contact: string;
  channel: ContactChannel;
  forWhom: ForWhom;
  format: Format;
  level: EnglishLevel;
  goal: Goal;
  comment?: string;
  status: 'new' | 'contacted' | 'enrolled' | 'archived';
  sourceLanguage: Language;
}
