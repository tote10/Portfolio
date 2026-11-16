# Moti Alemu — Portfolio

A project-led software engineering portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

No test script is configured. See [redesign notes](docs/REDESIGN.md) for repository evidence, content decisions, validation results, and maintenance guidance.

## Preview

[Desktop](docs/previews/desktop-light.png) · [Mobile](docs/previews/mobile-light.png)

## Editing

- `lib/projects.ts`: selected projects and verified repository links.
- `components/`: reusable page sections. Contact is the only client component.
- `app/globals.css`: responsive layout, typography, and palette variables.
- `app/layout.tsx`: metadata and canonical domain.
- `app/opengraph-image.tsx`: generated social sharing image.

The contact form retains the existing Formspree form ID. Browser validation uses intercepted responses; actual third-party delivery has not been tested with a live submission.
