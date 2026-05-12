import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link href="/" prefetch={false}>
          Neo-Slow
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        <Link href="/ideas/" prefetch={false}>
          Ideas
        </Link>
        <Link href="/contributors/" prefetch={false}>
          Contributors
        </Link>
        <Link href="/journal/" prefetch={false}>
          Journal
        </Link>
        <Link href="/about/" prefetch={false}>
          About
        </Link>
      </div>
    </nav>
  );
}
