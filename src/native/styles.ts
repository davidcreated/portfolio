export const colors = {
  background: "var(--color-background, #FAFAFA)",
  card: "var(--color-card, #FFFFFF)",
  foreground: "var(--color-foreground, #0A0A0A)",
  muted: "var(--color-muted, #737373)",
  border: "var(--color-border, #E5E5E5)",
  accent: "var(--color-accent, #0A0A0A)",
  accentSoft: "var(--color-accent-soft, #F5F5F5)",
  ring: "var(--color-ring, #E5E5E5)",
  blue: "var(--color-blue, #2563EB)",
};

export const lightTheme = {
  background: "#FAFAFA",
  card: "#FFFFFF",
  foreground: "#0A0A0A",
  muted: "#737373",
  border: "#E5E5E5",
  accent: "#0A0A0A",
  accentSoft: "#F5F5F5",
  ring: "#E5E5E5",
  blue: "#2563EB",
};

export const darkTheme = {
  background: "#0A0A0A",
  card: "#111111",
  foreground: "#FAFAFA",
  muted: "#A3A3A3",
  border: "#262626",
  accent: "#FAFAFA",
  accentSoft: "#171717",
  ring: "#404040",
  blue: "#60A5FA",
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
