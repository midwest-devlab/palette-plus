"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/prod.tsx
var prod_exports = {};
__export(prod_exports, {
  Logo: () => Logo,
  Palette: () => Palette,
  PalettePanel: () => PalettePanel,
  PalettePlusProvider: () => PalettePlusProvider,
  PaletteToggleButton: () => PaletteToggleButton,
  PanelContent: () => PanelContent
});
module.exports = __toCommonJS(prod_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function PalettePlusProvider({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function PanelContent({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function PalettePanel({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function PaletteToggleButton() {
  return null;
}
function Palette() {
  return null;
}
function Logo(props) {
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logo,
  Palette,
  PalettePanel,
  PalettePlusProvider,
  PaletteToggleButton,
  PanelContent
});
//# sourceMappingURL=prod.cjs.map