import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index: "src/index.ts",  // core shared exports (if any)
    dev: "src/dev.ts",      // full UI
    prod: "src/prod.tsx"     // no-op shims
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  external: ["react", "react-dom","@midwestdevlab/palette-plus"]
});
