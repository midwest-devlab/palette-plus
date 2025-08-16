import type { Config } from "tailwindcss";
import palettePlugin from "./tailwind.plugin";
import { colorsFromPalette } from "./scripts/palette";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colorsFromPalette(),
      },
    },
  },
  plugins: [palettePlugin],
} satisfies Config;
