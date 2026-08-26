# jessefulton.com

[![Version](https://img.shields.io/badge/version-6.0.0-gold.svg)](package.json)
[![Astro](https://img.shields.io/badge/astro-4.15-purple.svg)](https://astro.build)
[![Deployment](https://img.shields.io/badge/deploy-Netlify-00ad9f.svg)](https://www.netlify.com/)
[![License](https://img.shields.io/badge/license-UNLICENSED-charcoal.svg)](LICENSE)

Personal website, venture portfolio, and 20-year case study retrospective for **Jesse Fulton** — Executive Venture Architect, Multimodal Systems Designer, and Creative Technologist.

---

## ⚡ Quickstart

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

### Local Development
```bash
# Clone the repository
git clone https://github.com/jessefulton/jessefulton.com.git
cd jessefulton.com

# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev
```

### Production Build & Preview
```bash
# Build static site output to /dist
npm run build

# Preview the built production output locally
npm run preview
```

---

## 🏗 Tech Stack & Architecture

- **Framework**: [Astro 4](https://astro.build/) (Static Site Generation with `@astrojs/netlify`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Glam-Punk design tokens
- **Data Layer**: Typed Markdown Content Collections (`src/content/`) governed by Zod schemas in `src/content/config.ts`
- **Typography**: `Space Grotesk` (Headings & Body), `Space Mono` (CTAs, Code & Data), `Special Elite` (Stamps), and `Rock Salt` (Marker notes)
- **Scheduling**: [Cal.com](https://cal.com) dark-theme embed integration on `/meet`
- **Deployment**: Netlify Edge with automated build triggers

---

## 🌐 Live Environments

- **Production**: [jessefulton.com](https://jessefulton.com)
- **Direct Scheduling**: [jessefulton.com/meet](https://jessefulton.com/meet)
- **Capability Taxonomy**: [jessefulton.com/tags](https://jessefulton.com/tags)

---

## 📖 Guidelines & Resources

- **Brand & Style Guide**: [Personal Brand Playbook in Notion](https://www.notion.so/jessefulton/Personal-Brand-Playbook-3c679715ea8080b1a023c3d3fd2d3e56?source=copy_link)
- **Coding Standards & Invariants**: [`AGENTS.md`](./AGENTS.md)
- **Issue Tracking & Workflow**: [`CONTRIBUTING.md`](./CONTRIBUTING.md)