"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'he',
  switchLanguage: () => {},
  isRTL: true,
  isLoading: false
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return default values instead of throwing error
    return {
      language: 'he',
      switchLanguage: () => {},
      isRTL: true,
      isLoading: false
    };
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('he');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load saved language preference from localStorage
    try {
      const savedLanguage = localStorage.getItem('preferred-language');
      if (savedLanguage && (savedLanguage === 'he' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      console.warn('Could not access localStorage:', error);
    }
  }, []);

  const switchLanguage = (newLanguage) => {
    if (newLanguage === 'he' || newLanguage === 'en') {
      setLanguage(newLanguage);
      try {
        localStorage.setItem('preferred-language', newLanguage);
      } catch (error) {
        console.warn('Could not save to localStorage:', error);
      }
      
      // Update document direction and lang attribute
      if (typeof document !== 'undefined') {
        document.documentElement.dir = newLanguage === 'he' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLanguage === 'he' ? 'he' : 'en';
      }
    }
  };

  const value = {
    language,
    switchLanguage,
    isRTL: language === 'he',
    isLoading
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};