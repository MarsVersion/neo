import { journalEntries } from '@/lib/journalData';
import ChromaJournalCard from '@/components/ChromaJournalCard';
import '../ideas/ideas.css';
import './journal.css';

export default function Journal() {
  return (
    <div className="journal-page" style={{ maxWidth: '1800px', margin: '0 auto', padding: '16rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '5rem',
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: '1rem',
        lineHeight: 1.2
      }}>
        Journal
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Essays, reviews, interviews, and unrealized propositions.
      </p>

      <div className="chroma-grid">
        {journalEntries.map((entry) => (
          <ChromaJournalCard key={entry.slug} entry={entry} />
        ))}
      </div>
    </div>
  );
}
