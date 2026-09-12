// src/context/LanguageProvider.tsx
import { type PropsWithChildren, useEffect, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { en } from '@/i18n/en';
import { es } from '@/i18n/es';
import type { Lang } from '@/i18n/types';

const CONTENT_BY_LANG = { en, es } as const;

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Lang>(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null;
    return savedLang === 'es' ? 'es' : 'en';
  });

  const content = CONTENT_BY_LANG[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', content.meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', content.meta.ogTitle);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', content.meta.ogDescription);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', content.meta.ogLocale);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute('content', content.meta.ogTitle);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute('content', content.meta.ogDescription);
    localStorage.setItem('lang', lang);
  }, [content, lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  );
};
