'use client';

export default function IdeasPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <h1 style={{ fontSize: '3.025rem', lineHeight: '1.2', color: '#ffffff', marginBottom: '0.5rem' }}>Ideas</h1>
      <p style={{ fontSize: '1.815rem', lineHeight: '1.3', color: '#ffffff', marginTop: '1rem' }}>
        A collection of unrealized ideas and projects.
      </p>
      
      {/* Ideas Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem',
        marginTop: '4rem'
      }}>
        
        {/* Project 1: Real, Symbolic, Imaginary */}
        <a href="/ideas/real-symbolic-imaginary" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>
          <div style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '0.8rem',
            padding: '2rem',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2a2a2a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '1,5rem',
                color: '#ffffff',
                lineHeight: '1.5',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '0.5rem'
              }}>
                Unrealized Curatorial Project (2020)
              </div>
              <h2 style={{
                fontFamily: 'system-ui',
                fontSize: '2.178rem',
                fontWeight: '400',
                color: '#ffffff',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                Real, Symbolic, Imaginary
              </h2>
            </div>
            
            <div style={{
              position: 'relative',
              aspectRatio: '16/9',
              borderRadius: '0.8rem',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img 
                src="/assets/images/UP-RSI.jpg" 
                alt="Real, Symbolic, Imaginary project"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              A curatorial project exploring North Korea as reality, projection, and imagination. Based on collected materials, it examines how images are constructed when access is limited.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <span style={{
                fontSize: '1rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Mediated Reality
              </span>
              <span style={{
                fontSize: '1rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Geopolitical Imagination
              </span>
              <span style={{
                fontSize: '1rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Translation of Material
              </span>
            </div>
          </div>
        </a>

        {/* Project 2: Neo-Slow Hardware */}
        <a href="/ideas/neo-slow-hardware" style={{
          textDecoration: 'none',
          color: 'inherit'
        }}>
          <div style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '0.8rem',
            padding: '2rem',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#2a2a2a';
            e.currentTarget.style.transform = 'translateY(0)';
          }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '1.056rem',
                color: '#ffffff',
                lineHeight: '1.5',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                Unrealized Hardware Concept (2025)
              </div>
              <h2 style={{
                fontFamily: 'system-ui',
                fontSize: '2.178rem',
                fontWeight: '400',
                color: '#ffffff',
                marginBottom: '0.5rem',
                lineHeight: '1.3'
              }}>
                Neo-Slow Hardware
              </h2>
            </div>
            
            <div style={{
              position: 'relative',
              aspectRatio: '16/9',
              borderRadius: '0.8rem',
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}>
              <img 
                src="/assets/images/UP-NS-Hardware.jpg" 
                alt="Neo-Slow Hardware concept"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff',
              lineHeight: '1.7',
              marginBottom: '1.5rem'
            }}>
              A ritual, pocket-sized companion that responds without interpreting. Activated by a deliberate gesture, it replaces interaction with quiet perception.
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <span style={{
                fontSize: '0.96rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Calm Technology
              </span>
              <span style={{
                fontSize: '0.96rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Privacy by Design
              </span>
              <span style={{
                fontSize: '0.96rem',
                color: '#4fd3ff',
                backgroundColor: 'rgba(7, 117, 153, 0.1)',
                padding: '0.25rem 0.75rem',
                borderRadius: '0.25rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Non-Interpretive AI
              </span>
            </div>
          </div>
        </a>
        
      </div>
    </div>
  );
}
