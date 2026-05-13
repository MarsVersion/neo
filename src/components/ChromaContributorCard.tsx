'use client';

import { withBasePath } from '@/lib/sitePath';
import { Contributor } from '@/lib/contributors';
import { useEffect, useRef } from 'react';

interface ChromaContributorCardProps {
  contributor: Contributor;
}

export default function ChromaContributorCard({ contributor }: ChromaContributorCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    const handleMouseLeave = () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      href={withBasePath(`/contributors/${contributor.slug}/`)}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="chroma-card chroma-card--has-subtitle" ref={cardRef}>
        <div className="chroma-img-wrapper">
          {contributor.image ? (
            <img
              src={contributor.image}
              alt={contributor.name}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : (
            <div
              className="contributor-card-placeholder"
              style={{
                backgroundColor: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '1.05rem',
                textAlign: 'center',
                padding: '0.75rem'
              }}
            >
              {contributor.name}
            </div>
          )}
        </div>

        <div className="chroma-info">
          <div className="name">{contributor.name}</div>
          <div className="role">{contributor.role}</div>
        </div>
      </div>
    </a>
  );
}
