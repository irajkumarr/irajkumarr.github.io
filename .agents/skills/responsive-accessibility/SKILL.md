---
name: responsive-accessibility
description: Audits and improves responsive layouts, keyboard access, semantics, contrast, focus states, forms, and reduced-motion behavior. Use when building or reviewing portfolio pages at mobile, tablet, and desktop sizes.
---

# Responsive and Accessible UI

## Inspect
- Find the app's layout system, breakpoints, navigation, global styles, typography, image components, and form patterns.
- Inspect available browser/testing tools and existing accessibility checks.
- Keep current project conventions unless there is a clear defect.

## Responsive checks
- Test narrow mobile, common mobile, tablet, laptop, and wide desktop widths when browser tools are available.
- Check horizontal overflow, clipped content, unintentional text wrapping, grid collapse, image cropping, nav overflow, and footer layout.
- Make layout decisions intentionally for each size rather than shrinking the desktop composition.
- Keep interactive targets comfortably usable on touch screens.
- Check long project titles and links for overflow.
- Use responsive image sizes and avoid unnecessarily large assets.

## Accessibility checks
- Use semantic landmarks and logical heading hierarchy.
- Ensure all interactive controls work by keyboard.
- Provide visible focus indicators and meaningful accessible names.
- Associate form controls with labels and surface validation errors accessibly.
- Verify text and interactive element contrast.
- Use descriptive alt text for informative images and empty alt text for decorative images.
- Do not rely on color, hover, or animation alone to communicate information.
- Respect `prefers-reduced-motion`.
- Avoid auto-playing or continuously moving content.

## Verification
Run existing lint, type, test, and accessibility checks if available. Use browser inspection for actual viewport behavior when possible. Report viewports and checks actually tested; do not claim a complete accessibility audit based on visual inspection alone.
