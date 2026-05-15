# porfolio-web

My personal site / online CV. Nothing fancy — just a fast, static-ish Next.js app where I keep my profile, experience, skills, languages and contact info in one place.

Live app lives inside [`portfolio-pablo/`](./portfolio-pablo). The repo is split that way so the root can hold the license and any future tooling without polluting the app folder.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS 4
- ESLint (flat config)

## Running it locally

You'll need Node 20+ and [pnpm](https://pnpm.io/).

```bash
cd portfolio-pablo
pnpm install
pnpm dev
```

Dev server runs at http://localhost:3000.

## Production build

```bash
cd portfolio-pablo
pnpm build
pnpm start
```

`pnpm start` boots the production server locally so you can sanity-check the build before pushing.

> Deployed on Vercel. If you fork it, remember to set the **Root Directory** to `portfolio-pablo` in the project settings.

## License

MIT — see [`LICENSE`](./LICENSE). Free to use, fork, copy or take as a starting point for your own portfolio. Just keep the copyright notice.

## Credits

Pair-programmed with [Claude Opus 4.7](https://www.anthropic.com/) inside [Cursor](https://cursor.com/).
