# Design Tokens

Source of truth for visual decisions. Implemented as CSS custom properties in `src/shared/styles/abstracts/_themes.scss` (themes) and `_variables.scss` (spacing, motion, breakpoints). Components consume tokens, never raw values.

## Colors (themes)

Dark is the default (`:root, [data-theme='dark']`); `[data-theme='light']` overrides. Both define the same token names.

| Token                  | Dark                                              | Light                                             |
| ---------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `--bg-primary`         | `#030014`                                         | `#faf8fc`                                         |
| `--bg-secondary`       | `#0a081a`                                         | `#ffffff`                                         |
| `--text-main`          | `#f8fafc`                                         | `#120f26`                                         |
| `--text-muted`         | `#94a3b8`                                         | `#5c5770`                                         |
| `--border-color`       | `rgba(255,255,255,.08)`                           | `rgba(18,15,38,.08)`                              |
| `--shadow-color`       | `rgba(0,0,0,.6)`                                  | `rgba(18,15,38,.06)`                              |
| `--color-accent`       | `#00f5ff`                                         | `#3de1f2`                                         |
| `--color-primary-grad` | `linear-gradient(135deg,#ff007f,#9d4edd,#00f5ff)` | `linear-gradient(135deg,#ff7da1,#9c76ff,#3de1f2)` |
| `--color-text-grad`    | `linear-gradient(90deg,#fff,#f1f5f9,#00f5ff)`     | `linear-gradient(90deg,#120f26,#38305c,#9c76ff)`  |

Glass / wave:

| Token              | Dark                    | Light                   |
| ------------------ | ----------------------- | ----------------------- |
| `--glass-bg`       | `rgba(10,8,30,.45)`     | `rgba(255,255,255,.65)` |
| `--glass-border`   | `rgba(255,255,255,.07)` | `rgba(156,118,255,.15)` |
| `--glass-blur`     | `16px`                  | `12px`                  |
| `--wave-primary`   | `#9d4edd`               | `#9c76ff`               |
| `--wave-secondary` | `#00f5ff`               | `#3de1f2`               |
| `--glow-intensity` | `0.15`                  | `0.05`                  |

## Typography tokens

| Token            | Value                                           |
| ---------------- | ----------------------------------------------- |
| `--font-display` | `'Bellota Text', Georgia, serif`                |
| `--font-sans`    | `'Inter', system-ui, -apple-system, sans-serif` |
| `--font-mono`    | `'JetBrains Mono', 'Fira Code', monospace`      |

## Spacing (rem, base 1rem = 16px)

`xs` 0.25 · `sm` 0.5 · `md` 1 · `lg` 1.5 · `xl` 2 · `xxl` 3 · `xxxl` 4

## Motion

`fast` 0.2s · `normal` 0.35s · `slow` 0.5s, all `cubic-bezier(0.4, 0, 0.2, 1)`.

## Breakpoints

`sm` 480 · `md` 768 · `lg` 1024 · `xl` 1440 · `xxl` 1920 (px). Mixed with `@include respond-to()` come from `_mixins.scss` (`glass-effect`, `text-gradient`).

## Principles

- Use tokens, never raw values, in components.
- Make changes at the token level.
- Respect `prefers-reduced-motion` (handled in `CanvasWave`).
