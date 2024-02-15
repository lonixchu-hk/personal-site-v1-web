import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "shadow-[#df058d]",
    "shadow-[#2c49d8]",
    "shadow-[#ff6b2b]",
    "to-[#f79400ff]",
    "to-[#8462edff]",
    "to-[#ff6a00ff]",
    "to-[#e0eaf6ff]",
    "bg-[#f79400ff]",
    "bg-[#8462edff]",
    "bg-[#ff6a00ff]",
    "bg-[#e0eaf6ff]",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        inner2: "inset 0 -0.3em 0 0",
      },
    },
  },
  plugins: [],
};
export default config;
