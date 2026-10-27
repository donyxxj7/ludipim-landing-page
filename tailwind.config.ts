import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { navy: "#0B2C7D", blue: "#2D7FF9", yellow: "#FFD84D", green: "#21C16B", pink: "#FF4D6D" } } },
  plugins: [],
};
export default config;
