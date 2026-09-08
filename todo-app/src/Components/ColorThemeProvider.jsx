import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ColorThemeContext, useColorTheme } from "../context/ColorThemeContext";

/*
  ColorThemeProvider.jsx

  Drop this file into your project (e.g. src/components/ColorThemeProvider.jsx)
  and wrap your existing Dashboard with it. It gives you:
    - a <ColorThemeProvider> wrapper that stores the chosen color
    - a <ColorPicker /> component you can place anywhere (e.g. in a settings menu)
    - a useColorTheme() hook to read the current color inside any component
    - a CSS variable --theme-color that updates live everywhere it's used

  ---------------------------------------------------------------------------
  HOW TO USE IN YOUR EXISTING FILES
  ---------------------------------------------------------------------------

  1) Wrap your app/dashboard root (e.g. in App.jsx or Dashboard.jsx):

     import { ColorThemeProvider } from "./ColorThemeProvider";

     function App() {
       return (
         <ColorThemeProvider>
           <Dashboard />
         </ColorThemeProvider>
       );
     }

  2) Add the picker control somewhere in your UI (e.g. a settings panel or navbar):

     import { ColorPicker } from "./ColorThemeProvider";

     <ColorPicker />

  3) Use the color anywhere inside the provider, two ways:

     a) Via CSS variable (works in plain CSS/inline styles, no re-render needed):
        style={{ background: "var(--theme-color)" }}

     b) Via the hook (if you need the raw value in JS logic):
        import { useColorTheme } from "./ColorThemeProvider";
        const { color } = useColorTheme();

  That's it — no other changes needed to your existing dashboard code.
  ---------------------------------------------------------------------------
*/

const STORAGE_KEY = "dashboard-theme-color";
const MODE_STORAGE_KEY = "dashboard-dark-mode";
const DEFAULT_COLOR = "#3b82f6";

export function ColorThemeProvider({ children, defaultColor = DEFAULT_COLOR }) {
  const [color, setColor] = useState(() => {
    if (typeof window === "undefined") return defaultColor;
    return window.localStorage.getItem(STORAGE_KEY) || defaultColor;
  });
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return window.localStorage.getItem(MODE_STORAGE_KEY) !== "false";
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-color", color);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    try {
      window.localStorage.setItem(STORAGE_KEY, color);
      window.localStorage.setItem(MODE_STORAGE_KEY, String(isDark));
    } catch {
      // localStorage unavailable, safe to ignore
    }
  }, [color, isDark]);

  return (
    <ColorThemeContext.Provider value={{ color, setColor, isDark, setIsDark, toggleDarkMode: () => setIsDark((current) => !current) }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

ColorThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultColor: PropTypes.string,
};

const PRESET_COLORS = [
  "#3b82f6", // blue
  "#22c55e", // green
  "#f97316", // orange
  "#ef4444", // red
  "#a855f7", // purple
  "#ec4899", // pink
  "#14b8a6", // teal
  "#eab308", // yellow
];

export function ColorPicker() {
  const { color, setColor, isDark, toggleDarkMode } = useColorTheme();

  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>Dashboard color</span>

      <div style={styles.presetRow}>
        {PRESET_COLORS.map((preset) => (
          <button
            key={preset}
            type="button"
            aria-label={`Set color ${preset}`}
            onClick={() => setColor(preset)}
            style={{
              ...styles.swatch,
              background: preset,
              outline:
                preset.toLowerCase() === color.toLowerCase()
                  ? "2px solid #111827"
                  : "1px solid rgba(0,0,0,0.15)",
              outlineOffset: 2,
            }}
          />
        ))}
      </div>

      <label style={styles.customRow}>
        Custom:
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={styles.colorInput}
        />
      </label>
      <button className="theme-mode-toggle" type="button" onClick={toggleDarkMode} aria-pressed={isDark}>
        <span aria-hidden="true">{isDark ? "☀" : "☾"}</span>
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
}

ColorPicker.propTypes = {};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontFamily: "sans-serif",
  },
  label: {
    fontSize: 13,
    fontWeight: 500,
    color: "#374151",
  },
  presetRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  swatch: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
  },
  customRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    color: "#374151",
  },
  colorInput: {
    width: 36,
    height: 28,
    padding: 0,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    cursor: "pointer",
    background: "none",
  },
};
