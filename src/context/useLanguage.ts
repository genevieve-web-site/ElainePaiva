import { useContext } from "react";
import { LanguageContext } from "./languageContextObject";

type LanguageCode = "EN" | "PT-PT" | "PT-BR" | "ES";

type LanguageItem = {
  code: LanguageCode;
  label: string;
  flag: string;
};

type LanguageContextValue = {
  t: any;
  currentLang: LanguageCode;
  setCurrentLang: (code: LanguageCode) => Promise<void>;
  languages: LanguageItem[];
};

export const useLanguage = () =>
  useContext(LanguageContext) as LanguageContextValue;
