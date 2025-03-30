/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        deepBlue: "#1A202C",
      },
      backgroundImage: {
        "islamic-pattern": "url('/pattern.png')",
      },
      fontFamily: {
        arabic: ["'Amiri'", "serif"], // Optional: Add a beautiful Arabic-style font
      },
      spacing: {
        "extra-lg": "96px", // Extra large padding/margin
      },
    },
  },
  plugins: [],
};
