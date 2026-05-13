/** Wraps each route segment for `.site-page` layout; server-only (static export friendly). */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="site-page">{children}</div>;
}
