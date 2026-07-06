// NOTE: the `blue` token is the site's single accent color. It now holds a
// violet/purple; the name is kept so every `colors.blue` reference stays valid.
export const colors = {
  background: "var(--color-background, #0B0910)",
  card: "var(--color-card, #151221)",
  foreground: "var(--color-foreground, #FAFAFA)",
  muted: "var(--color-muted, #A5A0B5)",
  border: "var(--color-border, #26223A)",
  accent: "var(--color-accent, #FAFAFA)",
  accentSoft: "var(--color-accent-soft, #1C1730)",
  ring: "var(--color-ring, #3A3358)",
  blue: "var(--color-blue, #A78BFA)",
};

export const lightTheme = {
  background: "#FAFAFA",
  card: "#FFFFFF",
  foreground: "#0A0A0A",
  muted: "#6B6580",
  border: "#E7E3F0",
  accent: "#0A0A0A",
  accentSoft: "#F3F0FB",
  ring: "#E7E3F0",
  blue: "#7C3AED",
};

export const darkTheme = {
  background: "#0B0910",
  card: "#151221",
  foreground: "#FAFAFA",
  muted: "#A5A0B5",
  border: "#26223A",
  accent: "#FAFAFA",
  accentSoft: "#1C1730",
  ring: "#3A3358",
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

export const fonts = {
  body: "CabinetGrotesk",
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
