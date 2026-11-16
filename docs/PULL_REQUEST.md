# Redesign portfolio around verified software projects

Replace the placeholder construction project and animation-heavy presentation with an editorial portfolio centered on real software: API Health Monitor, Stock & Property Management, Driving School Management, and an explicitly ongoing Repo-Sage entry.

The site uses exactly soft sand `#F0E5DB` for backgrounds and mocha green `#474329` for lettering, controls, and rules. Watermelon pink `#FC75B4` appears once as a small availability marker. Extra section colors and theme variants are removed. A smaller rectangular portrait replaces the arched frame; the replacement photo remains pending an image from the owner.

The page combines a serif name, clear project hierarchy, a skills index, services, and an accessible contact form. Verified descriptions, keyboard navigation, reduced-motion support, and the existing Formspree integration are preserved. The favicon and sharing image use the same exact palette. Six unused UI/animation dependencies and their components are removed.

## Review

- [Content evidence and design decisions](REDESIGN.md)
- [Desktop preview](previews/desktop-light.png)
- [Mobile preview](previews/mobile-light.png)

## Validation

- Lint, TypeScript, production build, and diff whitespace checks pass.
- Production browser checks pass at 320, 375, 768, 1024, and 1440 px.
- Exact palette under both OS preferences, rectangular image treatment, reduced motion, keyboard skip link, internal anchors, image loading, and metadata routes pass.
- Form success and error behavior tested with intercepted Formspree responses; no messages were sent.
- Axe WCAG 2 A/AA and 2.1 AA: zero violations at mobile and desktop widths under both OS preferences.
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
