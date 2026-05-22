import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        border: "var(--border)",
        borderStrong: "var(--borderStrong)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
        accent: "var(--accent)",
      },
      borderRadius: {
        card: "10px",
        btn: "8px",
      },
      letterSpacing: {
        widest2: "0.4em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
