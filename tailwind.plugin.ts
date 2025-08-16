import plugin from "tailwindcss/plugin";
import { cssVarsFromPalette } from "./scripts/palette";

const palettePlugin = plugin(({ addBase }) => {
  const vars = cssVarsFromPalette();
  if (Object.keys(vars).length) {
    addBase({ ":root": vars });
  }
});

export default palettePlugin;
