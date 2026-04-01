'use client';

import Link from 'next/link';
import { Theme } from '@/lib/themes';

interface ThemeLinkProps {
  theme: Theme;
}

export default function ThemeLink({ theme }: ThemeLinkProps) {
  return (
    <Link
      href={`/themes/${theme.slug}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }}
    >
      <div
        style={{
          padding: '1.5rem 0',
          borderBottom: '1px solid var(--color-border)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-bg-primary)';
          e.currentTarget.style.opacity = '0.8';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.opacity = '1';
        }}
      >
        <h3 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '2rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '0.5rem'
        }}>
          {theme.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.3rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.5,
          opacity: 0.6
        }}>
          {theme.description}
        </p>
      </div>
    </Link>
  );
}
