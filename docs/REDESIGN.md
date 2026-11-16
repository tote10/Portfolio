# Portfolio redesign

## Inspection and implementation plan

The original site used Next.js 14 App Router, React 18, TypeScript, Tailwind, Framer Motion, and Formspree. It had one placeholder project, missing résumé and project links, a custom cursor, animation-heavy client components, a forced dark theme, and placeholder-only contact fields. No tests were configured. The existing ESLint configuration used APIs incompatible with the installed ESLint/Next versions.

The implementation keeps Next.js, TypeScript, Tailwind, and the existing Formspree integration. The visual design is rebuilt around a personal, portrait-led composition rather than the previous typographic slogan and repeated project rows.

## Design system and layout

- Exactly three interface colors: soft sand `#F0E5DB` for backgrounds; mocha green `#474329` for text, controls, focus outlines, and rules; watermelon pink `#FC75B4` for one small decorative marker beside the availability link. No additional shades, faded colors, gradients, or colored section backgrounds.
- A single fixed palette replaces the theme selector and theme initialization. It preserves the exact colors regardless of the OS preference or a previously stored theme.
- The portrait is a smaller, plain rectangular image. The arched crop, thick frame, oversized treatment, and tilted availability tag are removed. The original photo stays until the owner supplies its replacement; no substitute likeness is invented.
- The hero introduces Moti as a Software Engineer. Serif name and headings pair with a system sans-serif body. Primary controls use sand backgrounds and green outlines.
- Project hierarchy comes from layout, typography, spacing, and rules. API Health Monitor has a labeled architecture overview; supporting projects sit side by side on desktop. No fake live dashboard or repeated decorative cards.
- Biography, a definition-list skills index, services, and contact keep their distinct layouts. Section backgrounds all use the same sand.
- Visible focus, semantic HTML, reduced-motion support, optimized imagery, and the existing contact functionality remain available.
- The sharing image and favicon use the same exact sand and mocha-green values.

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
- Palette: the three literal color values live in `app/globals.css`; all other interface color variables reference sand or mocha green. No theme state or localStorage is used.
- All page sections and navigation render on the server; only contact needs client JavaScript.
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
- Production-preview browser checks with temporary Playwright tooling: no horizontal overflow at 320, 375, 768, 1024, or 1440 px; portrait loads; internal anchors resolve; keyboard skip link works; exact sand background and mocha-green text remain the same under light and dark OS preferences; reduced-motion disables smooth scrolling; required-field validation works; intercepted Formspree error and success responses render correctly; no browser exceptions.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, and `/icon.svg`: HTTP 200 in the production preview.
- Axe WCAG 2 A/AA and 2.1 AA scan: zero violations at 375 and 1440 px with both light and dark OS preferences. Automated checks do not replace assistive-technology testing.
- Reviewed full-page desktop and mobile screenshots, included in `docs/previews/`.
- Repository destinations were verified through the connected GitHub API. No fake live-demo or missing résumé links remain.

## Remaining limitations

The existing Next.js 14.1.0 version is retained to keep this redesign on the existing framework version. The installer flags it as vulnerable; a framework security upgrade remains necessary before production rollout. See the [Next.js security notice](https://nextjs.org/blog/security-update-2025-12-11) and [current support policy](https://nextjs.org/support-policy). This redesign does not claim to remediate inherited dependency vulnerabilities.

The existing Formspree endpoint is retained, but its account configuration and end-to-end email delivery have not been verified. Browser tests intercept requests and send no real messages. The verified email link provides a direct alternative.

## Portrait and professional identity

Moti is presented as a Software Engineer across the hero, biography, metadata, and sharing image. Student and education positioning is removed. The original portrait is displayed in the hero with its natural image colors; a replacement photo is still pending an image from the owner.
