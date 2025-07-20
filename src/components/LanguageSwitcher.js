"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslations } from '@/lib/translations';
import { MdLanguage } from 'react-icons/md';

const LanguageSwitcher = ({ className = "" }) => {
  const { language, switchLanguage } = useLanguage();
  const t = useTranslations(language);

  const handleLanguageSwitch = () => {
    const newLanguage = language === 'he' ? 'en' : 'he';
    switchLanguage(newLanguage);
  };

  // Fallback title text
  const titleText = language === 'he' 
    ? (t?.switchToEnglish || 'Switch to English')
    : (t?.switchToHebrew || 'עבור לעברית');

  return (
    <button
      onClick={handleLanguageSwitch}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-rose-50 hover:text-rose-600 text-gray-600 ${className}`}
      title={titleText}
    >
      <MdLanguage className="text-lg" />
      <span>{language === 'he' ? 'EN' : 'עב'}</span>
    </button>
  );
};

export default LanguageSwitcher;