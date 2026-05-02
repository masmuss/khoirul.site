
**[khoirul.me](https://khoirul.me)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content%20License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

my personal website

---

## 🧪 Testing & Quality

This project implements a robust testing suite to ensure code quality and prevent regressions.

### **Types of Tests**
- **Unit Tests (`Vitest`)**: Validates core logic in `src/lib/utils` and Astro components using the Container API.
- **E2E Tests (`Playwright`)**: Full browser automation testing UI, navigation, and core features.
- **Visual Regression**: Snapshot testing to ensure the UI design remains consistent.
- **Accessibility (a11y)**: Automated audits using `axe-core` to maintain WCAG standards.
- **Discovery & SEO**: Validation for RSS feeds, Sitemaps, and Meta Tags.
- **Link Integrity**: Automatic broken link checker for internal navigation.

### **Available Commands**
| Command | Description |
| :--- | :--- |
| `bun run test:unit` | Run all unit and component tests |
| `bun run test:unit:run` | Run unit tests once (for CI) |
| `bun run test:e2e` | Run all Playwright browser tests |
| `bun run test:e2e:ui` | Run Playwright with a visual UI |
| `bun run check` | Run Astro's type and template checker |
| `bun run lint` | Check code style using Biome |

### **Git Hooks**
We use [Lefthook](https://github.com/evilmartians/lefthook) to automate checks:
- **Pre-commit**: Runs type-checking, linting, and formatting.
- **Pre-push**: Runs unit tests and full E2E automation.

---

**License**

- Source code is licensed under the [MIT License](LICENSE).
- All content (posts, images, etc) is licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).