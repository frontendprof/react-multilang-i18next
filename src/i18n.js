import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';

import translationEN from "./constants/locales/en/translation.json"
import translationAR from "./constants/locales/ar/translation.json"
import translationRU from "./constants/locales/ru/translation.json"
import LanguageDetector from 'i18next-browser-languagedetector';



const resources = {
  ar: {
    translation: translationAR
  },
  ru: {
    translation: translationRU
  },
  en: {
    translation: translationEN
  }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
    resources,
    // fallbackLng: 'en',
    // lng: document.querySelector("html").lang, 
    supportedLngs:["en","ru","ar"],
    keySeparator: false,
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    detection:{
        order: [ 'path','cookie','htmlTag', 'localStorage', 'subdomain'],
        caches:["cookie"]
    },
    backend:{
        loadPath: "./constants/locales/{{ lng }}/translation.json",
    },
    react:{useSuspense:false}
  });

  export default i18n;