/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          light: "#F5F3FF",
          primary: "#7C3AED",
          dark: "#6D28D9",
        },
      },
      fontFamily: {
        primary: ["Poppins"],
        secondary: ['"Open Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
