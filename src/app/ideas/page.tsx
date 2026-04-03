import { ideas } from '@/lib/ideasData';
import ChromaIdeaCard from '@/components/ChromaIdeaCard';
import './ideas.css';

export default function IdeasPage() {
  return (
    <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '16rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '5rem',
        fontWeight: '600',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        lineHeight: 1.2
      }}>
        Ideas
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        fontWeight: '500',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        A curated archive of unrealized projects and concepts.
      </p>

      <div className="chroma-grid">
        {ideas.map((idea) => (
          <ChromaIdeaCard
            key={idea.slug}
            idea={idea}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '2.2rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '1rem'
        }}>
          Submit an Idea
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.4rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          Selected contributions may be developed into published entries.
        </p>
        <div style={{ display: 'inline-block' }}>
          <a 
            href="mailto:contact@neo-slow.com"
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.1rem',
              color: 'var(--color-accent)',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s ease'
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
