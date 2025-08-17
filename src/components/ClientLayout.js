"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

const ClientLayout = ({ children }) => {
  const { language, isRTL, isLoading } = useLanguage();

  useEffect(() => {
    if (!isLoading) {
      // Update document direction and language
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, isRTL, isLoading]);

  // Don't block rendering while loading language preference
  return <>{children}</>;
};

export default ClientLayout;
