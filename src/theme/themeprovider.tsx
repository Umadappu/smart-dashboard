import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark" ;
type ThemeCtx = {theme: Theme; toggle: () => void; set: (t: Theme) => void} ;

const ThemeContext = createContext<ThemeCtx | null>(null);
const LS_KEY = "smartdash_theme_v1";

export function ThemeProvider({children} : {children : React.ReactNode}) {
    const [theme, setTheme] = useState<Theme>(()=> {
        const saved = localStorage.getItem(LS_KEY) as Theme | null;
    if (saved) return saved;
    // Prefer user OS setting on first load
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    });

    useEffect (() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(LS_KEY, theme);
    }, [theme]);

    const value = useMemo<ThemeCtx>(() => ({
    theme,
    toggle: () => setTheme(prev => (prev === "light" ? "dark" : "light")),
    set: (t: Theme) => setTheme(t),
  }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;

}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}