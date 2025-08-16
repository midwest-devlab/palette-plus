const fs = require("node:fs/promises");
const path = require("node:path");

(async () => {
  const ROOT = process.cwd();
  const palettePath = path.join(ROOT, ".palette-plus", "palette.json");

  // Pick src/app if it exists, otherwise app
  const srcAppDir = path.join(ROOT, "src", "app");
  const appDir = await fs.stat(srcAppDir).then(() => srcAppDir).catch(() => path.join(ROOT, "app"));

  const outPath = path.join(appDir, "palette.theme.css");

  // Load palette JSON
  const raw = await fs.readFile(palettePath, "utf8").catch(() => null);
  if (!raw) {
    console.error("Missing .palette-plus/palette.json");
    process.exit(1);
  }
  const data = JSON.parse(raw);

  // Ensure the target dir exists
  await fs.mkdir(appDir, { recursive: true });

  // Build CSS @theme
  let css = "/* Generated from .palette-plus/palette.json */\n@theme {\n";
  for (const [name, shades] of Object.entries(data.tokens ?? {})) {
    for (const [shade, hex] of Object.entries(shades)) {
      css += `  --color-${name}-${shade}: ${hex};\n`;
    }
    if (shades["500"]) css += `  --color-${name}: var(--color-${name}-500);\n`;
  }
  css += "}\n";

  await fs.writeFile(outPath, css, "utf8");
  console.log("Wrote", path.relative(ROOT, outPath));
})();
