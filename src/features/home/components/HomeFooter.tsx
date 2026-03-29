export default function HomeFooter() {
  return (
    <footer style={{
      padding: '4rem 0 2rem',
      borderTop: '1px solid var(--color-border)',
      marginTop: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.25rem',
              marginBottom: '0.5rem'
            }}>
              Neo-Slow
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '300px'
            }}>
              A platform for unrealized ideas in art, technology, and research.
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '3rem'
          }}>
            <div>
              <h4 style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Explore
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="/archive" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Archive
                </a>
                <a href="/contributors" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Contributors
                </a>
                <a href="/themes" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Themes
                </a>
              </div>
            </div>
            
            <div>
              <h4 style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.875rem',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Discover
              </h4>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <a href="/journal" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Journal
                </a>
                <a href="/map" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  Map
                </a>
                <a href="/about" style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '2rem 0 0',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-text-secondary)'
          }}>
            © 2024 Neo-Slow. A space for unrealized potential.
          </p>
        </div>
      </div>
    </footer>
  );
}
