"use client";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Ctx = {
    isOpen: boolean;
    setOpen: (v: boolean) => void;
    toggle: () => void;
};

const PalettePlusCtx = createContext<Ctx | null>(null);

function normalizeHotkey(e: KeyboardEvent) {
    const parts: string[] = [];
    if (e.metaKey) parts.push("Meta");
    if (e.ctrlKey) parts.push("Ctrl");
    if (e.shiftKey) parts.push("Shift");
    if (e.altKey) parts.push("Alt");
    // Use the raw key for function keys; uppercase letters for alpha
    const k = /^[a-z]$/i.test(e.key) ? e.key.toUpperCase() : e.key;
    parts.push(k);
    return parts.join("+");
}

export function PalettePlusProvider({
    children,
    hotkey = "Meta+F12", // NOTE: F12 can conflict with DevTools in some browsers. Change if needed.
}: {
    children: React.ReactNode;
    hotkey?: string;
}) {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            const combo = normalizeHotkey(e);
            if (combo.toLowerCase() === hotkey.toLowerCase()) {
                e.preventDefault();
                setOpen(v => !v);
            }
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [hotkey]);

    const value = useMemo<Ctx>(() => ({
        isOpen,
        setOpen,
        toggle: () => setOpen(v => !v),
    }), [isOpen]);

    return <PalettePlusCtx.Provider value={value}>{children}</PalettePlusCtx.Provider>;
}

export function usePalettePlus() {
    const ctx = useContext(PalettePlusCtx);
    if (!ctx) throw new Error("usePalettePlus must be used within <PalettePlusProvider>");
    return ctx;
}
