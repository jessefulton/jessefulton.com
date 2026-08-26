# Contributing to jessefulton.com

This guide outlines the development workflow, branch naming conventions, commit standards, and issue tracking protocols for `jessefulton.com`.

---

## 1. Issue Tracking & Project Management

All tasks, features, and design updates are tracked in [Linear](https://linear.app):

- **Workspace**: `jessefulton`
- **Team**: `Various Ventures`
- **Project**: [jessefulton.com 2026 refresh](https://linear.app/jessefulton/project/jessefultoncom-2026-refresh-455d0d49727b)
- **Issue Identifier Format**: `VV-<issue_number>` (e.g., `VV-9`, `VV-12`)

When working on a specific task:
1. Ensure the task state is marked `In Progress` in Linear.
2. Reference the Linear issue ID in branch names and commit messages where relevant.
3. Update and close the Linear issue upon verification.

---

## 2. Branching Strategy

- **Primary Development Branch**: `2026/revamp`
- **Production Branch**: `main`
- **Feature / Fix Branches**:
  - `feat/<issue-id>-<short-description>` (e.g., `feat/vv-9-cal-com-scheduler`)
  - `fix/<issue-id>-<short-description>` (e.g., `fix/vv-8-form-validation`)

---

## 3. Commit Message Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<optional scope>): <description>

[optional body]

[optional footer(s)]
```

### Allowed Types
- **`feat`**: A new feature or user-facing enhancement.
- **`fix`**: A bug fix.
- **`style`**: Aesthetic, typographic, CSS, or layout changes that do not affect functionality.
- **`docs`**: Documentation changes (e.g., `README.md`, `AGENTS.md`, `CONTRIBUTING.md`).
- **`refactor`**: Code restructuring without altering external behavior.
- **`chore`**: Maintenance tasks, dependency updates, build tooling configurations.

---

## 4. Continuous Integration & Deployment (CI/CD)

- **Platform**: [Netlify](https://www.netlify.com/)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Deploy Previews**: Automatically generated on pull requests.
- **Production Deploys**: Automatically triggered on commits merged to the primary branch.
