# Alexandra Andrusyshyn — Portfolio

Personal portfolio site built to showcase pet projects: a cosmetics
e-commerce store (web + iOS) and an admin panel for it. Built as a
single-page, step-by-step scroll experience with animated sections and
screenshot carousels for each project.

**Live:** hero intro → project showcases → tech stack → contact.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Motion](https://motion.dev) for scroll-triggered reveals
- [Embla Carousel](https://www.embla-carousel.com) for the project screenshot galleries

## Project structure

- `src/data/` — all editable content: projects, tech stack, contact links
- `src/sections/` — the four page sections (Hero, Projects, Stack, Contact)
- `src/components/` — shared building blocks (carousel, tabs, reveal animation, progress nav)
- `public/screens/` — project screenshots, grouped by project

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # run oxlint
```
