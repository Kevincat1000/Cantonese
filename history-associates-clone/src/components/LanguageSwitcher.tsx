'use client';

import { useState } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
    // Here you can add logic to actually change the language
    console.log('Language switched to:', language === 'en' ? 'zh' : 'en');
  };

  return (
    <button
      className="flex items-center gap-2 text-gray-600 hover:text-[#5B6D87] transition group"
      onClick={toggleLanguage}
      aria-label="Change language"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span className="text-xs font-medium hidden lg:inline">
        {language === 'en' ? 'EN/中文' : '中文/EN'}
      </span>
    </button>
  );
}
