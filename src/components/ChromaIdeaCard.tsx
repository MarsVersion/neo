'use client';

import Link from 'next/link';
import { Idea } from '@/lib/ideasData';
import { useEffect, useRef } from 'react';

interface ChromaIdeaCardProps {
  idea: Idea;
}

export default function ChromaIdeaCard({ idea }: ChromaIdeaCardProps) {
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
      href={`/ideas/${idea.slug}/`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div
        className={idea.subtitle ? 'chroma-card chroma-card--has-subtitle' : 'chroma-card'}
        ref={cardRef}
      >
        <div className="chroma-img-wrapper">
          <img
            src={idea.image}
            alt={idea.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        <div className="chroma-info">
          <div className="name">{idea.title}</div>
          {idea.subtitle ? (
            <div className="role chroma-card-subtitle">{idea.subtitle}</div>
          ) : null}
          <div className="role">
            {idea.type} ({idea.year})
          </div>
          <div className="tags">
            {idea.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
