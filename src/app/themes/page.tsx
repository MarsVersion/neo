import { themes } from '@/lib/themesData';
import ChromaThemeCard from '@/components/ChromaThemeCard';
import './themes.css';

export default function Themes() {
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
        Themes
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        fontWeight: '500',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Ways of reading ideas.
      </p>

      <div className="chroma-grid">
        {themes.map((theme) => (
          <ChromaThemeCard
            key={theme.slug}
            theme={theme}
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
          Explore Themes
        </h3>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.4rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          Each theme offers a unique perspective on unrealized ideas.
        </p>
        <div style={{ display: 'inline-block' }}>
          <a 
            href="/ideas"
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
            Browse Ideas
          </a>
        </div>
      </div>
    </div>
  );
}
