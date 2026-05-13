import { withBasePath } from "@/lib/sitePath";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href={withBasePath("/")}>Neo-Slow</a>
      </div>

      <div className={styles.navbarLinks}>
        <a href={withBasePath("/ideas/")}>Ideas</a>
        <a href={withBasePath("/contributors/")}>Contributors</a>
        <a href={withBasePath("/journal/")}>Journal</a>
        <a href={withBasePath("/about/")}>About</a>
      </div>
    </nav>
  );
}
