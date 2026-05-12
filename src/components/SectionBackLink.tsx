import Link from 'next/link';
import styles from './SectionBackLink.module.css';

type SectionBackLinkProps = {
  href: string;
  children: string;
  className?: string;
};

/** Back navigation: ← Section name (typically placed below body content). */
export default function SectionBackLink({ href, children, className }: SectionBackLinkProps) {
  return (
    <Link href={href} className={[styles.link, className].filter(Boolean).join(' ')}>
      <span className={styles.arrow} aria-hidden="true">
        ←
      </span>
      {children}
    </Link>
  );
}
