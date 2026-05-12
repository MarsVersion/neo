'use client';

import Link from 'next/link';
import { Contributor } from '@/lib/contributors';

interface ContributorCardProps {
  contributor: Contributor;
}

export default function ContributorCard({ contributor }: ContributorCardProps) {
  return (
    <Link
      href={`/contributors/${contributor.slug}/`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block'
      }}
    >
      <div
        style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center',
          transition: 'all 0.2s ease',
          cursor: 'pointer',
          height: '100%'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-accent)';
          e.currentTarget.style.backgroundColor = 'var(--color-bg-primary)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--color-border)';
          e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)';
        }}
      >
        {contributor.image ? (
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            overflow: 'hidden',
            lineHeight: '120px',
            textAlign: 'center'
          }}>
            <img
              src={contributor.image}
              alt={contributor.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%'
              }}
            />
          </div>
        ) : (
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            fontSize: '3rem',
            color: 'var(--color-text-secondary)',
            lineHeight: '120px',
            textAlign: 'center'
          }}>
            {contributor.name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        <h3 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '2.5rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '0.5rem'
        }}>
          {contributor.name}
        </h3>
        <p style={{
          fontFamily: 'var(--font-label)',
          fontSize: '1.2rem',
          color: 'var(--color-accent)',
          marginBottom: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {contributor.role}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.5rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          marginBottom: '2rem'
        }}>
          {contributor.shortDescription}
        </p>
        <div style={{
          fontFamily: 'var(--font-label)',
          fontSize: '1.1rem',
          color: 'var(--color-accent)',
          opacity: 0.8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          Read profile
          <span style={{ fontSize: '0.8rem' }}>→</span>
        </div>
      </div>
    </Link>
  );
}
