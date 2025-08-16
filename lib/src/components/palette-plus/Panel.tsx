"use client";
import * as React from "react";
import { usePalettePlus } from "./Provider";
import { Logo } from "../../assets/Logo";

const PANEL_W = 720; // px

export default function PalettePanel({
  children,
  title = "Palette+",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const { isOpen, setOpen } = usePalettePlus();

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <>
      {/* Backdrop (click to close) */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-[9998] bg-black/30 transition-opacity",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label={title}
        aria-modal="true"
        className={[
          "bg-neutral-950 fixed top-0 right-0 z-[9999] h-dvh border-l",
          "shadow-xl transition-transform ease-in-out",
          "w-[360px] max-w-[90vw]",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        style={{ width: PANEL_W }}
      >
        <div className="flex items-center justify-between gap-2 border-b px-3 py-2">
          <Logo
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <h2 className="text-sm font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-neutral-400">
                Click to copy. Hold <kbd className="px-1 rounded bg-neutral-800">Shift</kbd> for
                <span className="font-mono"> bg-*</span>, <kbd className="px-1 rounded bg-neutral-800">Ctrl/⌘</kbd> for
                <span className="font-mono"> text-*</span>, <kbd className="px-1 rounded bg-neutral-800">Alt</kbd> for
                <span className="font-mono"> hue-shade</span>.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="rounded-md border px-2 py-1 text-sm"
          >
            Close
          </button>
        </div>

        <div className="fixed grid grid-cols-11 gap-8.25 text-xs text-neutral-400 text-center pl-29 pr-13 py-4 bg-neutral-950 z-20">
            <p>50</p>
            <p>100</p>
            <p>200</p>
            <p>300</p>
            <p>400</p>
            <p>500</p>
            <p>600</p>
            <p>700</p>
            <p>800</p>
            <p>900</p>
            <p>950</p>
        </div>

        <div className="h-[calc(100dvh-40px)] overflow-auto p-3">{children}</div>
      </aside>
    </>
  );
}

/** Expose the width so other components can keep in sync */
export const PANEL_WIDTH_PX = PANEL_W;
