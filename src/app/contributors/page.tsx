import { contributors } from '@/lib/contributors';
import ContributorCard from '@/components/ContributorCard';

export default function Contributors() {
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
        Contributors
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        fontWeight: '500',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Minds from various disciplines contributing to the cultivation of unrealized ideas.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        {contributors.map((contributor) => (
          <ContributorCard
            key={contributor.slug}
            contributor={contributor}
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
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '2rem'
        }}>
          Join the Community
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.5rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          marginBottom: '3rem',
          maxWidth: '600px',
          margin: '0 auto 3rem auto'
        }}>
          Neo-Slow is a collaborative platform for researchers, artists, and thinkers exploring the space between ideas and realization.
        </p>
        <button style={{
          fontFamily: 'var(--font-label)',
          fontSize: '1.5rem',
          color: 'var(--color-text-primary)',
          backgroundColor: 'transparent',
          border: '1px solid var(--color-accent)',
          padding: '1.5rem 3rem',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
          Become a Contributor
        </button>
      </div>
    </div>
  );
}
