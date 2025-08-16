// src/assets/Logo.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Logo(props) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 128 128", width: 32, height: 32, ...props, children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: "g", x1: "0", x2: "1", y1: "0", y2: "1", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#08B6F9" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#276EF1" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#6B4DFA" })
      ] }),
      /* @__PURE__ */ jsx("filter", { id: "shadow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ jsx("feDropShadow", { dx: "3", dy: "6", stdDeviation: "4", floodOpacity: "0.35" }) })
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
    ].map((p, i) => /* @__PURE__ */ jsx(
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

export {
  Logo
};
//# sourceMappingURL=chunk-JGJB3PIH.js.map