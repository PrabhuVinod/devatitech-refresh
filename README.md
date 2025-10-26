# DeVaTi Technologies — Website

## Project info

This repository is a Vite + React + TypeScript site using Tailwind CSS and shadcn-ui components. The project produces a static build in `dist/` suitable for any static host. Builds are portable by default (relative asset paths), so you can copy `dist/` into another repository or static host without embedding repository-specific paths.

## Project structure (important files)

- `index.html` — Vite entry HTML.
- `src/` — application source code
	- `main.tsx` — React entry, mounts the app
	- `App.tsx` — top-level app component
	- `components/` — React components used across the site (Hero, Footer, UI primitives)
	- `pages/` — route pages (Index, NotFound)
- `public/` — static assets copied to the build output
- `vite.config.ts` — Vite configuration (note: production builds default to a relative base; use `VITE_BASE` to override at build time)
- `package.json` — npm scripts and deps


## Scripts

- `npm run dev` — start development server (hot reload)
- `npm run build:relative` — create a production build in `dist/`
- `npm run preview:dist` — locally preview the built `dist` folder

Notes:
- Production builds default to relative asset paths so `dist/` is portable. If you need an explicit base path (e.g. serving under a subpath), set the environment variable `VITE_BASE` when building, for example:

```powershell
set "VITE_BASE=/my-subpath/"; npm run build
```

## Local setup

Requirements:
- Node.js (>= 18 recommended)
- npm

Steps:

1. Clone the repository

```powershell
git clone <YOUR_REPO_URL>
cd <YOUR_REPO_DIRECTORY>
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

## Deploying / copying `dist/`

Because the production build produces relative asset paths by default, `dist/` is portable and can be used in another repository or static host. Common options:

1) Copy `dist/` into another repository and serve from the root (or your chosen location):

```powershell
# build
npm run build:relative

# example (Windows): copy the dist folder into another repo
robocopy .\dist ..\other-repo\dist /E
```

2) Serve `dist/` locally for verification:

```powershell
npm run preview:dist
# or: npx http-server ./dist -p 4173 -c-1
```

Notes:
- If you prefer absolute paths (serving under a subpath), set `VITE_BASE` at build time.
- The repository no longer contains an automated deploy workflow by default; manage CI or deployment in the target repo or manually.

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
