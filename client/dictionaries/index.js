import en from "./en.json";
import es from "./es.json";

export const LOCALES = ["en", "es"];
export const DEFAULT_LOCALE = "en";

const dictionaries = { en, es };

export const hasLocale = (lang) => LOCALES.includes(lang);
export const getDictionary = (lang) => dictionaries[lang];
