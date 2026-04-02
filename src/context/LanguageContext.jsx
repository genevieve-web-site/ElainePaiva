import React, { useState, useEffect } from "react";
import { LanguageContext } from "./languageContextObject";

const languages = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "PT-PT", label: "Português (PT)", flag: "🇵🇹" },
  { code: "PT-BR", label: "Português (BR)", flag: "🇧🇷" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
];

export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("PT-PT");
  const [translations, setTranslations] = useState(null);

  const loadLanguage = async (code) => {
    try {
      const data = await import(`../locales/${code.toLowerCase()}.json`);
      setTranslations(data.default);
      setCurrentLang(code);
      document.documentElement.lang = code.toLowerCase();
    } catch (error) {
      console.error("Erro ao carregar idioma:", error);
      if (code !== "PT-PT") {
        try {
          const fallback = await import("../locales/pt-pt.json");
          setTranslations(fallback.default);
          setCurrentLang("PT-PT");
          document.documentElement.lang = "pt-pt";
        } catch (fallbackError) {
          console.error("Erro ao carregar fallback PT-PT:", fallbackError);
        }
      }
    }
  };

  useEffect(() => {
    loadLanguage("PT-PT");
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        t: translations,
        currentLang,
        setCurrentLang: loadLanguage,
        languages,
      }}
    >
      {translations ? children : null}
    </LanguageContext.Provider>
  );
};
