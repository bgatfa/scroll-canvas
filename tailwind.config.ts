import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        ink: "#0a0a0f",
        bone: "#f5f1ea",
        accent: "#ff5b3e",
        accent2: "#3ee0ff",
      },
    },
  },
  plugins: [],
};

export default config;
