import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Language translations
const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            offers: "Offers",
            customerService: "Customer Service",
            signIn: "Sign in / Register",
            logout: "Logout",
        },
    },
    de: {
        translation: {
            welcome: "Willkommen",
            offers: "Angebote",
            customerService: "Kundendienst",
            signIn: "Anmelden / Registrieren",
            logout: "Abmelden",
        },
    },
};

i18n.use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,
        lng: localStorage.getItem("i18nextLng") || "en", // Check if language is stored in localStorage, fallback to 'en'
        fallbackLng: "en", // Fallback language
        interpolation: {
            escapeValue: false, // React already does escaping
        },
        react: {
            useSuspense: false, // Disable suspense to avoid loading issues
        },
    });

// Save language to localStorage on language change
i18n.on("languageChanged", (lng) => {
    localStorage.setItem("i18nextLng", lng);
});

export default i18n;
