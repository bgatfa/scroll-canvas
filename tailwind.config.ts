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
        bg: "#0a0a0a",
        surface: "#111111",
        surface2: "#171717",
        border: "rgba(255,255,255,0.08)",
        borderStrong: "rgba(255,255,255,0.18)",
        fg: "#ededed",
        muted: "#888888",
        subtle: "#525252",
        accent: "#fafafa",
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
