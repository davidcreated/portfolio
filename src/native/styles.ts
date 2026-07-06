// Editorial palette: deep charcoal base, warm off-white/cream text, and a single
// muted gold accent (`blue` token) reserved for hover states and CTAs only.
export const colors = {
  background: "var(--color-background, #121212)", // charcoal base
  card: "var(--color-card, #1A1A1A)", // elevated panels
  accentSoft: "var(--color-accent-soft, #202020)", // neutral chips / inputs
  border: "var(--color-border, #2C2C2C)", // subtle dividers
  foreground: "var(--color-foreground, #F5F5F5)", // cream text
  muted: "var(--color-muted, #9E9A94)", // warm secondary text
  accent: "var(--color-accent, #F5F5F5)",
  ring: "var(--color-ring, #D4AF37)", // focus ring = gold
  blue: "var(--color-blue, #D4AF37)", // muted gold accent — hover / CTA only
};

export const lightTheme = {
  background: "#F6F2EA", // warm cream
  card: "#FFFFFF",
  accentSoft: "#EFEADF",
  border: "#E3DCCE",
  foreground: "#1A1A1A",
  muted: "#6E675B",
  accent: "#1A1A1A",
  ring: "#B08D2E",
  blue: "#B08D2E", // deeper gold for contrast on cream
};

export const darkTheme = {
  background: "#121212",
  card: "#1A1A1A",
  accentSoft: "#202020",
  border: "#2C2C2C",
  foreground: "#F5F5F5",
  muted: "#9E9A94",
  accent: "#F5F5F5",
  ring: "#D4AF37",
  blue: "#D4AF37",
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

// Editorial pairing: a sophisticated serif for headings, Inter for body/UI.
export const fonts = {
  body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  heading: '"Cormorant Garamond", Georgia, "Times New Roman", serif',
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
