export default function Themes() {
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
        Themes
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Thematic clusters organizing the landscape of unrealized ideas.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        {/* Theme 1 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Temporal Landscapes
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Exploring ideas that exist across different temporal scales, from geological time to computational microseconds. This theme investigates how time shapes the emergence and decay of concepts.
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
              12 ideas
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Active
            </span>
          </div>
        </div>

        {/* Theme 2 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Living Systems
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Ideas that blur the boundaries between biological and artificial systems, exploring hybrid forms of organization, communication, and adaptation.
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
              8 ideas
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Active
            </span>
          </div>
        </div>

        {/* Theme 3 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Memory Architecture
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Concepts for preserving and accessing collective memory, from digital archives to physical spaces designed as repositories for shared cultural experiences.
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
              15 ideas
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
              Emerging
            </span>
          </div>
        </div>

        {/* Theme 4 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Sensory Extensions
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Technologies and methodologies for extending human perception beyond biological limits, exploring new ways of sensing and interpreting the world.
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
              6 ideas
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
              Developing
            </span>
          </div>
        </div>

        {/* Theme 5 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Material Intelligence
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Smart materials and responsive systems that adapt to environmental conditions, creating architectures that behave more like living organisms than static structures.
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
              9 ideas
            </span>
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-accent)',
              backgroundColor: 'rgba(212, 165, 116, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '4px'
            }}>
              Active
            </span>
          </div>
        </div>

        {/* Theme 6 */}
        <div style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
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
              11 ideas
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
              Research
            </span>
          </div>
        </div>
      </div>

      {/* Theme Navigation */}
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
          Explore by Theme
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
          Themes provide conceptual frameworks for understanding relationships between ideas. Each cluster represents a different lens through which to view the landscape of unrealized potential.
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
            All Themes
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
            Active Clusters
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
            Emerging Topics
          </button>
        </div>
      </div>
    </div>
  );
}
