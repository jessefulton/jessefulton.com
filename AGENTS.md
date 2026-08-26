# AGENTS.md // Operational Guidelines & Engineering Standards

This document establishes the repository guidelines, coding standards, and operational invariants for AI coding agents and automated contributors working within `jessefulton.com`.

---

## 1. Core Engineering Principles

### 1.1 Component & Module Reuse First
- **Search Before Building**: Before writing a new component, layout, or utility, audit `src/components/` and `src/layouts/` for existing implementations.
- **Extend Over Duplicate**: Prefer extending an existing component via props over creating a one-off clone.
- **Ecosystem Selection**: When adding new functionality that requires external tooling, prefer well-supported, standard Open Source Software (OSS) libraries over custom or paid implementations.

### 1.2 Single Source of Truth (DRY Documentation)
- **Never Duplicate Documentation**: Never replicate design token definitions, schema definitions, or architectural guidelines across multiple files.
- **Link Canonical Sources**: Reference the authoritative source file (e.g. `src/content/config.ts`, `tailwind.config.mjs`, or external project Notion pages) rather than restating its contents.

### 1.3 Code Documentation & Docstring Rules
- **1-Sentence High-Level Docstrings**: Provide a concise, single-sentence docstring for every component, exported function, module, and helper summarizing *what* it does at a high level.
- **No Line-by-Line Narration**: Do *not* write verbose comments detailing what the code does line by line in prose. If the mechanics can be understood by reading clean code (which should be the case 90% of the time), keep documentation minimal.
- **Document Non-Obvious Invariants**: Only add explanatory depth beyond the one-sentence summary for non-obvious logic, complex state transitions, external API constraints, or architectural invariants.
- **JSDoc / TSDoc Standards**: For non-trivial utility functions and collection helpers, provide clean JSDoc comments with `@param` and `@returns` descriptions.

---

## 2. Framework & Architecture Standards

### 2.1 Astro 4 Static Architecture
- **Zero-JS by Default**: Keep Astro components (`.astro`) static whenever possible. Do not add client-side `<script>` tags unless interactive state is required (e.g., carousels, client-side search filtering, third-party embeds).
- **Typed Content Collections**: All dynamic data (projects, career roles, achievements) must be queried via Astro's `getCollection()` and validated through the Zod schemas defined in `src/content/config.ts`.
- **Dynamic Route Generation**: New dynamic routes (like `/tags/[tag].astro` or `/portfolio/[...slug].astro`) must implement `getStaticPaths()` for deterministic build-time generation.

### 2.2 Styling & Design Tokens
- **Canonical Design System**: Visual styling follows the Glam-Punk design aesthetic (monochromatic obsidian base with intentional Gold, Magenta, Cyan, and Lime domain accents).
- **Token Centralization**: Use classes mapped to tokens in `tailwind.config.mjs` and `src/styles/global.css`. Avoid hardcoded arbitrary values where design system classes exist (`punk-panel`, `stamp-bw`, `hand-scribble`).
- **Brand Playbook & Style Guide**: For complete visual guidelines, voice and tone, typography pairings, and layout specifications, refer to the canonical [Personal Brand Playbook in Notion](https://www.notion.so/jessefulton/Personal-Brand-Playbook-3c679715ea8080b1a023c3d3fd2d3e56?source=copy_link).

---

## 3. Testing, Verification & Quality Assurance

### 3.1 Build Verification
- **Compilation Gate**: Before completing any task, run `npm run build` to verify that all static routes compile cleanly without TypeScript errors, broken imports, or schema validation failures.
- **Asset Integrity**: Ensure all media referenced in Markdown frontmatter exists in `public/media/` or valid relative paths.

### 3.2 Responsive & Interaction Verification
- Verify layout behavior across mobile (< 640px), tablet (768px), and desktop (>= 1024px) viewports.
- Validate interactive components (e.g., Cal.com scheduling embed on `/meet`, client-side search filtering on `/portfolio`, and tag navigation on `/tags`).
