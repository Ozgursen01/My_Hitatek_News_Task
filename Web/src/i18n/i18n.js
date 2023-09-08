import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './en.json';
import trTranslation from './tr.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        tr: {
            translation: trTranslation,
          },
      en: {
        translation: enTranslation,
      },
      
    },
    lng: 'tr', 
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
