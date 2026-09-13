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

## Content

| Path | What to edit |
|---|---|
| `src/data/site.ts` | Legal name, phones, addresses, email (set `email` when confirmed), LinkedIn |
| `src/content/services/*.md` | Service groups |
| `src/content/sectors/*.md` | Sector rows |
| `src/content/insights/*.md` | Articles (none on launch) |

A new Insight is one Markdown file with `title`, `description`, `date`, and optional `draft: true`.

The enquiry form is visible but **does not send** until `site.email` is set and a form provider is wired. Call and WhatsApp are live.

## GitHub Pages

1. Create a GitHub repo the **GCAMS account** will own (`gcamsadvisory/website` or transfer after first push).
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Push `main` (or `master`). The workflow at `.github/workflows/deploy.yml` builds and deploys `dist`.
4. After the first green deploy, **Settings → Pages → Custom domain**: `gcamsadvisory.com`. The `public/CNAME` file already contains that host.

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

- Confirm `[local-part]@gcamsadvisory.com`, then set `site.email` and wire Formspree/Basin (or equivalent) to that mailbox. Configure SPF, DKIM and DMARC on Namecheap Private Email.
- Add the founder headshot on About (the portrait frame is reserved).
- Add LinkedIn URLs in `site.linkedIn`.
- Confirm post-nominals / INSOL before publishing them.
- Add Search Console and, if wanted, privacy-conscious analytics.

## Identity

Web files are in `public/images/` (transparent PNG, white-background PNG, SVG wrapper, OG image) plus `public/favicon.svg`. Print AI/EPS remains a later designer pass.

## Licence

Site contents © 2026 Global Corporate Advisory and Management Services DWC-LLC.
