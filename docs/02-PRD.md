# Product Requirements

## Audiences

- **Recruiters**: quick understanding of profile, expertise, and fit.
- **Engineering Managers**: evidence of architecture, ownership, and engineering maturity.
- **Frontend Engineers**: implementation quality — accessibility, performance, component architecture.

## Scope

Single-page React app with anchor-scroll navigation:

- Hero, About, Experience, Projects, Skills, Contact
- Dark/light theme (default dark), `data-theme` on `<html>`

All content lives in `src/constants/data.ts` — edit data there, never in components.

## Success Criteria

A visitor can answer in ~90s: Who is this engineer? What do they do? Why are they different? Would I interview them?

## Non-Goals

- No router, no backend, no tests, no multi-page, no CMS.
- No decorative motion; animation must support communication.
