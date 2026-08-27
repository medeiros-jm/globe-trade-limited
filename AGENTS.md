# Base44 Dev Environment

## Stack
- Vite 7 + React 19 + react-router 7 frontend (Tailwind CSS).
- Hono worker (`src/worker/index.ts`) is a stub ("Hello from Worker!") — the preview is a static SPA; no backend calls, no D1/R2 needed to render.
- Originally a Cloudflare Workers/Pages app (wrangler.json present), but `vite.config.ts` runs a plain Vite dev server (no `@cloudflare/vite-plugin`).

## Run
```
docker compose -f docker-compose.base44.yml up -d
```
- `node:22` base image, source bind-mounted at `/app`, deps installed at startup (`npm install --legacy-peer-deps`), then `vite --host 0.0.0.0 --port 3000`.
- Live reload via Vite HMR; `CHOKIDAR_USEPOLLING=true` for bind-mount file watching.

## Notes
- `vite.config.ts` sets `server.host: true` and `allowedHosts: true` so the preview's external hostname is accepted (Vite blocks unknown hosts by default).
- No external secrets required.
- Verify: `curl -s -o /dev/null -w "%{http_code}" -H "Host: external-preview.example.com" http://localhost:3000/` → 200.
