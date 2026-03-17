/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#E8D9C5", // Bege claro
          DEFAULT: "#B09980", // Bege médio
          dark: "#1A1A1A", // Fundo escuro
        },
      },
    },
  },
  plugins: [],
};
