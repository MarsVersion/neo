export default function Map() {
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
        Map
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Visualizing the connections and relationships between unrealized ideas.
      </p>

      {/* Map Placeholder Section */}
      <div style={{
        padding: '8rem',
        border: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '6rem'
      }}>
        <div style={{
          width: '200px',
          height: '200px',
          margin: '0 auto 4rem',
          border: '2px dashed var(--color-border)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            width: '60px',
            height: '60px',
            backgroundColor: 'var(--color-accent)',
            borderRadius: '50%',
            opacity: 0.3
          }}></div>
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            width: '40px',
            height: '40px',
            backgroundColor: 'var(--color-text-secondary)',
            borderRadius: '50%',
            opacity: 0.2
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-10px',
            width: '30px',
            height: '30px',
            backgroundColor: 'var(--color-text-primary)',
            borderRadius: '50%',
            opacity: 0.2
          }}></div>
        </div>
        
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '3rem',
          fontWeight: '400',
          color: 'var(--color-text-primary)',
          marginBottom: '2rem'
        }}>
          Network Visualization Coming Soon
        </h2>
        
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1.5rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          maxWidth: '800px',
          margin: '0 auto 4rem auto'
        }}>
          The Map will provide an interactive visualization of how ideas connect, influence each other, and form clusters of related concepts. 
          This spatial representation will help identify patterns, emerging themes, and unexpected relationships across the archive.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Nodes
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6
            }}>
              Individual ideas represented as points in the network
            </p>
          </div>
          
          <div style={{
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Connections
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6
            }}>
              Relationships showing influence and thematic links
            </p>
          </div>
          
          <div style={{
            textAlign: 'center'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '2rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem'
            }}>
              Clusters
            </h3>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.2rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6
            }}>
              Groups of ideas forming thematic neighborhoods
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
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
            marginBottom: '1.5rem'
          }}>
            Interactive Exploration
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7
          }}>
            Navigate through the network organically, discovering unexpected connections and hidden patterns in the landscape of ideas.
          </p>
        </div>

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
            marginBottom: '1.5rem'
          }}>
            Temporal Layers
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7
          }}>
            View how ideas evolve over time, with layers showing historical influences and potential future developments.
          </p>
        </div>

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
            marginBottom: '1.5rem'
          }}>
            Thematic Filtering
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7
          }}>
            Focus on specific themes or disciplines to understand how ideas cluster and connect within different conceptual frameworks.
          </p>
        </div>
      </div>

      {/* Development Status */}
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
          Currently in Development
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
          The Map visualization represents a significant technical and conceptual undertaking. We're developing the underlying infrastructure to support complex network analysis while maintaining the platform's commitment to thoughtful, unhurried exploration.
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
            border: '1px solid var(--color-accent)',
            padding: '1rem 2rem',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}>
            Join Beta Testing
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
            Technical Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
