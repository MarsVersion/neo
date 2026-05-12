'use client';

import Link from 'next/link';
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
    <Link
      href={`/contributors/${contributor.slug}/`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="chroma-card" ref={cardRef}>
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
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#2a2a2a',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#666',
                fontSize: '1.2rem'
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
    </Link>
  );
}
