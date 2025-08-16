"use client";
import * as React from "react";
import { usePalettePlus } from "./Provider";
import { PANEL_WIDTH_PX } from "./Panel";

export default function PanelContent({ children }: { children: React.ReactNode }) {
  const { isOpen } = usePalettePlus();
  return (
    <div
      className={[
        "transition-[margin] duration-200 ease-in-out",
        isOpen ? "" : "",
      ].join(" ")}
      style={{ marginRight: isOpen ? PANEL_WIDTH_PX : 0 }}
    >
      {children}
    </div>
  );
}
