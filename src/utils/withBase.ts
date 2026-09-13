/** Prefix an internal path with Astro's deploy base (e.g. /gcams on github.io project pages). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  return normalized ? `${base}${normalized}` : base.replace(/\/$/, '') || '/';
}
