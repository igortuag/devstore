import { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-inter)"
      },
      gridTemplateRows: {
        app: "min-content max-content"
      }
    }
  }
};

export default config;
