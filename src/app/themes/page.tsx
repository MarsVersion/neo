import { themes } from '@/lib/themesData';
import Link from 'next/link';
import './themes.css';

export default function Themes() {
  return (
    <div className="themes-page-wrapper">
      {/* Background Image Layer */}
      <div className="themes-page-background">
        <img 
          src="/assets/images/cartoon/NS-cartoon-David.jpg" 
          alt="Background"
          className="themes-page-bg-image"
        />
      </div>
      
      {/* Dark Overlay for Readability */}
      <div className="themes-page-overlay" />
      
      {/* Content Layer */}
      <div className="themes-page-content">
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

        <div className="theme-grid">
          {themes.map((theme) => (
            <Link
              key={theme.slug}
              href={`/themes/${theme.slug}`}
              className="theme-card"
            >
              <h3>{theme.name}</h3>
              <p>{theme.description}</p>
            </Link>
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
            fontSize: '5.3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem'
          }}>
            Explore Themes
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.4rem',
            color: 'white',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}>
            Each theme offers a unique perspective on unrealized ideas.
          </p>
        
        </div>
      </div>
    </div>
  );
}
