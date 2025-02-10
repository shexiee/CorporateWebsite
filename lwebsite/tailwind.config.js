/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#045940", // ✅ Dark Green
        secondary: "#F9A51A", // ✅ Yellow
        accent: "#7be0d3", // ✅ Light Teal
        dark: "#0a0a0a", // ✅ Dark Mode
        light: "#ffffff", // ✅ Light Mode
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
