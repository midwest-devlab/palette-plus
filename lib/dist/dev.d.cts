import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default from 'react';
export { Logo } from './index.cjs';

declare function PalettePlusProvider({ children, hotkey, }: {
    children: React__default.ReactNode;
    hotkey?: string;
}): react_jsx_runtime.JSX.Element;

declare function PalettePanel({ children, title, }: {
    children: React.ReactNode;
    title?: string;
}): react_jsx_runtime.JSX.Element;

declare function PanelContent({ children }: {
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

declare function PaletteToggleButton(): react_jsx_runtime.JSX.Element;

declare function Palette(): react_jsx_runtime.JSX.Element;

export { Palette, PalettePanel, PalettePlusProvider, PaletteToggleButton, PanelContent };
