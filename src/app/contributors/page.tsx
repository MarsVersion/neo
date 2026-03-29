export default function Contributors() {
  return (
    <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '16rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '5rem',
        fontWeight: '400',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        lineHeight: 1.2
      }}>
        Contributors
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
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
        {/* Contributor 1 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--color-text-secondary)'
          }}>
            AK
          </div>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem'
          }}>
            Anna Klein
          </h3>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Sound Artist & Researcher
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Exploring the intersection of bioacoustics and environmental art, creating installations that reveal hidden soundscapes of natural systems.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Bioacoustics
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Installation Art
            </span>
          </div>
        </div>

        {/* Contributor 2 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--color-text-secondary)'
          }}>
            MR
          </div>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem'
          }}>
            Marcus Rodriguez
          </h3>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Architect & Urban Theorist
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Investigating collective memory in urban spaces, designing architectural interventions that serve as repositories for shared cultural experiences.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Urban Design
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Memory Studies
            </span>
          </div>
        </div>

        {/* Contributor 3 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--color-text-secondary)'
          }}>
            SC
          </div>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem'
          }}>
            Sarah Chen
          </h3>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Materials Scientist
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Developing smart materials that respond to environmental stimuli, working on adaptive structures that blur the boundary between architecture and biology.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Smart Materials
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Responsive Systems
            </span>
          </div>
        </div>

        {/* Contributor 4 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-border)',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--color-text-secondary)'
          }}>
            JL
          </div>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '0.5rem'
          }}>
            James Laurent
          </h3>
          <p style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Digital Anthropologist
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Documenting and preserving extinct digital communities, developing methodologies for archaeological excavation of virtual spaces and abandoned online worlds.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Digital Culture
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Preservation
            </span>
          </div>
        </div>
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
