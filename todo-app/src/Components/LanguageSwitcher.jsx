import { languageNames, useLanguage } from "../context/Language";

const LanguageSwitcher = () => {
    const { language, setLanguage, text } = useLanguage();

    return (
        <label className="language-switcher">
            <span>{text.language}</span>
            <select value={language} onChange={(event) => setLanguage(event.target.value)} aria-label={text.language}>
                {Object.entries(languageNames).map(([code, name]) => (
                    <option key={code} value={code}>{name}</option>
                ))}
            </select>
        </label>
    );
};

export default LanguageSwitcher;