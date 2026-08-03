# ADR-001: Frontend Technology Stack

- **Status:** Accepted
- **Date:** 2026-07-09

## Context

A single-page portfolio with no backend. Needs a modern, maintainable foundation with a smooth developer experience and strong type safety.

## Decision

- **Framework:** React 19
- **Language:** TypeScript (strict, `verbatimModuleSyntax`, `erasableSyntaxOnly`)
- **Build tool:** Vite 8 + SWC (`@vitejs/plugin-react-swc`)
- **Styling:** SCSS Modules with CSS custom-property design tokens
- **Routing:** none — the site is a single page with anchor-scroll navigation
- **Animation:** framer-motion
- **Icons:** lucide-react, react-icons

Development tooling:

- ESLint (typescript-eslint, react-refresh), Prettier, Sass
- Husky + lint-staged (pre-commit: eslint --fix + prettier)

## Alternatives Considered

- **Next.js**: not needed — no SSR, backend, or full-stack requirements.
- **Plain JavaScript**: rejected for type safety and maintainability.
- **CSS-in-JS**: rejected in favor of SCSS Modules for local scoping and predictable output.

## Consequences

- Strong type safety and fast dev environment.
- Requires familiarity with TS and the Vite/tooling ecosystem.
- No router is a deliberate non-goal; navigation stays as anchor scrolling.
