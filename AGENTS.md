# AGENTS.md

React 19 + TS + Vite (SWC) single-page portfolio. No backend, router, or tests.

## Purpose

Portfolio of **Esther Manrique González (Frontend Software Engineer)**. It is the first project evaluated — every detail must communicate engineering excellence. Value must land within ~90s for recruiters, engineering managers, and frontend engineers. Design principles: elegance, authenticity, clarity, engineering-first, purposeful motion, timelessness. North star: an intentional, elegant, authentic experience engineered like production software (`docs/03-DESIGN-STRATEGY.md`).

## Commands

- `npm run dev` / `preview` — dev/preview server
- `npm run build` — `tsc -b && vite build`; type errors fail
- `npm run lint` / `format:check` — ESLint / Prettier
- Verify: `npm run lint` then `npm run build` (no tests). Pre-commit runs lint-staged automatically.

## Architecture

- Entry `src/main.tsx` → `src/app/App.tsx`; sections composed there, each in `<ErrorBoundary>`.
- Alias `@/*` → `src/*` (vite.config.ts + tsconfig.app.json). Always import via `@/`, never relative.
- Anchor-scroll nav (`#about`, `#experience`, …) + content live in `src/constants/data.ts`. React Router NOT installed (see `docs/decisions/ADR-001-frontend-stack.md`). Edit data there, not in components.

## Styling (SCSS Modules)

- Co-located `Foo.module.scss` → `import styles from './Foo.module.scss'` → `styles.foo`.
- Global styles in `src/shared/styles/`: `globals.scss` imports `abstracts/` (variables, themes, mixins) + `base/` (reset, globals).
- Use design-token CSS vars (`--bg-primary`, `--text-main`, `--color-primary-grad`, `--font-sans`, …) from `abstracts/_themes.scss`/`_variables.scss` — no hard-coded colors/fonts.
- Theme: `data-theme` on `<html>` via `ThemeProvider` (`src/context/ThemeProvider.tsx`; localStorage `theme`, default dark).
- Source of truth: `docs/design-system/design-tokens.md` (real CSS tokens) + `docs/design-system/typography.md`.

## TS/format (enforced)

- `verbatimModuleSyntax` + `erasableSyntaxOnly` → `import type {...}`; no enums, namespaces, or parameter properties.
- `noUnusedLocals`/`noUnusedParameters` — unused vars fail build.
- Prettier: single quotes, trailing commas, semicolons, 100 col.
- Named `export const X = () => ...`; component files export components only (`react-refresh/only-export-components`).

## Docs

- `docs/` holds `01-VISION` (purpose), `02-PRD` (scope), `03-DESIGN-STRATEGY` (principles, north star), `04-BRAND-SYSTEM`, `design-system/` (2 files: `design-tokens.md` + `typography.md`). Read before visual/architecture changes.
