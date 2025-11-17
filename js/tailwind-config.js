tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // NEW: Light Mode Palette
        "light-bg": "#FFFFFF",
        "light-card": "#F9FAFB",      // gray-50
        "light-text": "#374151",      // gray-700
        "light-heading": "#111827",   // gray-900
        "light-primary": "#2563EB",   // blue-600
        "light-border": "#E5E7EB",    // gray-200

        // Original Dark Mode Palette
        "dark-bg": "#121212",
        "dark-card": "#1E1E1E",
        "dark-text": "#E0E0E0",
        "dark-heading": "#FFFFFF",
        "dark-primary": "#3B82F6",
        "dark-border": "#333333",
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
    },
  },
};