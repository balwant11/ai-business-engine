export const themes = {
  luxury: {
    primary: "#000",
    secondary: "#fff",
    accent: "#D4AF37",
    fontFamily: "var(--font-playfair)",
  },
  modern: {
    primary: "#2563eb",
    secondary: "#ffffff",
    accent: "#06b6d4",
    fontFamily: "var(--font-inter)",
  },
  minimalist: {
    primary: "#111827",
    secondary: "#f9fafb",
    accent: "#10b981",
    fontFamily: "var(--font-roboto)",
  },
};

export const getThemeStyles = (themeConfig) => {
  // If a theme object is passed from business.json, we can use it directly,
  // or merge it with our predefined themes.
  if (!themeConfig) return {};
  
  return {
    "--color-primary": themeConfig.primaryColor || themes.modern.primary,
    "--color-secondary": themeConfig.secondaryColor || themes.modern.secondary,
    "--color-accent": themeConfig.accentColor || themes.modern.accent,
    "--font-main": themeConfig.fontFamily || themes.modern.fontFamily,
  };
};
