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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Logo: () => Logo
});
module.exports = __toCommonJS(src_exports);

// src/assets/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Logo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", { viewBox: "0 0 128 128", width: 32, height: 32, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", { id: "g", x1: "0", x2: "1", y1: "0", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "#08B6F9" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "50%", stopColor: "#276EF1" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: "#6B4DFA" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("filter", { id: "shadow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feDropShadow", { dx: "3", dy: "6", stdDeviation: "4", floodOpacity: "0.35" }) })
    ] }),
    [
      { x: 48, y: 8 },
      // top
      { x: 8, y: 48 },
      // left
      { x: 48, y: 48 },
      // center
      { x: 88, y: 48 },
      // right
      { x: 48, y: 88 }
      // bottom
    ].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "rect",
      {
        x: p.x,
        y: p.y,
        width: 32,
        height: 32,
        rx: 8,
        fill: "url(#g)",
        stroke: "black",
        strokeWidth: "2",
        filter: "url(#shadow)"
      },
      i
    ))
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logo
});
//# sourceMappingURL=index.cjs.map