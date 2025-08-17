"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ClientLayout = ({ children }) => {
  const { language, isRTL, isLoading } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      // Update document direction and language
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, isRTL, isLoading]);

  useEffect(() => {
    // Enable view transitions if supported
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      // Add meta tag for view transitions
      let viewTransitionMeta = document.querySelector('meta[name="view-transition"]');
      if (!viewTransitionMeta) {
        viewTransitionMeta = document.createElement('meta');
        viewTransitionMeta.name = 'view-transition';
        viewTransitionMeta.content = 'same-origin';
        document.head.appendChild(viewTransitionMeta);
      }
    }
  }, []);

  // Don't block rendering while loading language preference
  return <>{children}</>;
};

export default ClientLayout;