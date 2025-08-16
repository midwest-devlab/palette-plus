import fs from "node:fs";
import path from "node:path";

export type Palette = { tokens: Record<string, Record<string, string>> };

export function loadPalette(cwd = process.cwd()): Palette | null {
  const p = path.join(cwd, ".palette-plus", "palette.json");
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

export function colorsFromPalette(cwd = process.cwd()) {
  const palette = loadPalette(cwd);
  if (!palette) return {};
  const out: Record<string, any> = {};
  for (const [name, shades] of Object.entries(palette.tokens)) {
    out[name] = {};
    for (const [shade, hex] of Object.entries(shades)) {
      out[name][shade] = `var(--pp-${name}-${shade}, ${hex})`;
    }
    out[name].DEFAULT = `var(--pp-${name}-500, ${shades["500"] ?? "#000"})`;
  }
  return out;
}

export function cssVarsFromPalette(cwd = process.cwd()) {
  const palette = loadPalette(cwd);
  if (!palette) return {};
  const vars: Record<string, string> = {};
  for (const [name, shades] of Object.entries(palette.tokens)) {
    for (const [shade, hex] of Object.entries(shades)) {
      vars[`--pp-${name}-${shade}`] = hex;
    }
  }
  return vars;
}
