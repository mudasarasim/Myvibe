// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "About Us": "About Us",
          // Add other translations here
        }
      },
      fr: {
        translation: {
          "Home": "Accueil",
          "About Us": "À Propos",
          // Add other translations here
        }
      }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
