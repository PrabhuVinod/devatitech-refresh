# DeVaTi Technologies — Website

[![Deploy](https://github.com/PrabhuVinod/devatitech-refresh/actions/workflows/deploy.yml/badge.svg)](https://github.com/PrabhuVinod/devatitech-refresh/actions/workflows/deploy.yml)

## Project info

**Lovable URL**: https://lovable.dev/projects/c645a54d-bf2f-47fc-9d2d-934b99be98c4

This repository is a Vite + React + TypeScript site using Tailwind CSS and shadcn-ui components. It is configured to produce a static build suitable for GitHub Pages and includes a GitHub Actions workflow to automatically deploy the `dist` folder to the `gh-pages` branch.

## Project structure (important files)

- `index.html` — Vite entry HTML.
- `src/` — application source code
	- `main.tsx` — React entry, mounts the app
	- `App.tsx` — top-level app component
	- `components/` — React components used across the site (Hero, Footer, UI primitives)
	- `pages/` — route pages (Index, NotFound)
- `public/` — static assets copied to the build output
- `vite.config.ts` — Vite configuration (note: `base` is set for GitHub Pages)
- `package.json` — npm scripts and deps
- `.github/workflows/deploy.yml` — GitHub Actions workflow to build and deploy

## Scripts

- `npm run dev` — start development server (hot reload)
- `npm run build:relative` — create a production build in `dist/`
- `npm run preview:dist` — locally preview the built `dist` folder
- `npm run deploy` — (local) build + publish `dist/` to `gh-pages` branch using the `gh-pages` package

Notes:
- The project uses Vite's `base` option (set in `vite.config.ts`) so assets are emitted with the correct path for GitHub Pages. The value is `/devatitech-refresh/` for production builds.

## Local setup

Requirements:
- Node.js (>= 18 recommended)
- npm

Steps:

1. Clone the repository

```powershell
git clone <YOUR_REPO_URL>
cd devatitech-refresh
```

2. Install dependencies

```powershell
npm ci
```

3. Run development server

```powershell
npm run dev
```

4. Build for production

```powershell
npm run build
```

5. Preview production build locally

```powershell
npm run preview
```

## Deploying to GitHub Pages

Two options:

1) Use the included `deploy` script (manual deploy from your machine):

```powershell
# install gh-pages once
npm i -D gh-pages

# build and publish
npm run deploy
```

This uses the `gh-pages` package to push the `dist/` folder to the `gh-pages` branch.

2) Automatic deploy via GitHub Actions (recommended):

- A workflow is provided at `.github/workflows/deploy.yml`. It runs on every push to `main`: installs dependencies, runs `npm run build`, and publishes the `dist` folder to `gh-pages` using `peaceiris/actions-gh-pages`.

Make sure GitHub Pages is configured on the repository to serve from the `gh-pages` branch (or repository settings default). For a user/organization page, the base path may differ — adjust `vite.config.ts` accordingly.

## Notes & troubleshooting

- If you change the repository name (or plan to serve from a different path), update the `base` value in `vite.config.ts` (production build must know the path where site is hosted).
- If you prefer to serve from `main` branch `/docs` folder instead of `gh-pages`, set the Vite build output to `docs/` and push that folder; I can update scripts for that flow if you prefer.
- When deploying via Actions, the workflow uses the `GITHUB_TOKEN` secret automatically provided by GitHub. No extra secrets are required for typical public repos.

## Development tips

- Tailwind and shadcn components are used; editing files under `src/components` will update the site on `npm run dev`.
- For performance, large animated effects can be gated behind a `prefers-reduced-motion` check — I can add a toggle/setting to reduce animations for low-power devices.

## Contributing

- Create a branch for your work: `git checkout -b feat/your-feature`
- Commit changes, push, and open a PR targeting `main`.
- CI will run the build and, on merge, the site will be redeployed.

---

If you want, I can also:
- Add an optional badge to the README showing the deployment status.
- Switch to a `docs/`-based deploy (main branch) instead of `gh-pages`.
- Add a small script to toggle/disable background animations for low-power mode.

Happy building!
