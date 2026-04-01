import { themeSections } from '@/lib/themes';
import ThemeLink from '@/components/ThemeLink';

export default function Themes() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '16rem 2rem' }}>
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
        lineHeight: 1.6,
        opacity: 0.7
      }}>
        Ways of reading ideas.
      </p>

      {themeSections.map((section, index) => (
        <div key={section.title} style={{ marginBottom: index === themeSections.length - 1 ? '0' : '5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            opacity: 0.8
          }}>
            {section.title}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {section.themes.map((theme) => (
              <ThemeLink
                key={theme.slug}
                theme={theme}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
