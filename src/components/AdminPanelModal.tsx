import React, { useState } from 'react';
import {
  X,
  Save,
  RotateCcw,
  Download,
  Users,
  Settings,
  Trash2,
  CheckCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SchoolConfig, LeadSubmission } from '../types';
import {
  getStoredLeads,
  updateLeadStatus,
  deleteLead,
  exportLeadsToCsv,
} from '../utils/leadsStorage';
import { resetStoredConfig } from '../utils/configStorage';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  onSaveConfig: (newConfig: SchoolConfig) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'settings'>('leads');
  const [formConfig, setFormConfig] = useState<SchoolConfig>(config);
  const [leads, setLeads] = useState<LeadSubmission[]>(getStoredLeads());
  const [saveNotice, setSaveNotice] = useState(false);

  if (!isOpen) return null;

  const handleRefreshLeads = () => {
    setLeads(getStoredLeads());
  };

  const handleStatusChange = (id: string, newStatus: LeadSubmission['status']) => {
    updateLeadStatus(id, newStatus);
    handleRefreshLeads();
  };

  const handleDeleteLead = (id: string) => {
    if (confirm('Удалить эту заявку?')) {
      deleteLead(id);
      handleRefreshLeads();
    }
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formConfig);
    setSaveNotice(true);
    setTimeout(() => setSaveNotice(false), 2500);
  };

  const handleResetSettings = () => {
    if (confirm('Сбросить все настройки школы к исходным значениям?')) {
      const def = resetStoredConfig();
      setFormConfig(def);
      onSaveConfig(def);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 flex flex-col max-h-[90vh]"
        role="dialog"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Панель управления Fluen</h3>
              <p className="text-xs text-slate-400">Управление заявками, ценами и контактами</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-slate-800 p-1 rounded-xl text-xs font-semibold">
              <button
                onClick={() => {
                  handleRefreshLeads();
                  setActiveTab('leads');
                }}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'leads' ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                Заявки ({leads.length})
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'settings' ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-300 hover:text-white'
                }`}
              >
                Настройки школы
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Notice */}
        {saveNotice && (
          <div className="px-6 py-2.5 bg-emerald-500 text-white text-xs font-semibold flex items-center justify-between">
            <span>Настройки успешно сохранены и применены на сайте!</span>
            <CheckCircle className="w-4 h-4" />
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'leads' && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Полученные заявки на обучение</h4>
                  <p className="text-xs text-slate-500">
                    Все входящие заявки с сайта сохраняются в локальном хранилище браузера
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => exportLeadsToCsv(leads)}
                    disabled={!leads.length}
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Экспорт в CSV</span>
                  </button>
                  <button
                    onClick={handleRefreshLeads}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                    title="Обновить список"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-2xl">
                  <Users className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-slate-700">Пока нет заявок</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Новые заявки появятся здесь сразу после заполнения формы на сайте
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {leads.map((l) => (
                    <div
                      key={l.id}
                      className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-slate-300 transition-colors shadow-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-base">{l.name}</span>
                          <span className="text-xs text-slate-400 font-mono">
                            {new Date(l.createdAt).toLocaleString('ru-RU', {
                              day: 'numeric',
                              month: 'short',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {/* Status selector */}
                          <select
                            value={l.status}
                            onChange={(e) =>
                              handleStatusChange(l.id, e.target.value as LeadSubmission['status'])
                            }
                            className={`text-xs font-semibold px-2.5 py-1 rounded-lg border cursor-pointer ${
                              l.status === 'new'
                                ? 'bg-sky-50 text-sky-700 border-sky-200'
                                : l.status === 'contacted'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : l.status === 'enrolled'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-slate-100 text-slate-600 border-slate-200'
                            }`}
                          >
                            <option value="new">Новая</option>
                            <option value="contacted">В работе / ответили</option>
                            <option value="enrolled">Записан на курс</option>
                            <option value="archived">В архиве</option>
                          </select>

                          <button
                            onClick={() => handleDeleteLead(l.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Удалить"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 text-xs">
                        <div>
                          <span className="text-slate-400 block">Контакт:</span>
                          <span className="font-semibold text-slate-800 break-all">{l.contact}</span>
                          <span className="text-slate-400 block text-[10px]">({l.channel})</span>
                        </div>

                        <div>
                          <span className="text-slate-400 block">Формат:</span>
                          <span className="font-semibold text-slate-800">
                            {l.format === 'group'
                              ? 'Мини-группа'
                              : l.format === 'individual'
                              ? 'Индивидуально'
                              : 'Не определился'}
                          </span>
                          <span className="text-slate-400 block text-[10px]">
                            {l.forWhom === 'child' ? 'Для ребёнка' : 'Для себя'}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 block">Уровень:</span>
                          <span className="font-semibold text-slate-800">
                            {l.level === 'zero'
                              ? 'С нуля'
                              : l.level === 'beginner'
                              ? 'Начальный'
                              : l.level === 'intermediate'
                              ? 'Средний'
                              : 'Неизвестно'}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 block">Цель:</span>
                          <span className="font-semibold text-slate-800">
                            {l.goal === 'speaking'
                              ? 'Разговорный'
                              : l.goal === 'work'
                              ? 'Работа'
                              : l.goal === 'travel'
                              ? 'Путешествия'
                              : l.goal === 'child'
                              ? 'Для ребёнка'
                              : l.goal}
                          </span>
                        </div>
                      </div>

                      {l.comment && (
                        <div className="mt-2 p-2.5 rounded-xl bg-slate-50 text-xs text-slate-600 border border-slate-100">
                          <span className="font-semibold text-slate-700">Комментарий: </span>
                          {l.comment}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Group pricing */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-4">
                  Стоимость и условия мини-группы
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Цена за месяц (GEL)
                    </label>
                    <input
                      type="number"
                      value={formConfig.groupPriceGel}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, groupPriceGel: Number(e.target.value) || 0 })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Занятий в месяц
                    </label>
                    <input
                      type="number"
                      value={formConfig.groupLessonsPerMonth}
                      onChange={(e) =>
                        setFormConfig({
                          ...formConfig,
                          groupLessonsPerMonth: Number(e.target.value) || 8,
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Статус набора
                    </label>
                    <select
                      value={formConfig.groupEnrollmentOpen ? 'open' : 'closed'}
                      onChange={(e) =>
                        setFormConfig({
                          ...formConfig,
                          groupEnrollmentOpen: e.target.value === 'open',
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    >
                      <option value="open">Идёт набор (открыт)</option>
                      <option value="closed">Набор приостановлен</option>
                    </select>
                  </div>
                </div>

                <div className="mt-3">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Индивидуальные занятия (примечание к цене)
                  </label>
                  <input
                    type="text"
                    value={formConfig.individualPriceNote}
                    onChange={(e) =>
                      setFormConfig({ ...formConfig, individualPriceNote: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                  />
                </div>
              </div>

              {/* Contacts */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-4">
                  Контактные ссылки и мессенджеры
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Telegram Username
                    </label>
                    <input
                      type="text"
                      value={formConfig.telegramUsername}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, telegramUsername: e.target.value })
                      }
                      placeholder="@fluen_english"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Прямая ссылка на Telegram
                    </label>
                    <input
                      type="text"
                      value={formConfig.telegramUrl}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, telegramUrl: e.target.value })
                      }
                      placeholder="https://t.me/fluen_english"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp телефон
                    </label>
                    <input
                      type="text"
                      value={formConfig.whatsappNumber}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, whatsappNumber: e.target.value })
                      }
                      placeholder="+995 500 000 000"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Прямая ссылка на WhatsApp
                    </label>
                    <input
                      type="text"
                      value={formConfig.whatsappUrl}
                      onChange={(e) =>
                        setFormConfig({ ...formConfig, whatsappUrl: e.target.value })
                      }
                      placeholder="https://wa.me/995500000000"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email школы
                    </label>
                    <input
                      type="email"
                      value={formConfig.email}
                      onChange={(e) => setFormConfig({ ...formConfig, email: e.target.value })}
                      placeholder="fluen.info@gmail.com"
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Teacher Info */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-sm font-bold text-slate-900 mb-4">
                  Информация о преподавателе
                </h4>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Имя преподавателя
                    </label>
                    <input
                      type="text"
                      value={formConfig.teacher.name}
                      onChange={(e) =>
                        setFormConfig({
                          ...formConfig,
                          teacher: { ...formConfig.teacher, name: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Биография / описание подхода
                    </label>
                    <textarea
                      rows={3}
                      value={formConfig.teacher.bio}
                      onChange={(e) =>
                        setFormConfig({
                          ...formConfig,
                          teacher: { ...formConfig.teacher, bio: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Образование
                      </label>
                      <input
                        type="text"
                        value={formConfig.teacher.education}
                        onChange={(e) =>
                          setFormConfig({
                            ...formConfig,
                            teacher: { ...formConfig.teacher, education: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Уровень
                      </label>
                      <input
                        type="text"
                        value={formConfig.teacher.level}
                        onChange={(e) =>
                          setFormConfig({
                            ...formConfig,
                            teacher: { ...formConfig.teacher, level: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Методика
                      </label>
                      <input
                        type="text"
                        value={formConfig.teacher.approach}
                        onChange={(e) =>
                          setFormConfig({
                            ...formConfig,
                            teacher: { ...formConfig.teacher, approach: e.target.value },
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleResetSettings}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Сбросить к исходным</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  <Save className="w-4 h-4 text-sky-400" />
                  <span>Сохранить изменения</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
