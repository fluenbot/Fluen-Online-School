import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'fluen_leads_submissions_v1';

export function getStoredLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      // Seed with one example lead so the school owner immediately understands how leads are managed
      const sample: LeadSubmission = {
        id: 'fluen_sample_lead_1',
        createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        name: 'Анна',
        contact: '@anna_travels',
        channel: 'telegram',
        forWhom: 'myself',
        format: 'group',
        level: 'beginner',
        goal: 'speaking',
        comment: 'Хочу говорить увереннее перед поездкой в Европу',
        status: 'new',
        sourceLanguage: 'ru',
      };
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify([sample]));
      return [sample];
    }
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Failed to parse leads from storage', err);
    return [];
  }
}

export function saveNewLead(lead: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): LeadSubmission {
  const all = getStoredLeads();
  const newLead: LeadSubmission = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  const updated = [newLead, ...all];
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadSubmission['status']): void {
  const all = getStoredLeads();
  const updated = all.map((l) => (l.id === id ? { ...l, status } : l));
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
}

export function deleteLead(id: string): void {
  const all = getStoredLeads();
  const updated = all.filter((l) => l.id !== id);
  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
}

export function exportLeadsToCsv(leads: LeadSubmission[]): void {
  if (!leads.length) return;
  const headers = ['ID', 'Дата', 'Имя', 'Контакт', 'Канал', 'Для кого', 'Формат', 'Уровень', 'Цель', 'Статус', 'Комментарий'];
  const rows = leads.map((l) => [
    l.id,
    new Date(l.createdAt).toLocaleString(),
    `"${l.name.replace(/"/g, '""')}"`,
    `"${l.contact.replace(/"/g, '""')}"`,
    l.channel,
    l.forWhom,
    l.format,
    l.level,
    l.goal,
    l.status,
    `"${(l.comment || '').replace(/"/g, '""')}"`,
  ]);
  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `fluen_leads_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
