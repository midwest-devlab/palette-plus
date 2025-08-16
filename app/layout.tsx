import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PalettePlusProvider } from "../lib/src/components/palette-plus/Provider";
import PalettePanel from "../lib/src/components/palette-plus/Panel";
import PanelContent from "../lib/src/components/palette-plus/PanelContent";
import Palette from "../lib/src/components/Palette";
import PaletteToggleButton from "../lib/src/components/palette-plus/ToggleButton";

const isDev = process.env.NODE_ENV === "development";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Palette+",
  description: "Toggle Palette+ side panel — (Meta+F12)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If not in development mode, return a simple HTML structure without the Palette+ UI
  if (!isDev) return <html lang="en"><body>{children}</body></html>;

  const Dev = await import("@midwestdevlab/palette-plus/dev");
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body>
        <Dev.PalettePlusProvider hotkey="Meta+F12">
          {/* main content that shifts when the panel opens */}
          <Dev.PanelContent>{children}</Dev.PanelContent>

          {/* the slide-in panel that holds your palette UI */}
          <Dev.PalettePanel title="Palette+">
            <Dev.Palette />
          </Dev.PalettePanel>
          <Dev.PaletteToggleButton />
        </Dev.PalettePlusProvider>
      </body>
    </html>
  );
}
