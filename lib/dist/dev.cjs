"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/dev.ts
var dev_exports = {};
__export(dev_exports, {
  Logo: () => Logo,
  Palette: () => Palette,
  PalettePanel: () => PalettePanel,
  PalettePlusProvider: () => PalettePlusProvider,
  PaletteToggleButton: () => PaletteToggleButton,
  PanelContent: () => PanelContent
});
module.exports = __toCommonJS(dev_exports);

// src/components/palette-plus/Provider.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var PalettePlusCtx = (0, import_react.createContext)(null);
function normalizeHotkey(e) {
  const parts = [];
  if (e.metaKey) parts.push("Meta");
  if (e.ctrlKey) parts.push("Ctrl");
  if (e.shiftKey) parts.push("Shift");
  if (e.altKey) parts.push("Alt");
  const k = /^[a-z]$/i.test(e.key) ? e.key.toUpperCase() : e.key;
  parts.push(k);
  return parts.join("+");
}
function PalettePlusProvider({
  children,
  hotkey = "Meta+F12"
  // NOTE: F12 can conflict with DevTools in some browsers. Change if needed.
}) {
  const [isOpen, setOpen] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const onKeyDown = (e) => {
      const combo = normalizeHotkey(e);
      if (combo.toLowerCase() === hotkey.toLowerCase()) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [hotkey]);
  const value = (0, import_react.useMemo)(() => ({
    isOpen,
    setOpen,
    toggle: () => setOpen((v) => !v)
  }), [isOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PalettePlusCtx.Provider, { value, children });
}
function usePalettePlus() {
  const ctx = (0, import_react.useContext)(PalettePlusCtx);
  if (!ctx) throw new Error("usePalettePlus must be used within <PalettePlusProvider>");
  return ctx;
}

// src/components/palette-plus/Panel.tsx
var React2 = __toESM(require("react"), 1);

// src/assets/Logo.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Logo(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { viewBox: "0 0 128 128", width: 32, height: 32, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("defs", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("linearGradient", { id: "g", x1: "0", x2: "1", y1: "0", y2: "1", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "0%", stopColor: "#08B6F9" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "50%", stopColor: "#276EF1" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("stop", { offset: "100%", stopColor: "#6B4DFA" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("filter", { id: "shadow", x: "-20%", y: "-20%", width: "140%", height: "140%", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("feDropShadow", { dx: "3", dy: "6", stdDeviation: "4", floodOpacity: "0.35" }) })
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
    ].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/components/palette-plus/Panel.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var PANEL_W = 720;
function PalettePanel({
  children,
  title = "Palette+"
}) {
  const { isOpen, setOpen } = usePalettePlus();
  React2.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        "aria-hidden": true,
        onClick: () => setOpen(false),
        className: [
          "fixed inset-0 z-[9998] bg-black/30 transition-opacity",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "aside",
      {
        role: "dialog",
        "aria-label": title,
        "aria-modal": "true",
        className: [
          "bg-neutral-950 fixed top-0 right-0 z-[9999] h-dvh border-l",
          "shadow-xl transition-transform ease-in-out",
          "w-[360px] max-w-[90vw]",
          isOpen ? "translate-x-0" : "translate-x-full"
        ].join(" "),
        style: { width: PANEL_W },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center justify-between gap-2 border-b px-3 py-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              Logo,
              {
                width: 32,
                height: 32,
                className: "h-8 w-8"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "text-sm font-semibold", children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "mt-1 text-sm text-neutral-400", children: [
              "Click to copy. Hold ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("kbd", { className: "px-1 rounded bg-neutral-800", children: "Shift" }),
              " for",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-mono", children: " bg-*" }),
              ", ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("kbd", { className: "px-1 rounded bg-neutral-800", children: "Ctrl/\u2318" }),
              " for",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-mono", children: " text-*" }),
              ", ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("kbd", { className: "px-1 rounded bg-neutral-800", children: "Alt" }),
              " for",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "font-mono", children: " hue-shade" }),
              "."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                onClick: () => setOpen(false),
                className: "rounded-md border px-2 py-1 text-sm",
                children: "Close"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "fixed grid grid-cols-11 gap-8.25 text-xs text-neutral-400 text-center pl-29 pr-13 py-4 bg-neutral-950 z-20", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "50" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "100" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "200" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "300" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "400" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "500" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "600" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "700" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "800" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "900" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "950" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "h-[calc(100dvh-40px)] overflow-auto p-3", children })
        ]
      }
    )
  ] });
}
var PANEL_WIDTH_PX = PANEL_W;

