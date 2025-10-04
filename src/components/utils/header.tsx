import { useTheme } from "../../theme/themeprovider"

export default function Headercomponent() {
    const { theme, toggle } = useTheme();
    return(
        <div className="app-header">
         <strong>Smart Dashboard</strong>
         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 13, color: "var(--muted)" }}>{theme === "dark" ? "Dark" : "Light"} mode</span>
        <button className="button" onClick={toggle} aria-label="Toggle theme">
          {theme === "dark" ? "L" : "D"}
          Toggle
        </button>
      </div>
        </div>
    )
}