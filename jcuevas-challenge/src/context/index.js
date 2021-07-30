import React, { useEffect, useState } from 'react' 
import localforage from 'localforage'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


localforage.config({
    driver: localforage.INDEXEDDB,
    name: 'localStorage'
});

let lang = "es"


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "New Pokemon App": "New Pokemon App and react-i18next",
          "Home": "Home",
          "Features": "Features",
          "Blog": "Blog",
          "Pricing": "Pricing",
          "Contact": "Contact",
          "Change Language": "Change Language",

        }
      },
      es: {
        translation: {
          "New Pokemon App": "Nuevo Aplicación Pokemon (react-i18next)",
          "Home": "Inicio",
          "Features": "Funcionalidades",
          "Blog": "Blog",
          "Pricing": "Precios",
          "Contact": "Contacto",
          "Change Language": "Cambiar idioma",

        }
      }
    },
    lng: lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export const StoreContext = React.createContext(null)
export let context
export let Data = { }
export const ManageData = (key, value) => {

    if (!value) {
        return Data[key]
    } else {
        Data[key] = value 
    }
}

export const ChangeLanguage = (lng) => {
    i18n.changeLanguage(lng) 
    lang = lng
}
 
export default ({ children }) => {
    const { t } = useTranslation();
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const [SinglePokemon, setSinglePokemon] = useState();
    const global = { 
      lang,
      t,
      offset:{offset, setOffset},
      limit:{limit, setLimit},
      page:{page, setPage},
      SinglePokemon:{SinglePokemon, setSinglePokemon}
    }
    context = global
   
    return <StoreContext.Provider value={{ ...global }}>
            {children}
    </StoreContext.Provider>
}
