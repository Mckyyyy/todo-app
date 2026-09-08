import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LanguageContext, translations } from "../context/Language";

const STORAGE_KEY = "todo-dashboard-language";

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window === "undefined") return "en";
        const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
        return savedLanguage && translations[savedLanguage] ? savedLanguage : "en";
    });

    useEffect(() => {
        document.documentElement.lang = language;
        window.localStorage.setItem(STORAGE_KEY, language);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, text: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
