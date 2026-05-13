const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const normalized = raw?.replace(/^\/+|\/+$/g, "") ?? "";

/** Root path segment when building for a subfolder host (must match `next.config` basePath). */
export const siteBasePath = normalized ? `/${normalized}` : "";

/** Prefix internal absolute paths for subpath deploys. Leaves mailto, http(s), and `//` unchanged. */
export function withBasePath(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return `${siteBasePath}${href}`;
}
