---
name: code-review
description: Reviews portfolio code changes for correctness, regressions, accessibility, responsive behavior, performance, security, SEO preservation, and unnecessary complexity. Use before considering a redesign or feature complete.
---

# Portfolio Code Review

Review the actual diff, not just the agent's summary.

## Review order
1. Correctness: does the change satisfy the request and preserve existing behavior?
2. Responsive layout: are narrow screens, navigation, images, grids, and long text handled?
3. Accessibility: semantics, keyboard operation, focus, labels, contrast, alt text, and reduced motion.
4. Visual consistency: typography, spacing, tokens, component reuse, and restrained effects.
5. Performance: image sizes, unnecessary client-side JavaScript, animation cost, and avoidable dependencies.
6. SEO and metadata: preserve titles, descriptions, canonical URLs, Open Graph, sitemap, robots, and structured data unless explicitly changed.
7. Security and privacy: no exposed secrets, unsafe HTML, leaked personal data, or unapproved external submissions.
8. Scope: no unrelated file churn, accidental asset deletion, or unexplained dependency changes.
9. Verification: compare claimed checks against actual command results.

## Findings
- Report actionable findings first, ordered by severity.
- Include the affected file and a useful location when possible.
- Explain user impact and a concrete fix.
- Do not report style preferences as critical bugs.
- If no issues are found, state what was inspected and what was not verified.
