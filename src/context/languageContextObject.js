import { createContext } from "react";

export const LanguageContext = createContext({
  t: {},
  currentLang: "PT-PT",
  setCurrentLang: async () => {},
  languages: [],
});
