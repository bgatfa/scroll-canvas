import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia"],
      },
      colors: {
        cream: "#efebe2",
        surface: "#f6f3eb",
        ink: "#1a1814",
        muted: "#6e655a",
        line: "#d8d2c4",
        copper: "#a87b50",
        sage: "#7a8a6f",
        clay: "#c9b59a",
      },
      letterSpacing: {
        widest2: "0.4em",
      },
    },
  },
  plugins: [],
};

export default config;
