"use client";

import { usePathname } from "next/navigation";

/**
 * Forces a fresh subtree on each navigation so client state from the previous
 * route (e.g. Framer Motion, listeners) cannot leave the next page blank.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="site-page">
      {children}
    </div>
  );
}
