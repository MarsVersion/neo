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

      <div
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '4rem',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.2rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
          }}
        >
          Submit your thoughts to the Journal.
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.4rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >

        </p>
        <div style={{ display: 'inline-block' }}>
          <a
            href="mailto:yes@neoslow.com"
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.1rem',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease',
            }}
            className="submit-link"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
