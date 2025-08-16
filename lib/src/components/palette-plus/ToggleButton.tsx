"use client";
import { usePalettePlus } from "./Provider";

export default function PaletteToggleButton() {
    const { isOpen, toggle } = usePalettePlus();
    return (
        <button
            onClick={toggle}
            className="fixed bottom-4 right-4 z-[10000] rounded-full border border-2 border-neutral-950 px-3 py-2 bg-white/30 hover:bg-white/80 backdrop-blur drop-shadow-lg drop-shadow-black/100"
            aria-pressed={isOpen}
            aria-label="Toggle Palette+"
            title="Toggle Palette+ (Meta+F12)"
        >
            <span className="text-2xl drop-shadow-lg drop-shadow-black/100">🎨</span>
        </button>
    );
}
