/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#ede0cf", // Bege claro
          DEFAULT: "#a69176", // Bege médio
          dark: "#1A1A1A", // Fundo escuro
        },
      },
    },
  },
  plugins: [],
};
