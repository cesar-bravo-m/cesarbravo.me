import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(-4px, -4px)' },
          '50%': { transform: 'translate(4px, 4px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(4px, 4px)' },
          '50%': { transform: 'translate(-4px, -4px)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 3s ease-in-out infinite',
        'float-slower': 'float-slower 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
