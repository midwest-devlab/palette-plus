@midwestdevlab/palette-plus

🎨 Palette+ — a side panel for managing and previewing color palettes inside your React/Next.js app.
Toggle the panel with a hotkey (default Meta+F12) or button, explore palettes, and integrate theme tokens into your design system.

🚀 Install

```bash

pnpm add -D @midwestdevlab/palette-plus
# or
npm install -D @midwestdevlab/palette-plus

```

Peer dependencies:

 - react >= 18

 - react-dom >= 18

---

✨ Features

 - Slide-in palette panel — opens with a hotkey or button.

 - Provider pattern — simple setup, works at the root of your app.

 - Keyboard toggle — customizable global hotkey (e.g., Meta+F12).

 - Composable API — bring your own content/components.

 - Theme tokens — map palettes to CSS variables for Tailwind/CSS usage.

---

⚡ Quickstart
```tsx

import {
  PalettePlusProvider,
  PalettePanel,
  PanelContent,
  PaletteToggleButton,
  Palette
} from "@midwestdevlab/palette-plus";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <PalettePlusProvider hotkey="Meta+F12">
      <PanelContent>{children}</PanelContent>
      <PalettePanel title="Palette+">
        <Palette />
      </PalettePanel>
      <PaletteToggleButton />
    </PalettePlusProvider>
  );
}
```
➡️ Now run your app, press Meta+F12 (or click the toggle button), and the Palette+ side panel slides in.

---

🖥️ Usage

Add Palette+ to your root layout (Next.js shown, but works in any React app):
```tsx

import type { Metadata } from "next";
import {
  PalettePlusProvider,
  PalettePanel,
  PanelContent,
  PaletteToggleButton,
  Palette
} from "@midwestdevlab/palette-plus";

export const metadata: Metadata = {
  title: "Palette+ Demo",
  description: "Toggle Palette+ side panel — (Meta+F12)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PalettePlusProvider hotkey="Meta+F12">
          {/* main content shifts when the panel opens */}
          <PanelContent>{children}</PanelContent>

          {/* slide-in panel that holds your palette UI */}
          <PalettePanel title="Palette+">
            <Palette />
          </PalettePanel>

          {/* floating toggle button */}
          <PaletteToggleButton />
        </PalettePlusProvider>
      </body>
    </html>
  );
}

```

---

 - Dev only:
    ```ts

    if (process.env.NODE_ENV === "development") {
      const Dev = await import("@midwestdevlab/palette-plus/dev");
      // use Dev.*
    }
```

 - Forced no-op (e.g., SSR constraints):
    ```ts

    import * as PP from "@midwestdevlab/palette-plus/prod"; // stubs
```

---

⚙️ Components
<PalettePlusProvider>

Wraps your app. Provides context for Palette+.

Props:

 - hotkey?: string — global keybinding to toggle panel (e.g. "Meta+F12").

---

<PanelContent>

Wrap your main content in this.
It shifts when the panel slides in.

---

<PalettePanel>

The actual slide-in panel.

Props:

 - title?: string — panel header text.

---

<PaletteToggleButton>

A floating button to open/close the panel.

---

<Palette>

Sample palette viewer.
Displays the currently loaded palette and tokens.

---

📦 API Surface

Everything exported from the package:
```ts

import {
  PalettePlusProvider,
  PalettePanel,
  PanelContent,
  PaletteToggleButton,
  Palette,
  Logo
} from "@midwestdevlab/palette-plus";
```

---

🛠️ Local Testing

Before publishing, you can test by packing a tarball:
```bash

cd lib
npm pack --dry-run   # see files that would be published
npm pack             # creates .tgz
pnpm add ../lib/midwestdevlab-palette-plus-0.1.0.tgz
```

---

📜 License

MIT © Midwest DevLab