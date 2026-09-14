// src/context/LanguageContext.ts
import { createContext } from 'react';

import type { Content, Lang } from '@/i18n/types';

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  content: Content;
}

export const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
