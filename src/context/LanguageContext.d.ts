import type { ReactNode } from "react";

export type LanguageCode = "EN" | "PT-PT" | "PT-BR" | "ES";

export interface LanguageItem {
  code: LanguageCode;
  label: string;
  flag: string;
}

export interface TranslationShape {
  [key: string]: any;
}

export interface LanguageContextValue {
  t: TranslationShape;
  currentLang: LanguageCode;
  setCurrentLang: (code: LanguageCode) => Promise<void>;
  languages: LanguageItem[];
}

export const languages: LanguageItem[];

export function LanguageProvider(props: { children: ReactNode }): JSX.Element;

export function useLanguage(): LanguageContextValue;
