'use client';

import Link from 'next/link';
import { Theme } from '@/lib/themes';
import { getIdeasByTheme, Idea } from '@/lib/ideas';

interface ThemeDetailProps {
  theme: Theme;
  allThemes: Theme[];
}

export default function ThemeDetail({ theme, allThemes }: ThemeDetailProps) {
  const curatedIdeas = getIdeasByTheme(theme.slug);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16rem 2rem' }}>
      <Link 
        href="/themes"
        style={{
          fontFamily: 'var(--font-label)',
          fontSize: '1.1rem',
          color: 'var(--color-accent)',
          textDecoration: 'none',
          marginBottom: '2rem',
          display: 'inline-block',
          opacity: 0.8
        }}
      >
        ← Back to Themes
      </Link>

      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-headline)', 
          fontSize: '4rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '1rem',
          lineHeight: 1.2
        }}>
          {theme.name}
        </h1>
        
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.6rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
          opacity: 0.7,
          marginBottom: '3rem'
        }}>
          {theme.description}
        </p>
      </div>

      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1.6rem',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.8,
        marginBottom: '4rem'
      }}>
        <p>
          This theme explores {theme.name.toLowerCase()} as a way of reading ideas. 
          Through this lens, we can trace connections between different conceptual territories 
          and identify patterns of emergence, resistance, and transformation.
        </p>
        <br />
        <p>
          The themes in Neo-Slow are not rigid categories but rather fluid frameworks for thinking. 
          They serve as provisional maps that help us navigate the complex terrain of ideas that exist 
          between conception and realization, between possibility and actuality.
        </p>
      </div>

      {curatedIdeas.length > 0 && (
        <div style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '3rem'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.2rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Curated Ideas
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {curatedIdeas.map((idea) => (
              <div key={idea.id} style={{
                padding: '2rem',
                border: '1px solid var(--color-border)',
                borderRadius: '4px',
                backgroundColor: 'var(--color-bg-secondary)'
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.8rem',
                  fontWeight: '400',
                  color: 'var(--color-text-primary)',
                  marginBottom: '0.5rem'
                }}>
                  {idea.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.3rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                  opacity: 0.8
                }}>
                  {idea.description}
                </p>
                <div style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '1.1rem',
                  color: 'var(--color-accent)',
                  opacity: 0.7
                }}>
                  {idea.type} • {idea.year} • {idea.contributor}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '3rem',
        marginTop: '4rem'
      }}>
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '2.2rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '2rem'
        }}>
          Related Themes
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          {allThemes
            .filter(t => t.slug !== theme.slug)
            .slice(0, 4)
            .map((relatedTheme) => (
              <Link
                key={relatedTheme.slug}
                href={`/themes/${relatedTheme.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  padding: '2rem',
                  textAlign: 'center',
                  border: '1px solid var(--color-border)',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-bg-primary)';
                  e.currentTarget.style.opacity = '0.8';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.opacity = '1';
                }}
                >
                  <h3 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.5rem',
                    fontWeight: '400',
                    color: 'var(--color-text-primary)',
                    marginBottom: '0.5rem'
                  }}>
                    {relatedTheme.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.1rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.5,
                    opacity: 0.6
                  }}>
                    {relatedTheme.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
