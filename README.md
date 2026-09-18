# GCAMS website

Static site for **Global Corporate Advisory and Management Services DWC-LLC**, built with Astro and meant to be hosted on **GitHub Pages** at [https://gcamsadvisory.com](https://gcamsadvisory.com).

Copy lives in Markdown collections so Insights, services and sectors can grow without a redesign. Shared particulars (phones, licence numbers, DIFC wording) are in [`src/data/site.ts`](src/data/site.ts).

## Local

```sh
npm install
npm run dev
```

Build:

```sh
npm run build
npm run preview
```

Requires Node 22.12 or later (Astro 7).

For a working enquiry form locally, copy `.env.example` to `.env` and set `PUBLIC_WEB3FORMS_ACCESS_KEY`. Restart `dev` / `preview` after changing it.

## Content

| Path | What to edit |
|---|---|
| `src/data/site.ts` | Legal name, phones, addresses, email, LinkedIn |
| `src/content/services/*.md` | Service groups |
| `src/content/sectors/*.md` | Sector rows |
| `src/content/insights/*.md` | Articles (none on launch) |

A new Insight is one Markdown file with `title`, `description`, `date`, and optional `draft: true`.

The enquiry form posts to **Web3Forms** (`https://api.web3forms.com/submit`). The client needs `PUBLIC_WEB3FORMS_ACCESS_KEY`:

- Local: copy `.env.example` to `.env` and paste the access key (`.env` is gitignored).
- GitHub Pages: repository **Settings → Secrets and variables → Actions →** `WEB3FORMS_ACCESS_KEY`. The deploy workflow passes it into the build as `PUBLIC_WEB3FORMS_ACCESS_KEY`.

In the Web3Forms dashboard, the form recipient must be `ram@gcamsadvisory.com`. Do not commit the key. If the key is missing, the form stays disabled and shows a visible note. Call, WhatsApp and email remain live.

## GitHub Pages

1. Create a GitHub repo the **GCAMS account** will own (`gcamsadvisory/website` or transfer after first push).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Add the Actions secret `WEB3FORMS_ACCESS_KEY` (Web3Forms access key; recipient `ram@gcamsadvisory.com`).
4. Push `main` (or `master`). The workflow at `.github/workflows/deploy.yml` builds and deploys `dist`.

Until **gcamsadvisory.com** is connected, the preview URL is `https://<user>.github.io/gcams/`. The build sets `ASTRO_BASE=/gcams` so CSS, images and links resolve under that subpath. **Remove `ASTRO_BASE` from the workflow** (or set it to empty) once the custom domain is live — the domain serves the site from `/`, not `/gcams/`.
5. After the first green deploy, **Settings → Pages → Custom domain**: `gcamsadvisory.com`. The `public/CNAME` file already contains that host.

### Namecheap DNS

Canonical host: `https://gcamsadvisory.com`. Point apex and `www` as follows (GitHub Pages IPv4):

| Type | Host | Value |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `<github-org-or-user>.github.io` |

Also add the IPv6 AAAA records from [GitHub’s custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) if you use them. Wait for DNS, then enable **Enforce HTTPS** in the Pages settings.

Redirect `http` and `www` to `https://gcamsadvisory.com` (GitHub does this once the custom domain and HTTPS are active).

### After go-live

- Confirm SPF, DKIM and DMARC on Namecheap Private Email for `ram@gcamsadvisory.com`.
- Confirm `WEB3FORMS_ACCESS_KEY` is set on the GitHub repo and that the Web3Forms dashboard recipient is that mailbox.
- Add the founder headshot on About (the portrait frame is reserved).
- Add LinkedIn URLs in `site.linkedIn`.
- Confirm post-nominals / INSOL before publishing them.
- Add Search Console and, if wanted, privacy-conscious analytics.

## Identity

Web files are in `public/images/` (transparent PNG, white-background PNG, SVG wrapper, OG image) plus `public/favicon.svg`. Print AI/EPS remains a later designer pass.

## Licence

Site contents © 2026 Global Corporate Advisory and Management Services DWC-LLC.
