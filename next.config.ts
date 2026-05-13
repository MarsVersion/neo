import type { NextConfig } from "next";

/**
 * If the site is served under a subpath (not at the domain root), set before build:
 *   NEXT_PUBLIC_BASE_PATH=myfolder
 * (no leading/trailing slashes). Rebuild and upload `out/`. Links and /_next/ will use /myfolder/...
 * Leave unset when the domain points directly at this `out/` folder.
 *
 * Static export + App Router: client navigations fetch RSC payload files such as
 * `/ideas/__next._tree.txt`. Some Apache/ModSecurity setups block `__` in URLs; this
 * project uses full-page `<a href>` navigation so those requests are not required for browsing.
 *
 * Home hero: Framer Motion used to SSR `opacity:0` on the headline; if `/_next` scripts fail
 * on the host, the hero looked blank. The hero now ships as a visible `<h1>` until the
 * client mounts, then optional motion runs.
 */
function normalizeBasePath(raw: string | undefined): string | undefined {
  if (!raw?.trim()) return undefined;
  const trimmed = raw.replace(/^\/+|\/+$/g, "");
  if (!trimmed) return undefined;
  return `/${trimmed}`;
}

const basePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
