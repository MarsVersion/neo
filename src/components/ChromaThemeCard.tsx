'use client';

import Link from 'next/link';
import { Theme } from '@/lib/themesData';
import { useEffect, useRef } from 'react';

interface ChromaThemeCardProps {
  theme: Theme;
}

export default function ChromaThemeCard({ theme }: ChromaThemeCardProps) {
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
      href={`/themes/${theme.slug}`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="chroma-card" ref={cardRef}>
        <div className="chroma-overlay"></div>
        <div className="chroma-fade"></div>
        
        <div className="chroma-img-wrapper">
          <img 
            src={theme.image} 
            alt={theme.name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        
        <div className="chroma-info">
          <div className="name">{theme.name}</div>
          <div className="role">{theme.description}</div>
          <div className="tags">
            {theme.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
