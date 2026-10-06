import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050A14",
        navy: {
          DEFAULT: "#0B1B36",
          800: "#0E2345",
          700: "#14305E",
        },
        steel: {
          100: "#E6EDF6",
          300: "#A9BCD3",
          400: "#7C9BC2",
          500: "#4F7DB8",
          600: "#2F63B0",
        },
        spark: {
          DEFAULT: "#2F7BFF",
          dark: "#1D5FE0",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
