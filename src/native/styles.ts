// Intentional palette (60-30-10): `background` is the dominant surface, the
// neutral steps (card / accentSoft / border / muted) carry the 30%, and `blue`
// is the single 10% accent — reserved for actions, active state, and hover
// feedback only, never for static decoration.
export const colors = {
  background: "var(--color-background, #0A0812)", // 60% base
  card: "var(--color-card, #17131F)", // elevated panels
  accentSoft: "var(--color-accent-soft, #201B2E)", // neutral chips / inputs
  border: "var(--color-border, #2A2540)", // subtle dividers
  foreground: "var(--color-foreground, #F5F3FA)", // primary text
  muted: "var(--color-muted, #A19BB2)", // secondary text
  accent: "var(--color-accent, #F5F3FA)",
  ring: "var(--color-ring, #A78BFA)", // focus ring = accent
  blue: "var(--color-blue, #A78BFA)", // 10% accent — actions only
};

export const lightTheme = {
  background: "#FBFAFE",
  card: "#FFFFFF",
  accentSoft: "#F1EEFA",
  border: "#E7E3F2",
  foreground: "#141021",
  muted: "#66617A",
  accent: "#141021",
  ring: "#7C3AED",
  blue: "#7C3AED",
};

export const darkTheme = {
  background: "#0A0812",
  card: "#17131F",
  accentSoft: "#201B2E",
  border: "#2A2540",
  foreground: "#F5F3FA",
  muted: "#A19BB2",
  accent: "#F5F3FA",
  ring: "#A78BFA",
  blue: "#A78BFA",
};

export function getThemeVariables(theme: typeof darkTheme) {
  return {
    "--color-background": theme.background,
    "--color-card": theme.card,
    "--color-foreground": theme.foreground,
    "--color-muted": theme.muted,
    "--color-border": theme.border,
    "--color-accent": theme.accent,
    "--color-accent-soft": theme.accentSoft,
    "--color-ring": theme.ring,
    "--color-blue": theme.blue,
  };
}

// Inter carries the body/UI text (a proper, highly-legible workhorse); the
// ClashDisplay display face is reserved for large headings only.
export const fonts = {
  body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  heading: "ClashDisplay",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 32,
  xxl: 56,
};

export const radii = {
  sm: 8,
  md: 10,
  lg: 14,
};
