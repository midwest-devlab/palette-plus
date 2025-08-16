# Palette+ (Midwest DevLab)

A fast, accessible **Tailwind CSS color palette** you can pop open anywhere — with smart modifier-copy:

- Click → copy `#RRGGBB`
- Shift + Click → copy `bg-hue-shade`
- Ctrl/⌘ + Click → copy `text-hue-shade`
- Alt + Click → copy `hue-shade`

> Planned shells: **Browser Extension (MV3)** and **VS Code Extension**, both sharing the same UI component.

---

## Status
Early development. Watch the repo or star it to follow along!

## Roadmap
- [ ] Shared UI package (`packages/ui`) from the existing Next.js component
- [ ] **Browser extension** app (popup + side panel)
- [ ] **VS Code** webview extension
- [ ] Search/filter (type “blue 5” → focus `blue-500`)
- [ ] Settings: default copy mode, OKLCH/HEX toggle
- [ ] “Recent copies” strip
- [ ] Docs site (optional)

---

## Local Dev (soon)
We’ll use a simple **pnpm workspaces** monorepo:

palette-plus/
packages/
ui/ # React component(s)
apps/
browser-ext/ # MV3
vscode-ext/ # Webview


Setup scripts and instructions will land here when the scaffold is pushed.

---

## Contributing
Issues and PRs welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License
[MIT](LICENSE) © Midwest DevLab
