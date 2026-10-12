---
name: implementation-verification
description: Completes frontend implementation tasks with repository-aware changes, real lint/type/test/build checks, and browser verification when available. Use after implementing portfolio features, layouts, forms, or styling changes.
---

# Implementation and Verification

## Before changes
- Read project instructions and inspect Git status.
- Identify the actual package manager from lockfiles and scripts.
- Inspect package scripts before choosing commands.
- Understand which routes and components are affected.

## Implement
- Follow existing patterns and keep changes scoped.
- Avoid adding dependencies unless necessary.
- Preserve existing routes, metadata, analytics, forms, and integrations unless the request explicitly changes them.
- Keep loading/error/empty states and form behavior intact.
- Never put secrets in source code or logs.

## Verify
1. Run the project's formatter if configured.
2. Run lint and type-check scripts if available.
3. Run relevant tests.
4. Run the production build when practical.
5. Start the application and inspect affected pages in the browser when tools are available.
6. Test key interactions: navigation, project links, contact links/forms, menus, and buttons.
7. Check mobile and desktop layouts, console errors, missing assets, and horizontal overflow.
8. Review `git diff --check`, `git status`, and the complete diff.

Use the commands defined by the repository; do not assume a package manager or invent scripts. If a check cannot run because a dependency or environment is missing, state that clearly. Distinguish pre-existing failures from failures introduced by the changes.
