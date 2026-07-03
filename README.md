# Haroon Mukhtar — Personal Portfolio

Personal portfolio website for **Haroon Mukhtar**, Senior Full Stack Engineer / AI Engineer based in Islamabad, Pakistan.

A dark, modern, single-page portfolio showcasing full stack product engineering, AI agents & RAG systems, cloud infrastructure work, featured project case studies, and professional experience.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- No client-side animation libraries — scroll reveals and micro-interactions are built with CSS and `IntersectionObserver`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Structure

- `app/` — root layout (metadata, fonts, theme) and the single page composing all sections
- `components/` — one component per section: Hero, ImpactStrip, About, Expertise, Projects, Experience, AIEngineering, Skills, Education, Contact
- `public/Haroon-Mukhtar-Resume.pdf` — downloadable resume linked from the hero and contact CTAs

## Updating Content

All copy lives directly in the section components (project case studies in `components/Projects.tsx`, roles in `components/Experience.tsx`, etc.). Contact email and LinkedIn URL are constants at the top of `components/Contact.tsx`.
