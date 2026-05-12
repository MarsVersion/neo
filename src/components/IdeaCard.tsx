'use client';

import Link from 'next/link';
import { Idea } from '@/lib/ideas';

interface IdeaCardProps {
  idea: Idea;
}

export default function IdeaCard({ idea }: IdeaCardProps) {
  return (
    <Link
      href={`/ideas/${idea.id}/`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div style={{
        border: '1px solid ' + 'var(--color-border)',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-accent)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--color-border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}>
        <div style={{
          aspectRatio: '16/9',
          backgroundColor: 'var(--color-bg-secondary)',
          marginBottom: '2rem'
        }}>
          {/* Placeholder for image */}
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: '1.2rem',
            opacity: 0.5
          }}>
            {idea.title}
          </div>
        </div>
        
        <div style={{ padding: '2rem' }}>
          <div style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.1rem',
            color: 'var(--color-accent)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            {idea.type} • {idea.year}
          </div>
          
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.3
          }}>
            {idea.title}
          </h3>
          
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.4rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            {idea.description}
          </p>
          
          <div style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1rem',
            color: 'var(--color-text-secondary)',
            opacity: 0.7
          }}>
            {idea.contributor}
          </div>
        </div>
      </div>
    </Link>
  );
}
