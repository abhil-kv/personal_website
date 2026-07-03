# Abhil Vidhyadharan — Portfolio

A React + TypeScript + Tailwind CSS + Framer Motion portfolio site, built from a
"3D Creator" landing-page brief and re-themed around Abhil's resume and cover
letter (Software Engineer — React.js, Next.js, Node.js, Micro Frontend Architecture).

## Sections
- **Hero** — name, role tagline, and an orbiting "micro frontend" signature graphic in place of a portrait photo
- **Marquee** — two scroll-driven rows of tech-stack chips (React, Next.js, TypeScript, Docker, Kubernetes, Kafka, etc.)
- **About** — animated, character-reveal professional summary
- **Skills** — five focus areas (Frontend, Micro Frontends, Backend & APIs, Cloud & DevOps, Testing)
- **Experience** — sticky, stacking cards for IBM, Wissen Technology, and KeyValue Software Systems
- **Contact** — email, phone, location, and education

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
npm run preview
```

## Customize
- Colors, gradients, and fonts live in `src/index.css` and `tailwind.config.js`.
- Copy for each section lives directly in the section components under `src/sections`.
- Replace the `mailto:` link and phone/email in `src/sections/ContactSection.tsx` if these change.
- To add a real headshot, swap `src/components/OrbitCore.tsx` for an `<img>`-based component.
