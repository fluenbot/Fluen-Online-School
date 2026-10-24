/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Language,
  SchoolConfig,
  ForWhom,
  Format,
  EnglishLevel,
} from './types';
import { getStoredConfig, saveStoredConfig } from './utils/configStorage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TargetAudience } from './components/TargetAudience';
import { WhyFluen } from './components/WhyFluen';
import { FormatsSection } from './components/FormatsSection';
import { PricingSection } from './components/PricingSection';
import { TeacherSection } from './components/TeacherSection';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LeadFormModal } from './components/LeadFormModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { LegalModal } from './components/LegalModal';
import { QuickMessengerFloat } from './components/QuickMessengerFloat';

export default function App() {
  const [config, setConfig] = useState<SchoolConfig>(getStoredConfig());
  const [lang, setLang] = useState<Language>('ru');

  // Lead modal state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formInitialParams, setFormInitialParams] = useState<{
    forWhom?: ForWhom;
    format?: Format;
    level?: EnglishLevel;
  }>({});

  // Admin & Legal modals state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' }>({
    isOpen: false,
    type: 'privacy',
  });

  const handleOpenForm = (params?: { forWhom?: ForWhom; format?: Format; level?: EnglishLevel }) => {
    setFormInitialParams(params || {});
    setIsFormOpen(true);
  };

  const handleSaveConfig = (newConfig: SchoolConfig) => {
    setConfig(newConfig);
    saveStoredConfig(newConfig);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* 1. Header (Top Bar Contract) */}
      <Navbar
        config={config}
        lang={lang}
        onSelectLang={setLang}
        onOpenForm={() => handleOpenForm()}
      />

      <main className="flex-1">
        {/* 2. First Screen / Hero */}
        <Hero
          config={config}
          lang={lang}
          onOpenForm={() => handleOpenForm()}
        />

        {/* 3. Target Audience / Для кого */}
        <TargetAudience
          lang={lang}
          onSelectAudience={(params) => handleOpenForm(params)}
        />

        {/* 4. Why Fluen / Почему Fluen */}
        <WhyFluen lang={lang} />

        {/* 5. Formats / Форматы занятий */}
        <FormatsSection
          config={config}
          lang={lang}
          onSelectFormat={(format) => handleOpenForm({ format })}
        />

        {/* 6. Pricing / Курсы и цены */}
        <PricingSection
          config={config}
          lang={lang}
          onSelectPlan={(format) => handleOpenForm({ format })}
        />

        {/* 7. Teacher / Преподаватель */}
        <TeacherSection
          config={config}
          lang={lang}
          onOpenForm={() => handleOpenForm()}
        />

        {/* 8. Process / Как проходит обучение */}
        <ProcessSection lang={lang} />

        {/* 9. Reviews / Истории учеников / Первый набор */}
        <ReviewsSection
          lang={lang}
          onOpenForm={() => handleOpenForm()}
        />

        {/* 10. FAQ / Часто задаваемые вопросы */}
        <FaqSection lang={lang} />

        {/* 11. Final Call-to-Action */}
        <FinalCta
          config={config}
          lang={lang}
          onOpenForm={() => handleOpenForm()}
        />
      </main>

      {/* 12. Footer / Подвал */}
      <Footer
        config={config}
        lang={lang}
        onOpenPrivacy={() => setLegalModal({ isOpen: true, type: 'privacy' })}
        onOpenTerms={() => setLegalModal({ isOpen: true, type: 'terms' })}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Quick messenger floating trigger */}
      <QuickMessengerFloat
        config={config}
        onOpenForm={() => handleOpenForm()}
      />

      {/* Interactive Step-by-Step Lead Form Modal */}
      <LeadFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        config={config}
        lang={lang}
        initialForWhom={formInitialParams.forWhom}
        initialFormat={formInitialParams.format}
        initialLevel={formInitialParams.level}
      />

      {/* School Owner Admin & Lead Manager Modal */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Legal & Privacy Modal */}
      <LegalModal
        isOpen={legalModal.isOpen}
        type={legalModal.type}
        onClose={() => setLegalModal({ isOpen: false, type: 'privacy' })}
        lang={lang}
      />
    </div>
  );
}
