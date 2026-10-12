# Raj Kumar Timalsina — Portfolio Project Rules

## Product goal
Redesign `rajkumartimalsina.me` as a clean, modern, minimal-text personal developer portfolio. It should communicate who I am, what I build, and where visitors can see the work—quickly.

## Design direction
- Favor a refined, typography-led, editorial layout with clear hierarchy and generous but purposeful whitespace.
- Keep copy concise. Use short headlines, short project summaries, and scannable labels rather than long paragraphs.
- Make real projects and real app screenshots the visual focus. Do not default to generic phone mockup collages.
- Use a restrained, coherent color palette and consistent spacing, type scale, borders, radii, and container widths.
- Make the result feel custom-designed, polished, and credible—not like a generic template or AI-generated landing page.
- Use subtle visual details only when they improve clarity or hierarchy.
- Avoid excessive gradients, glowing effects, glassmorphism, oversized decorative blobs, needless cards, and ornamental UI.
- Avoid unnecessary animation. Prefer static layouts; use only subtle, purposeful transitions when they improve feedback.
- Respect `prefers-reduced-motion`; do not make core content dependent on animation.

## Content and personal branding
- Keep the site focused on the developer's identity, skills, selected projects, experience where relevant, and contact links.
- Prioritize: clear hero, selected work, concise about/skills content, and contact/social links.
- Avoid long introductions, repeated claims, inflated marketing language, generic slogans, fake metrics, invented testimonials, and filler sections.
- Preserve accurate personal details and project facts from the existing site/repository. Never invent users, downloads, ratings, revenue, clients, employment, or project capabilities.
- Use concise action-oriented links such as “View project”, “Source code”, or “Contact”.
- Keep important information visible without forcing users through excessive scrolling.
- Do not remove useful existing content, routes, SEO metadata, or accessibility features without checking impact first.

## Project showcase and imagery
- Inspect existing project assets and identify the strongest real screenshots before changing the showcase.
- Preserve screenshot content and recognizable UI. Do not redraw, fabricate, or distort app interfaces.
- Do not put every screenshot inside a phone frame by default. Choose a composition that fits each project's actual visual identity.
- Use clean crops, balanced image sizing, consistent aspect ratios where appropriate, and a deliberate hierarchy.
- Images must have appropriate alt text; decorative images should not add redundant screen-reader content.
- Avoid huge image payloads. Follow the project's existing image optimization approach and use responsive sizing.
- Never replace actual project screenshots with unrelated stock images.

## Responsive behavior
- Design mobile-first and verify narrow, medium, and wide viewports.
- Prevent horizontal overflow, clipped text, awkward line breaks, tiny tap targets, and cramped project cards.
- Ensure navigation, buttons, screenshots, grids, and typography adapt gracefully.
- Use a readable line length and comfortable spacing at every breakpoint.
- Do not merely shrink desktop layouts; make intentional mobile composition choices.

## Accessibility and interaction
- Use semantic HTML and correct heading order.
- Ensure keyboard navigation, visible focus states, sufficient contrast, descriptive link names, and accessible form labels.
- Do not communicate meaning through color alone.
- Use real links for navigation and buttons for actions.
- Avoid custom interactions when a simple native behavior works.

## Technical constraints
- First inspect the existing stack, routes, components, styling system, package scripts, assets, and deployment configuration.
- Preserve the existing framework, package manager, routing, design system, and conventions unless a change is justified.
- Do not migrate frameworks or replace libraries just to achieve the visual redesign.
- Reuse and improve existing components where sensible; avoid creating one-off abstractions without need.
- Keep SEO, canonical URLs, Open Graph metadata, favicon, sitemap, robots rules, and existing analytics integration intact unless the task explicitly includes them.
- Do not expose environment variables or credentials. Do not commit `.env` files.
- Do not change domains, DNS, hosting, deployment settings, or production integrations as part of a visual redesign unless explicitly requested.

## Implementation process
1. Inspect the repository and current Git status.
2. Identify the current design, routes, assets, components, and constraints.
3. Describe the redesign direction and implementation plan briefly.
4. Implement in coherent sections, keeping the diff focused.
5. Run project-appropriate formatting, linting, type checks, tests, and production build when available.
6. Start the site and inspect key pages in a browser when tools are available.
7. Verify desktop and mobile layouts, navigation, links, forms, images, and reduced-motion behavior.
8. Review the diff and report what was actually verified.

## Acceptance criteria
- Minimal, meaningful text with clear visual hierarchy.
- Clean, cohesive, distinctive design.
- Responsive behavior across mobile, tablet, and desktop.
- Little to no motion; no distracting animation.
- Project showcases emphasize authentic project work and real screenshots.
- Existing functionality and important SEO behavior remain intact.
- No new console errors, broken links, obvious overflow, or avoidable accessibility regressions.
- Verification results are reported honestly.
