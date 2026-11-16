# Portfolio redesign

## Inspection and implementation plan

The original site used Next.js 14 App Router, React 18, TypeScript, Tailwind, Framer Motion, and Formspree. It had one placeholder project, missing résumé and project links, a custom cursor, animation-heavy client components, a forced dark theme, and placeholder-only contact fields. No tests were configured. The existing ESLint configuration used APIs incompatible with the installed ESLint/Next versions.

The implementation keeps Next.js, TypeScript, Tailwind, and the existing Formspree integration. It replaces decorative effects with an editorial layout: soft sand, mocha text, muted green, and a restrained pink accent, system sans-serif and serif typography, fine rules, and generous spacing. Projects precede biography and skills. Workflow illustrations explain actual functionality and are explicitly labeled; they are not product screenshots or live monitoring data.

1. Verify public repositories and personal information.
2. Rebuild navigation, hero, selected work, biography, categorized skills, services, and contact.
3. Add system/light/dark preference, early theme initialization, keyboard focus, a skip link, visible form labels, reduced-motion support, and responsive layouts.
4. Add metadata, a generated sharing image, sitemap, and robots route.
5. Remove unused effects and dependencies, validate, and prepare a review branch and pull request.

## Content evidence

Reviewed the public `tote10` repositories on November 17, 2026: Portfolio, tote10, sador, Repo-Sage, Stock_Management_System, api-monitor-health, CompileML, and Driver-license-school-management-system.

| Project                     | Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                 | Editorial decision                                                                                                                                                                 |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API Health Monitor          | [README](https://github.com/tote10/api-monitor-health/blob/main/README.md), [application](https://github.com/tote10/api-monitor-health/blob/main/backend/api-health-monitor/main.py), endpoint routes in the repository tree                                                                                                                                                                                                             | Lead project: directly demonstrates Python/FastAPI, scheduled HTTP checks, persistence, and operational health endpoints. No production deployment, uptime, or performance claims. |
| Stock & Property Management | [README](https://github.com/tote10/Stock_Management_System/blob/main/README.md), [backend dependencies](https://github.com/tote10/Stock_Management_System/blob/main/sms-backend/package.json), [frontend dependencies](https://github.com/tote10/Stock_Management_System/blob/main/sms-frontend/package.json), [transfer routes](https://github.com/tote10/Stock_Management_System/blob/main/sms-backend/src/routes/transfers.routes.js) | Shows React/Express/PostgreSQL and inventory workflows. Avoids repeating the README's regulatory, enterprise-grade, or tamper-resistance claims.                                   |
| Driving School Management   | [README](https://github.com/tote10/Driver-license-school-management-system/blob/main/README.md), [role dispatcher](https://github.com/tote10/Driver-license-school-management-system/blob/main/dashboard.php), role-specific pages in repository tree                                                                                                                                                                                    | Shows PHP/MySQL and a substantial administrative workflow. No user-count or deployment claims.                                                                                     |
| Repo-Sage                   | [README](https://github.com/tote10/Repo-Sage/blob/main/README.md), [API routes](https://github.com/tote10/Repo-Sage/blob/main/app/api/routes.py)                                                                                                                                                                                                                                                                                         | Separate work-in-progress entry. Implemented index and ask endpoints verified; no answer-accuracy claims.                                                                          |
| sador                       | [README](https://github.com/tote10/sador/blob/main/README.md)                                                                                                                                                                                                                                                                                                                                                                            | Omitted: generic Laravel README provides insufficient context for a meaningful project description.                                                                                |
| CompileML                   | [README](https://github.com/tote10/CompileML/blob/main/README.md)                                                                                                                                                                                                                                                                                                                                                                        | Omitted: upstream links point to orgoca/CompileML; individual contribution not established.                                                                                        |

Name, email, location, and portfolio domain come from the existing site and [public profile README](https://github.com/tote10/tote10/blob/main/README.md). The current professional title, Software Engineer, follows the owner’s latest correction; student and education copy has been removed. Stated technical interests come directly from the owner’s brief. Skills communicate focus areas, not certifications or proficiency scores. Services describe the work offered, not past paid engagements.

## Maintenance

- Project content: `lib/projects.ts`; static rendering, no GitHub token or runtime API requests.
- Themes: CSS variables in `app/globals.css`; `system`, `light`, or `dark` in localStorage. System mode follows OS changes through CSS. Storage failures preserve a usable toggle.
- Most components render on the server. Only navigation/theme and contact need client JavaScript.
- The original 31 KB portrait uses Next Image optimization. Fonts use local system stacks without network font requests.
- Contact retains the original Formspree ID `xreapvkv`. Email is always available. Do not send unsolicited test submissions; successful third-party delivery requires a controlled owner-approved live submission.
- Canonical URL is the public profile's `https://moti-alemu.vercel.app`; update layout, robots, and sitemap if the domain changes.
- Run `npm ci`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`. No test script was present.

## Visual review criteria

No gradients, neon, glass panels, custom cursor, decorative counters, skills badges, reveal animations, fake dashboards, unsupported achievements, placeholder links, or résumé download without a résumé asset. Native controls, visible focus, restrained hover color changes, and readable content take priority.

## Validation results

- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; home page prerendered, 98.2 KB first-load JavaScript as reported by Next.js.
- `git diff --check`: passed.
- Production-preview browser checks with temporary Playwright tooling: no horizontal overflow at 320, 375, 768, 1024, or 1440 px; portrait loads; internal anchors resolve; keyboard skip link works; stored theme survives reload; system theme follows OS changes; reduced-motion disables smooth scrolling; required-field validation works; intercepted Formspree error and success responses render correctly; no browser exceptions.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and `/icon.svg`: HTTP 200 in the production preview.
- Axe WCAG 2 A/AA and 2.1 AA scan: zero violations at 375 and 1440 px in both light and dark modes. Automated checks do not replace assistive-technology testing.
- Reviewed full-page desktop light/dark and mobile screenshots, included in `docs/previews/`.
- Repository destinations were verified through the connected GitHub API. No fake live-demo or missing résumé links remain.

## Remaining limitations

The existing Next.js 14.1.0 version is retained to keep this redesign on the existing framework version. The installer flags it as vulnerable; a framework security upgrade remains necessary before production rollout. See the [Next.js security notice](https://nextjs.org/blog/security-update-2025-12-11) and [current support policy](https://nextjs.org/support-policy). This redesign does not claim to remediate inherited dependency vulnerabilities.

The existing Formspree endpoint is retained, but its account configuration and end-to-end email delivery have not been verified. Browser tests intercept requests and send no real messages. The verified email link provides a direct alternative.

## Latest owner revision

Present Moti as a Software Engineer across the hero, biography, SEO metadata, and sharing image. Remove student and education positioning. Use soft sand (`#f2e9dc`), mocha (`#493a31`), and muted green (`#435a45`), with pink (`#ab4f70`) limited to the wordmark dot. Retain corresponding dark theme colors. Remove the grayscale portrait filter so a replacement photo can retain its natural colors. The new portrait is pending an image from the owner; the existing photo remains in place.
