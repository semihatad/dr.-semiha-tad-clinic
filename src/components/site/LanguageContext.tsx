import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TRANSLATIONS } from "@/lib/translations";

export type Language = "tr" | "en";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language");
      if (saved === "tr" || saved === "en") return saved;
      // Auto-detect browser language
      const browserLang = navigator.language.substring(0, 2);
      if (browserLang === "tr" || browserLang === "en") return browserLang as Language;
    }
    return "tr"; // default to Turkish
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
      document.documentElement.lang = lang;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string) => {
    const keys = key.split(".");
    let current: any = TRANSLATIONS[language];
    for (const k of keys) {
      if (current === undefined || current[k] === undefined) {
        // Fallback to Turkish if translation is missing in English
        let fallback: any = TRANSLATIONS["tr"];
        for (const fk of keys) {
          if (fallback === undefined || fallback[fk] === undefined) return key;
          fallback = fallback[fk];
        }
        return fallback;
      }
      current = current[k];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
