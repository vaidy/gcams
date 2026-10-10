/** Prefix an internal path with Astro's deploy base (`/` on the custom domain). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return normalized ? `${base}${normalized}` : base.replace(/\/$/, '') || '/';
}
