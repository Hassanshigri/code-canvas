module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-foreground": "#ffffff",
        destructive: "#ef4444",
        "destructive-foreground": "#ffffff",
        background: "#f9fafb",
        accent: "#f3f4f6",
        "accent-foreground": "#1f2937",
      },
    },
  },
  plugins: [],
};
