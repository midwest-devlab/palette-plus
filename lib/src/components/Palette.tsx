'use client';

import React, { useMemo, useRef, useState } from "react";

/**
 * Prism Studio – Palette (Reusable Component)
 * ------------------------------------------------------------
 * Behavior
 * - Click => copy HEX (#RRGGBB)
 * - Shift + click/Enter => copy bg-{hue}-{shade}
 * - Ctrl/⌘ + click/Enter => copy text-{hue}-{shade}
 * - Alt + click/Enter => copy {hue}-{shade}
 * - Tooltip previews what will be copied (mouse only)
 */

// Order matches Tailwind’s docs palette rows
const HUES = [
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
  "stone",
] as const;

type Hue = (typeof HUES)[number];

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;

type Shade = (typeof SHADES)[number];

// Build a literal map of Tailwind classes so the JIT can see them (no runtime strings)
const CLASS_MAP: Record<Hue, Record<Shade, string>> = {
  red: {50:"bg-red-50",100:"bg-red-100",200:"bg-red-200",300:"bg-red-300",400:"bg-red-400",500:"bg-red-500",600:"bg-red-600",700:"bg-red-700",800:"bg-red-800",900:"bg-red-900",950:"bg-red-950"},
  orange: {50:"bg-orange-50",100:"bg-orange-100",200:"bg-orange-200",300:"bg-orange-300",400:"bg-orange-400",500:"bg-orange-500",600:"bg-orange-600",700:"bg-orange-700",800:"bg-orange-800",900:"bg-orange-900",950:"bg-orange-950"},
  amber: {50:"bg-amber-50",100:"bg-amber-100",200:"bg-amber-200",300:"bg-amber-300",400:"bg-amber-400",500:"bg-amber-500",600:"bg-amber-600",700:"bg-amber-700",800:"bg-amber-800",900:"bg-amber-900",950:"bg-amber-950"},
  yellow: {50:"bg-yellow-50",100:"bg-yellow-100",200:"bg-yellow-200",300:"bg-yellow-300",400:"bg-yellow-400",500:"bg-yellow-500",600:"bg-yellow-600",700:"bg-yellow-700",800:"bg-yellow-800",900:"bg-yellow-900",950:"bg-yellow-950"},
  lime: {50:"bg-lime-50",100:"bg-lime-100",200:"bg-lime-200",300:"bg-lime-300",400:"bg-lime-400",500:"bg-lime-500",600:"bg-lime-600",700:"bg-lime-700",800:"bg-lime-800",900:"bg-lime-900",950:"bg-lime-950"},
  green: {50:"bg-green-50",100:"bg-green-100",200:"bg-green-200",300:"bg-green-300",400:"bg-green-400",500:"bg-green-500",600:"bg-green-600",700:"bg-green-700",800:"bg-green-800",900:"bg-green-900",950:"bg-green-950"},
  emerald: {50:"bg-emerald-50",100:"bg-emerald-100",200:"bg-emerald-200",300:"bg-emerald-300",400:"bg-emerald-400",500:"bg-emerald-500",600:"bg-emerald-600",700:"bg-emerald-700",800:"bg-emerald-800",900:"bg-emerald-900",950:"bg-emerald-950"},
  teal: {50:"bg-teal-50",100:"bg-teal-100",200:"bg-teal-200",300:"bg-teal-300",400:"bg-teal-400",500:"bg-teal-500",600:"bg-teal-600",700:"bg-teal-700",800:"bg-teal-800",900:"bg-teal-900",950:"bg-teal-950"},
  cyan: {50:"bg-cyan-50",100:"bg-cyan-100",200:"bg-cyan-200",300:"bg-cyan-300",400:"bg-cyan-400",500:"bg-cyan-500",600:"bg-cyan-600",700:"bg-cyan-700",800:"bg-cyan-800",900:"bg-cyan-900",950:"bg-cyan-950"},
  sky: {50:"bg-sky-50",100:"bg-sky-100",200:"bg-sky-200",300:"bg-sky-300",400:"bg-sky-400",500:"bg-sky-500",600:"bg-sky-600",700:"bg-sky-700",800:"bg-sky-800",900:"bg-sky-900",950:"bg-sky-950"},
  blue: {50:"bg-blue-50",100:"bg-blue-100",200:"bg-blue-200",300:"bg-blue-300",400:"bg-blue-400",500:"bg-blue-500",600:"bg-blue-600",700:"bg-blue-700",800:"bg-blue-800",900:"bg-blue-900",950:"bg-blue-950"},
  indigo: {50:"bg-indigo-50",100:"bg-indigo-100",200:"bg-indigo-200",300:"bg-indigo-300",400:"bg-indigo-400",500:"bg-indigo-500",600:"bg-indigo-600",700:"bg-indigo-700",800:"bg-indigo-800",900:"bg-indigo-900",950:"bg-indigo-950"},
  violet: {50:"bg-violet-50",100:"bg-violet-100",200:"bg-violet-200",300:"bg-violet-300",400:"bg-violet-400",500:"bg-violet-500",600:"bg-violet-600",700:"bg-violet-700",800:"bg-violet-800",900:"bg-violet-900",950:"bg-violet-950"},
  purple: {50:"bg-purple-50",100:"bg-purple-100",200:"bg-purple-200",300:"bg-purple-300",400:"bg-purple-400",500:"bg-purple-500",600:"bg-purple-600",700:"bg-purple-700",800:"bg-purple-800",900:"bg-purple-900",950:"bg-purple-950"},
  fuchsia: {50:"bg-fuchsia-50",100:"bg-fuchsia-100",200:"bg-fuchsia-200",300:"bg-fuchsia-300",400:"bg-fuchsia-400",500:"bg-fuchsia-500",600:"bg-fuchsia-600",700:"bg-fuchsia-700",800:"bg-fuchsia-800",900:"bg-fuchsia-900",950:"bg-fuchsia-950"},
  pink: {50:"bg-pink-50",100:"bg-pink-100",200:"bg-pink-200",300:"bg-pink-300",400:"bg-pink-400",500:"bg-pink-500",600:"bg-pink-600",700:"bg-pink-700",800:"bg-pink-800",900:"bg-pink-900",950:"bg-pink-950"},
  rose: {50:"bg-rose-50",100:"bg-rose-100",200:"bg-rose-200",300:"bg-rose-300",400:"bg-rose-400",500:"bg-rose-500",600:"bg-rose-600",700:"bg-rose-700",800:"bg-rose-800",900:"bg-rose-900",950:"bg-rose-950"},
  slate: {50:"bg-slate-50",100:"bg-slate-100",200:"bg-slate-200",300:"bg-slate-300",400:"bg-slate-400",500:"bg-slate-500",600:"bg-slate-600",700:"bg-slate-700",800:"bg-slate-800",900:"bg-slate-900",950:"bg-slate-950"},
  gray: {50:"bg-gray-50",100:"bg-gray-100",200:"bg-gray-200",300:"bg-gray-300",400:"bg-gray-400",500:"bg-gray-500",600:"bg-gray-600",700:"bg-gray-700",800:"bg-gray-800",900:"bg-gray-900",950:"bg-gray-950"},
  zinc: {50:"bg-zinc-50",100:"bg-zinc-100",200:"bg-zinc-200",300:"bg-zinc-300",400:"bg-zinc-400",500:"bg-zinc-500",600:"bg-zinc-600",700:"bg-zinc-700",800:"bg-zinc-800",900:"bg-zinc-900",950:"bg-zinc-950"},
  neutral: {50:"bg-neutral-50",100:"bg-neutral-100",200:"bg-neutral-200",300:"bg-neutral-300",400:"bg-neutral-400",500:"bg-neutral-500",600:"bg-neutral-600",700:"bg-neutral-700",800:"bg-neutral-800",900:"bg-neutral-900",950:"bg-neutral-950"},
  stone: {50:"bg-stone-50",100:"bg-stone-100",200:"bg-stone-200",300:"bg-stone-300",400:"bg-stone-400",500:"bg-stone-500",600:"bg-stone-600",700:"bg-stone-700",800:"bg-stone-800",900:"bg-stone-900",950:"bg-stone-950"},
};