// src/components/palette-plus/PanelContent.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function PanelContent({ children }) {
  const { isOpen } = usePalettePlus();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      className: [
        "transition-[margin] duration-200 ease-in-out",
        isOpen ? "" : ""
      ].join(" "),
      style: { marginRight: isOpen ? PANEL_WIDTH_PX : 0 },
      children
    }
  );
}

// src/components/palette-plus/ToggleButton.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function PaletteToggleButton() {
  const { isOpen, toggle } = usePalettePlus();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    {
      onClick: toggle,
      className: "fixed bottom-4 right-4 z-[10000] rounded-full border border-2 border-neutral-950 px-3 py-2 bg-white/30 hover:bg-white/80 backdrop-blur drop-shadow-lg drop-shadow-black/100",
      "aria-pressed": isOpen,
      "aria-label": "Toggle Palette+",
      title: "Toggle Palette+ (Meta+F12)",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "text-2xl drop-shadow-lg drop-shadow-black/100", children: "\u{1F3A8}" })
    }
  );
}

// src/components/Palette.tsx
var import_react2 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var HUES = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone"
];
var SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var CLASS_MAP = {
  red: { 50: "bg-red-50", 100: "bg-red-100", 200: "bg-red-200", 300: "bg-red-300", 400: "bg-red-400", 500: "bg-red-500", 600: "bg-red-600", 700: "bg-red-700", 800: "bg-red-800", 900: "bg-red-900", 950: "bg-red-950" },
  orange: { 50: "bg-orange-50", 100: "bg-orange-100", 200: "bg-orange-200", 300: "bg-orange-300", 400: "bg-orange-400", 500: "bg-orange-500", 600: "bg-orange-600", 700: "bg-orange-700", 800: "bg-orange-800", 900: "bg-orange-900", 950: "bg-orange-950" },
  amber: { 50: "bg-amber-50", 100: "bg-amber-100", 200: "bg-amber-200", 300: "bg-amber-300", 400: "bg-amber-400", 500: "bg-amber-500", 600: "bg-amber-600", 700: "bg-amber-700", 800: "bg-amber-800", 900: "bg-amber-900", 950: "bg-amber-950" },
  yellow: { 50: "bg-yellow-50", 100: "bg-yellow-100", 200: "bg-yellow-200", 300: "bg-yellow-300", 400: "bg-yellow-400", 500: "bg-yellow-500", 600: "bg-yellow-600", 700: "bg-yellow-700", 800: "bg-yellow-800", 900: "bg-yellow-900", 950: "bg-yellow-950" },
  lime: { 50: "bg-lime-50", 100: "bg-lime-100", 200: "bg-lime-200", 300: "bg-lime-300", 400: "bg-lime-400", 500: "bg-lime-500", 600: "bg-lime-600", 700: "bg-lime-700", 800: "bg-lime-800", 900: "bg-lime-900", 950: "bg-lime-950" },
  green: { 50: "bg-green-50", 100: "bg-green-100", 200: "bg-green-200", 300: "bg-green-300", 400: "bg-green-400", 500: "bg-green-500", 600: "bg-green-600", 700: "bg-green-700", 800: "bg-green-800", 900: "bg-green-900", 950: "bg-green-950" },
  emerald: { 50: "bg-emerald-50", 100: "bg-emerald-100", 200: "bg-emerald-200", 300: "bg-emerald-300", 400: "bg-emerald-400", 500: "bg-emerald-500", 600: "bg-emerald-600", 700: "bg-emerald-700", 800: "bg-emerald-800", 900: "bg-emerald-900", 950: "bg-emerald-950" },
  teal: { 50: "bg-teal-50", 100: "bg-teal-100", 200: "bg-teal-200", 300: "bg-teal-300", 400: "bg-teal-400", 500: "bg-teal-500", 600: "bg-teal-600", 700: "bg-teal-700", 800: "bg-teal-800", 900: "bg-teal-900", 950: "bg-teal-950" },
  cyan: { 50: "bg-cyan-50", 100: "bg-cyan-100", 200: "bg-cyan-200", 300: "bg-cyan-300", 400: "bg-cyan-400", 500: "bg-cyan-500", 600: "bg-cyan-600", 700: "bg-cyan-700", 800: "bg-cyan-800", 900: "bg-cyan-900", 950: "bg-cyan-950" },
  sky: { 50: "bg-sky-50", 100: "bg-sky-100", 200: "bg-sky-200", 300: "bg-sky-300", 400: "bg-sky-400", 500: "bg-sky-500", 600: "bg-sky-600", 700: "bg-sky-700", 800: "bg-sky-800", 900: "bg-sky-900", 950: "bg-sky-950" },
  blue: { 50: "bg-blue-50", 100: "bg-blue-100", 200: "bg-blue-200", 300: "bg-blue-300", 400: "bg-blue-400", 500: "bg-blue-500", 600: "bg-blue-600", 700: "bg-blue-700", 800: "bg-blue-800", 900: "bg-blue-900", 950: "bg-blue-950" },
  indigo: { 50: "bg-indigo-50", 100: "bg-indigo-100", 200: "bg-indigo-200", 300: "bg-indigo-300", 400: "bg-indigo-400", 500: "bg-indigo-500", 600: "bg-indigo-600", 700: "bg-indigo-700", 800: "bg-indigo-800", 900: "bg-indigo-900", 950: "bg-indigo-950" },
  violet: { 50: "bg-violet-50", 100: "bg-violet-100", 200: "bg-violet-200", 300: "bg-violet-300", 400: "bg-violet-400", 500: "bg-violet-500", 600: "bg-violet-600", 700: "bg-violet-700", 800: "bg-violet-800", 900: "bg-violet-900", 950: "bg-violet-950" },
  purple: { 50: "bg-purple-50", 100: "bg-purple-100", 200: "bg-purple-200", 300: "bg-purple-300", 400: "bg-purple-400", 500: "bg-purple-500", 600: "bg-purple-600", 700: "bg-purple-700", 800: "bg-purple-800", 900: "bg-purple-900", 950: "bg-purple-950" },
  fuchsia: { 50: "bg-fuchsia-50", 100: "bg-fuchsia-100", 200: "bg-fuchsia-200", 300: "bg-fuchsia-300", 400: "bg-fuchsia-400", 500: "bg-fuchsia-500", 600: "bg-fuchsia-600", 700: "bg-fuchsia-700", 800: "bg-fuchsia-800", 900: "bg-fuchsia-900", 950: "bg-fuchsia-950" },
  pink: { 50: "bg-pink-50", 100: "bg-pink-100", 200: "bg-pink-200", 300: "bg-pink-300", 400: "bg-pink-400", 500: "bg-pink-500", 600: "bg-pink-600", 700: "bg-pink-700", 800: "bg-pink-800", 900: "bg-pink-900", 950: "bg-pink-950" },
  rose: { 50: "bg-rose-50", 100: "bg-rose-100", 200: "bg-rose-200", 300: "bg-rose-300", 400: "bg-rose-400", 500: "bg-rose-500", 600: "bg-rose-600", 700: "bg-rose-700", 800: "bg-rose-800", 900: "bg-rose-900", 950: "bg-rose-950" },
  slate: { 50: "bg-slate-50", 100: "bg-slate-100", 200: "bg-slate-200", 300: "bg-slate-300", 400: "bg-slate-400", 500: "bg-slate-500", 600: "bg-slate-600", 700: "bg-slate-700", 800: "bg-slate-800", 900: "bg-slate-900", 950: "bg-slate-950" },
  gray: { 50: "bg-gray-50", 100: "bg-gray-100", 200: "bg-gray-200", 300: "bg-gray-300", 400: "bg-gray-400", 500: "bg-gray-500", 600: "bg-gray-600", 700: "bg-gray-700", 800: "bg-gray-800", 900: "bg-gray-900", 950: "bg-gray-950" },
  zinc: { 50: "bg-zinc-50", 100: "bg-zinc-100", 200: "bg-zinc-200", 300: "bg-zinc-300", 400: "bg-zinc-400", 500: "bg-zinc-500", 600: "bg-zinc-600", 700: "bg-zinc-700", 800: "bg-zinc-800", 900: "bg-zinc-900", 950: "bg-zinc-950" },
  neutral: { 50: "bg-neutral-50", 100: "bg-neutral-100", 200: "bg-neutral-200", 300: "bg-neutral-300", 400: "bg-neutral-400", 500: "bg-neutral-500", 600: "bg-neutral-600", 700: "bg-neutral-700", 800: "bg-neutral-800", 900: "bg-neutral-900", 950: "bg-neutral-950" },
  stone: { 50: "bg-stone-50", 100: "bg-stone-100", 200: "bg-stone-200", 300: "bg-stone-300", 400: "bg-stone-400", 500: "bg-stone-500", 600: "bg-stone-600", 700: "bg-stone-700", 800: "bg-stone-800", 900: "bg-stone-900", 950: "bg-stone-950" }
};
var _ctx = null;
function ensureCtx() {
  if (typeof window === "undefined") return null;
  if (_ctx) return _ctx;
  const c = document.createElement("canvas");
  c.width = c.height = 1;
  _ctx = c.getContext("2d", { willReadFrequently: true });
  return _ctx;
}
function cssColorToHex(input) {
  const ctx = ensureCtx();
  if (!ctx) return input;
  ctx.fillStyle = "#000";
  ctx.fillStyle = input;
  const normalized = ctx.fillStyle;
  if (normalized.startsWith("#")) {
    if (normalized.length === 4) {
      const r = normalized[1], g = normalized[2], b = normalized[3];
      return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
    }
    return normalized.toUpperCase();
  }
  const m = normalized.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\)/i);
  if (m) {
    const [r, g, b] = [parseInt(m[1], 10), parseInt(m[2], 10), parseInt(m[3], 10)];
    const toHex = (v) => v.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  return normalized.toUpperCase();
}
function Toast({ value }) {
  if (!value) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm z-50", children: [
    "Copied ",
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-mono", children: value })
  ] });
}
function Tooltip({ text, x, y, show }) {
  if (!show) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      className: "pointer-events-none fixed z-50 -translate-x-56 -translate-y-3 rounded-md bg-neutral-900/95 px-2 py-1 text-xs text-white shadow-md",
      style: { left: x, top: y },
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-mono", children: text })
    }
  );
}
function Swatch({ cls, label, hue, shade }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      type: "button",
      "data-hue": hue,
      "data-shade": shade,
      "aria-label": `Copy HEX for ${label}`,
      className: `group h-12 w-12 rounded-xl ring-1 ring-black/5 ${cls} relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 border-t border-r border-neutral-50`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-black/10" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: label })
      ]
    }
  );
}
function Palette() {
  const rows = (0, import_react2.useMemo)(() => {
    return HUES.map((hue) => SHADES.map((shade) => ({
      hue,
      shade,
      cls: CLASS_MAP[hue][shade],
      id: `${hue}-${shade}`
    })));
  }, []);
  const [toastValue, setToastValue] = (0, import_react2.useState)(null);
  const [tip, setTip] = (0, import_react2.useState)({
    text: "",
    x: 0,
    y: 0,
    show: false
  });
  const gridRef = (0, import_react2.useRef)(null);
  function computeCopy(e, btn) {
    const hue = btn.dataset.hue;
    const shade = btn.dataset.shade;
    const alt = e.altKey;
    const metaOrCtrl = !!(e.metaKey || e.ctrlKey);
    const shift = e.shiftKey;
    if (alt) return `${hue}-${shade}`;
    if (metaOrCtrl) return `text-${hue}-${shade}`;
    if (shift) return `bg-${hue}-${shade}`;
    const colorStr = getComputedStyle(btn).backgroundColor;
    return cssColorToHex(colorStr);
  }
  const handleCopy = (e) => {
    if ("key" in e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
    }
    const target = e.target?.closest(
      "button[data-hue][data-shade]"
    );
    if (!target) return;
    const toCopy = computeCopy(e, target);
    navigator.clipboard.writeText(toCopy).then(() => {
      setToastValue(toCopy);
      window.setTimeout(() => setToastValue(null), 1200);
    });
  };
  const handleMouseMove = (e) => {
    const btn = e.target?.closest(
      "button[data-hue][data-shade]"
    );
    if (!btn) {
      if (tip.show) setTip((t) => ({ ...t, show: false }));
      return;
    }
    const text = computeCopy(e, btn);
    setTip({ text, x: e.clientX + 12, y: e.clientY + 12, show: true });
  };
  const handleMouseLeave = () => {
    setTip((t) => ({ ...t, show: false }));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "min-h-dvh text-neutral-200 antialiased", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "mx-auto max-w-[1200px] px-6", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("header", { className: "mb-2 flex flex-col justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "hidden md:flex items-center gap-[5px] ml-17 mt-4 text-xs text-neutral-400", children: SHADES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid w-12 justify-items-center", children: s }, s)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "grid grid-cols-[auto_1fr] gap-x-4 gap-y-2", children: rows.map((cells, rowIdx) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react2.default.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "sticky left-0 z-10 text-sm text-neutral-300 content-center justify-self-end", children: HUES[rowIdx][0].toUpperCase() + HUES[rowIdx].slice(1) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "div",
          {
            ref: gridRef,
            className: "grid grid-cols-11 gap-2",
            onClick: handleCopy,
            onKeyDown: handleCopy,
            onMouseMove: handleMouseMove,
            onMouseLeave: handleMouseLeave,
            children: cells.map(({ cls, id, hue, shade }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              Swatch,
              {
                cls,
                label: `${hue} ${shade}`,
                hue,
                shade
              },
              id
            ))
          }
        )
      ] }, HUES[rowIdx])) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Tooltip, { text: tip.text, x: tip.x, y: tip.y, show: tip.show }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Toast, { value: toastValue })
  ] });
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
//# sourceMappingURL=dev.cjs.map