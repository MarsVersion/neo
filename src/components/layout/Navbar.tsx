'use client';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <a href="/">Neo-Slow</a>
      </div>
      
      <div className={styles.navbarLinks}>
        <a href="/ideas">Archive</a>
        <a href="/contributors">Contributors</a>
        <a href="/themes">Themes</a>
        <a href="/journal">Journal</a>
        <a href="/map">Map</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
