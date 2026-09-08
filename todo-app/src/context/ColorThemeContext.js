import { createContext, useContext } from "react";

export const ColorThemeContext = createContext(null);

export function useColorTheme() {
    const context = useContext(ColorThemeContext);
    if (!context) {
        throw new Error("useColorTheme must be used inside a <ColorThemeProvider>");
    }
    return context;
}
