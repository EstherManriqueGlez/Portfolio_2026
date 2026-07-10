# ADR-001: Frontend Technology Stack

- **Status:** Accepted
- **Date:** 2026-07-09
- **Decision Owners:** Portfolio_2026 Engineering Team

---

## Context

Portfolio_2026 requires a modern frontend foundation that supports maintainability, scalability, performance, and a high-quality developer experience.

The technology stack should allow the project to evolve while keeping the architecture simple and aligned with current professional frontend development practices.

---

## Decision

We will use the following frontend technology stack:

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Compiler:** SWC
- **Styling Approach:** SCSS Modules
- **Routing:** React Router

Development tooling:

- ESLint
- Prettier
- Husky
- lint-staged

---

## Alternatives Considered

### Next.js

Not selected for the initial version because the project does not currently require server-side rendering, backend capabilities, or a full-stack framework.

### Plain JavaScript

Not selected because TypeScript provides stronger type safety, better maintainability, and improved developer experience.

### CSS-in-JS Solutions

Not selected because SCSS Modules provide local scoping, predictable output, and simplicity for this project.

---

## Consequences

### Positive

- Strong type safety.
- Fast development environment.
- Clear project structure.
- Good maintainability.
- Easy future evolution.

### Negative

- Additional tooling configuration is required.
- Developers need familiarity with TypeScript and the selected ecosystem.

---

## Notes

This decision can be revisited if project requirements change significantly.