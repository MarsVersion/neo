'use client';

import type { ReactNode } from 'react';
import styles from './JournalArticleLayout.module.css';

export type JournalArticleLayoutProps = {
  title: string;
  /** Optional subtitle / deck (e.g. tagline). Renders after `metadata` when both are set. */
  deck?: string;
  /** Compact editorial metadata under the title. */
  metadata?: ReactNode;
  cover: { src: string; alt: string };
  children: ReactNode;
};

export default function JournalArticleLayout({
  title,
  deck,
  metadata,
  cover,
  children,
}: JournalArticleLayoutProps) {
  const hasHeader = Boolean(metadata || deck);

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <h1 className={styles.title}>{title}</h1>

        {hasHeader ? (
          <div className={styles.headerBlock}>
            {metadata ? <div className={styles.meta}>{metadata}</div> : null}
            {deck ? <h2 className={styles.deck}>{deck}</h2> : null}
          </div>
        ) : null}

        <figure className={styles.figure}>
          <img
            className={styles.cover}
            src={cover.src}
            alt={cover.alt}
          />
        </figure>

        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
