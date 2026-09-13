# Portfolio 2026

> Modern frontend portfolio focused on software engineering, accessibility, and intentional user experiences.

This project is more than a personal website.

It is an engineering portfolio built to demonstrate not only frontend development skills, but also the principles, architecture, and quality practices behind building modern software.

**Live Demo**  
🔗 https://esthermanriqueglez.github.io/Portfolio_2026/

---

# About

Portfolio 2026 showcases my experience as a Frontend Software Engineer through real-world projects, engineering decisions, and modern development practices.

Rather than focusing only on technologies, this project reflects **how I approach software engineering**—prioritizing accessibility, maintainability, thoughtful architecture, and user-centered design.

Every section has been intentionally designed to communicate not only what I build, but how I think while building it.

---

# Why this project?

Many portfolios focus on visuals.

This one focuses on engineering.

The objective is to demonstrate:

- Production-quality frontend development
- Clean and maintainable architecture
- Accessibility-first thinking
- Performance-conscious development
- Internationalization
- Modern development workflows
- Continuous improvement

---

# Engineering Philosophy

The technologies I use are important.

The engineering principles behind them are even more important.

This project reflects the way I approach software development:

- User-Centered Engineering
- Engineering Craftsmanship
- Continuous Growth
- Thoughtful Problem Solving
- Collaborative Engineering
- Quality by Design

These principles influence every decision throughout the project—from architecture and accessibility to testing and long-term maintainability.

---

# Features

- 🌎 Bilingual experience (English / Spanish)
- 🌙 Light & Dark themes
- ♿ Accessibility-oriented implementation (WCAG 2.1 AA)
- 🎨 Design Tokens and SCSS Modules
- 📱 Fully responsive layout
- ✨ Purposeful animations with Reduced Motion support
- 📂 Curated project showcase
- ⚡ Performance-oriented architecture

---

# Tech Stack

### Frontend

- React
- TypeScript
- Vite
- SCSS Modules

### UI & UX

- Framer Motion
- Lucide Icons

### Quality

- ESLint
- Prettier

### Testing

- Vitest
- React Testing Library

### Tooling

- Git
- GitHub

---

# Quality Standards

This project follows modern frontend engineering practices, including:

- Semantic HTML
- Component-driven architecture
- Responsive Design
- Accessibility (WCAG 2.1 AA)
- Design Tokens
- Internationalization
- Performance optimization
- Maintainable codebase

Testing, linting and delivery are enforced automatically with GitHub Actions on every push and pull request.

---

# Project Structure

```text
.
├── src/
│   ├── app/          # App root + composition
│   ├── assets/       # Static images
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   ├── constants/    # Public types & data contracts
│   ├── context/      # Theme & language providers
│   ├── i18n/         # English / Spanish content
│   └── shared/styles # Global SCSS + design-token abstracts
├── tests/            # Unit tests (Vitest + Testing Library)
├── docs/             # Vision, PRD, design system, ADR
└── .github/workflows # CI + Deploy to GitHub Pages
```

---

# Getting Started

## Prerequisites

- Node.js 24+
- npm

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

---

# Available Scripts

| Script                | Description               |
| --------------------- | ------------------------- |
| npm run dev           | Start development server  |
| npm run build         | Build production bundle   |
| npm run preview       | Preview production build  |
| npm run lint          | Run ESLint                |
| npm run format        | Format code with Prettier |
| npm run format:check  | Verify formatting         |
| npm run test          | Run unit tests            |
| npm run test:watch    | Watch mode                |
| npm run test:coverage | Generate coverage report  |
| npm run img:optimize  | Optimize image assets     |

---

# CI/CD & Deployment

Quality is enforced and delivery is automated with GitHub Actions:

- `CI` — runs on every push and pull request to `main`/`development`: ESLint, unit tests (Vitest + Testing Library) and production build.
- `Deploy to GitHub Pages` — runs on every push to `main`: builds the site and publishes it to GitHub Pages.

The site is currently live at:

https://esthermanriqueglez.github.io/Portfolio_2026/

---

# Accessibility

Accessibility has been considered as a core engineering concern throughout the project.

Highlights include:

- Semantic HTML
- Keyboard navigation
- Focus management
- Screen reader support
- Reduced Motion support
- Accessible naming
- Color contrast improvements
- WCAG 2.1 AA-oriented implementation

---

# Internationalization

The portfolio supports both English and Spanish.

Language preferences are persisted locally, allowing visitors to seamlessly switch between languages while maintaining a consistent experience.

---

# Documentation

Project documentation includes architectural decisions and design references.

```text
docs/
├── decisions/
└── design-system/
```

---

# Roadmap

Current focus:

- ✅ Modern architecture
- ✅ Content strategy
- ✅ Accessibility
- ✅ Internationalization
- ✅ Unit Testing (26 specs, Vitest + Testing Library)
- ✅ CI/CD (GitHub Actions)
- ✅ Deployment (GitHub Pages)
- 🔄 SEO improvements
- 🔄 Performance optimization

---

# About Me

I'm a Frontend Software Engineer passionate about building thoughtful, accessible, and maintainable digital products.

I enjoy solving complex problems through clean architecture, user-centered thinking, and continuous learning.

---

> **Think intentionally. Design with clarity. Build with purpose.**
