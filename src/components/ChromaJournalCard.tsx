'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { JournalEntry } from '@/lib/journalData';

interface ChromaJournalCardProps {
  entry: JournalEntry;
}

export default function ChromaJournalCard({ entry }: ChromaJournalCardProps) {
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
      href={`/journal/${entry.slug}`}
      style={{
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div className="chroma-card chroma-card--has-subtitle" ref={cardRef}>
        <div className="chroma-overlay"></div>
        <div className="chroma-fade"></div>

        <div className="chroma-img-wrapper">
          <img
            src={entry.image}
            alt={entry.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>

        <div className="chroma-info">
          <div className="name">{entry.title}</div>
          <div className="role chroma-card-subtitle">{entry.subtitle}</div>
        </div>
      </div>
    </Link>
  );
}