// --- Color normalization helper: any CSS color -> HEX ---
let _ctx: CanvasRenderingContext2D | null = null;
function ensureCtx() {
  if (typeof window === "undefined") return null; // SSR guard
  if (_ctx) return _ctx;
  const c = document.createElement("canvas");
  c.width = c.height = 1;
  _ctx = c.getContext("2d", { willReadFrequently: true });
  return _ctx;
}

function cssColorToHex(input: string) {
  const ctx = ensureCtx();
  if (!ctx) return input; // SSR fallback (won't be called client-side on click)
  ctx.fillStyle = "#000"; // reset
  ctx.fillStyle = input; // browser parses any CSS color here
  const normalized = ctx.fillStyle as string;
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
    const toHex = (v: number) => v.toString(16).padStart(2, "0").toUpperCase();
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  return normalized.toUpperCase();
}

function Toast({ value }: { value: string | null }) {
  if (!value) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900/90 px-4 py-2 text-sm text-white shadow-lg backdrop-blur-sm z-50">
      Copied <span className="font-mono">{value}</span>
    </div>
  );
}

function Tooltip({ text, x, y, show }: { text: string; x: number; y: number; show: boolean }) {
  if (!show) return null;
  return (
    <div
      className="pointer-events-none fixed z-50 -translate-x-56 -translate-y-3 rounded-md bg-neutral-900/95 px-2 py-1 text-xs text-white shadow-md"
      style={{ left: x, top: y }}
    >
      <span className="font-mono">{text}</span>
    </div>
  );
}

