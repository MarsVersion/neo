export default function Ideas() {
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
        Archive
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        A living collection of unrealized ideas, preserved as seeds for future cultivation.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        {/* Idea Entry 1 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem'
          }}>
            The Sound of Growing Plants
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            An acoustic installation that translates plant growth into soundscapes, revealing the hidden rhythms of botanical life through bio-acoustic sensors.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Sound Art
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Biology
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Conceptual
            </span>
          </div>
        </div>

        {/* Idea Entry 2 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem'
          }}>
            Urban Memory Palaces
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            A network of physical spaces throughout cities designed as collective memory repositories, where communities can store and retrieve shared experiences.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Architecture
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Community
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Social Practice
            </span>
          </div>
        </div>

        {/* Idea Entry 3 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem'
          }}>
            Liquid Architecture
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Buildings that respond to environmental conditions by changing their physical structure, creating spaces that breathe and adapt like living organisms.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Smart Materials
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Responsive Design
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Research
            </span>
          </div>
        </div>

        {/* Idea Entry 4 */}
        <div style={{
          padding: '3rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '2.5rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '1rem'
          }}>
            Digital Archaeology
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Methods for excavating and preserving abandoned digital spaces, creating museums of forgotten online communities and extinct virtual worlds.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Digital Culture
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Preservation
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Archive
            </span>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div style={{
        borderTop: '1px solid var(--color-border)',
        paddingTop: '4rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.5rem',
          color: 'var(--color-text-secondary)',
          marginBottom: '2rem'
        }}>
          Browse by category or search the archive
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-text-primary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-border)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            All Ideas
          </button>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-border)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Art & Design
          </button>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-border)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Technology
          </button>
          <button style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            backgroundColor: 'transparent',
            border: '1px solid var(--color-border)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Research
          </button>
        </div>
      </div>
    </div>
  );
}
