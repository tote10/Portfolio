# Redesign portfolio around verified software projects

Replace the placeholder construction project and animation-heavy presentation with an editorial portfolio centered on real software: API Health Monitor, Stock & Property Management, Driving School Management, and an explicitly ongoing Repo-Sage entry.

The design uses warm paper and ink, a rust accent, system typography, clear project workflows, and responsive layouts. It adds education, categorized technical focus, practical services, and an accessible contact form while preserving the existing Formspree integration. System/light/dark themes persist, and metadata includes a generated sharing image, sitemap, robots route, and custom icon. Six unused UI/animation dependencies and their components are removed.

## Review

- [Content evidence and design decisions](REDESIGN.md)
- [Desktop light preview](previews/desktop-light.png)
- [Desktop dark preview](previews/desktop-dark.png)
- [Mobile preview](previews/mobile-light.png)

## Validation

- Lint, TypeScript, production build, and diff whitespace checks pass.
- Production browser checks pass at 320, 375, 768, 1024, and 1440 px.
- Theme persistence, OS preference changes, reduced motion, keyboard skip link, internal anchors, image loading, and metadata routes pass.
- Form success and error behavior tested with intercepted Formspree responses; no messages were sent.
- Axe WCAG 2 A/AA and 2.1 AA: zero violations at mobile and desktop widths in both themes.
- Home page prerendered; Next.js reports 98.2 KB first-load JavaScript.

## Before deployment

The inherited Next.js 14.1.0 dependency has a known security notice and requires a framework security upgrade. This redesign preserves that version and does not remediate it. The existing Formspree account configuration and live email delivery still need an owner-controlled check. The direct email address is linked and available.

## Publishing status

Local branch: `feature/editorial-portfolio`. Target: `main`.

Publishing was attempted, but command-line Git has no HTTPS credentials and the connected GitHub integration returns `403 Resource not accessible by integration` for blob and branch creation. No remote branch or PR was created; `main` was not modified.

Once repository write access is available:

```sh
git push -u origin feature/editorial-portfolio
```

Open a draft PR from `feature/editorial-portfolio` into `main` with the title and description above, keeping the pre-deployment requirements visible.