function Swatch({ cls, label, hue, shade }: { cls: string; label: string; hue: string; shade: number }) {
  return (
    <button
      type="button"
      data-hue={hue}
      data-shade={shade}
      aria-label={`Copy HEX for ${label}`}
      className={`group h-12 w-12 rounded-xl ring-1 ring-black/5 ${cls} relative focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 border-t border-r border-neutral-50`}
    >
      <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ring-1 ring-black/10" />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default function Palette() {
  const rows = useMemo(() => {
    return HUES.map((hue) => SHADES.map((shade) => ({
      hue,
      shade,
      cls: CLASS_MAP[hue][shade],
      id: `${hue}-${shade}`,
    })));
  }, []);

  const [toastValue, setToastValue] = useState<string | null>(null);

  // Tooltip state
  const [tip, setTip] = useState<{ text: string; x: number; y: number; show: boolean }>({
    text: "",
    x: 0,
    y: 0,
    show: false,
  });

  const gridRef = useRef<HTMLDivElement | null>(null);

  function computeCopy(
    e: { altKey: boolean; metaKey?: boolean; ctrlKey?: boolean; shiftKey: boolean },
    btn: HTMLButtonElement
  ) {
    const hue = btn.dataset.hue!;
    const shade = btn.dataset.shade!;
    const alt = e.altKey;
    const metaOrCtrl = !!(e.metaKey || e.ctrlKey);
    const shift = e.shiftKey;

    if (alt) return `${hue}-${shade}`;
    if (metaOrCtrl) return `text-${hue}-${shade}`;
    if (shift) return `bg-${hue}-${shade}`;

    const colorStr = getComputedStyle(btn as Element).backgroundColor;
    return cssColorToHex(colorStr);
  }

  const handleCopy = (e: React.MouseEvent | React.KeyboardEvent) => {
    // Keyboard gating
    if ("key" in e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
    }
    const target = (e.target as HTMLElement)?.closest(
      "button[data-hue][data-shade]"
    ) as HTMLButtonElement | null;
    if (!target) return;

    const toCopy = computeCopy(e as any, target);

    navigator.clipboard.writeText(toCopy).then(() => {
      setToastValue(toCopy);
      window.setTimeout(() => setToastValue(null), 1200);
    });
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const btn = (e.target as HTMLElement)?.closest(
      "button[data-hue][data-shade]"
    ) as HTMLButtonElement | null;
    if (!btn) {
      if (tip.show) setTip((t) => ({ ...t, show: false }));
      return;
    }
    const text = computeCopy(e, btn);
    setTip({ text, x: e.clientX + 12, y: e.clientY + 12, show: true });
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setTip((t) => ({ ...t, show: false }));
  };

  return (
    <div className="min-h-dvh text-neutral-200 antialiased">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="mb-2 flex flex-col justify-between">
          <div className="hidden md:flex items-center gap-[5px] ml-17 mt-4 text-xs text-neutral-400">
            {SHADES.map((s) => (
              <div key={s} className="grid w-12 justify-items-center">
                {s}
              </div>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
          {rows.map((cells, rowIdx) => (
            <React.Fragment key={HUES[rowIdx]}>
              {/* Hue label */}
              <div className="sticky left-0 z-10 text-sm text-neutral-300 content-center justify-self-end">
                {HUES[rowIdx][0].toUpperCase() + HUES[rowIdx].slice(1)}
              </div>

              {/* Swatches */}
              <div
                ref={gridRef}
                className="grid grid-cols-11 gap-2"
                onClick={handleCopy as any}
                onKeyDown={handleCopy as any}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {cells.map(({ cls, id, hue, shade }) => (
                  <Swatch
                    key={id}
                    cls={cls}
                    label={`${hue} ${shade}`}
                    hue={hue}
                    shade={shade}
                  />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <Tooltip text={tip.text} x={tip.x} y={tip.y} show={tip.show} />
      <Toast value={toastValue} />
    </div>
  );
}
