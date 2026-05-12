'use client';

import SectionBackLink from '@/components/SectionBackLink';
import { Contributor } from '@/lib/contributors';

interface ContributorDetailProps {
  contributor: Contributor;
}

export default function ContributorDetail({ contributor }: ContributorDetailProps) {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16rem 2rem' }}>
      <div style={{ marginBottom: '4rem' }}>
        {contributor.image && (
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '10%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 3rem',
            overflow: 'hidden'
          }}>
            <img
              src={contributor.image}
              alt={contributor.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        )}
        
        <h1 style={{ 
          fontFamily: 'var(--font-headline)', 
          fontSize: '4rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '1rem',
          lineHeight: 1.2,
          textAlign: 'left'
        }}>
          {contributor.name}
        </h1>
        
        <p style={{
          fontFamily: 'var(--font-label)',
          fontSize: '1.3rem',
          color: 'var(--color-accent)',
          marginBottom: '3rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textAlign: 'left'
        }}>
          {contributor.role}
        </p>
        
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.6rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.8,
          marginBottom: '4rem',
          whiteSpace: 'pre-line',
          textAlign: 'left',
          maxWidth: '800px'
        }}>
          {contributor.fullBio}
        </div>
      </div>

      {contributor.sections && contributor.sections.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          {contributor.sections.map((section, index) => (
            <div key={index} style={{ marginBottom: '3rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '2.2rem',
                fontWeight: '400',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem'
              }}>
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                  paddingLeft: '2rem',
                  listStyle: 'none'
                }}>
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} style={{ marginBottom: '0.8rem' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.5rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7
                }}>
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {contributor.links && contributor.links.length > 0 && (
        <div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.2rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem'
          }}>
            Links
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {contributor.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.5rem',
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  opacity: 0.8,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        style={{
          borderTop: '1px solid #2a2a2a',
          paddingTop: '2rem',
          marginTop: '3rem'
        }}
      >
        <SectionBackLink href="/contributors/">Contributors</SectionBackLink>
      </div>
    </div>
  );
}
