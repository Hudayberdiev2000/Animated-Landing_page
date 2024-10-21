import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #dd7ddf, #e1cd86, #bbcb92, #71c2ef, #3bffff, #dd7ddf)",
        "logo-bg-gradient":
          "linear-gradient(to right, #f87bff, #fb92cf, #ffdd9b, #c2f0b1, #2fd8fe)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
