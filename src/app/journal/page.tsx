export default function Journal() {
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
        Journal
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6
      }}>
        Essays, editorials, and reflections on the nature of unrealized ideas.
      </p>

      <div style={{
        display: 'grid',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        {/* Article 1 */}
        <article style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '3rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              maxWidth: '800px'
            }}>
              The Architecture of Waiting: How Time Shapes Creative Process
            </h2>
            <time style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.2rem',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap'
            }}>
              March 15, 2024
            </time>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            In our accelerated culture, we often mistake speed for progress. But what if the most valuable ideas require the slow cultivation of time? This essay explores how periods of dormancy and delay are not failures of execution, but essential phases in the lifecycle of meaningful concepts...
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
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
              Creative Process
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
              Time
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
              Philosophy
            </span>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}>
            Read more →
          </a>
        </article>

        {/* Article 2 */}
        <article style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '3rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              maxWidth: '800px'
            }}>
            Digital Ghosts: Preserving the Architecture of Abandoned Online Spaces
            </h2>
            <time style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.2rem',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap'
            }}>
              February 28, 2024
            </time>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Every day, countless digital spaces vanish without ceremony. Forums fall silent, virtual worlds shut down, and communities disperse into the digital ether. What does it mean to create an archaeology of these abandoned architectures? This reflection explores the ethics and techniques of digital preservation...
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
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
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Memory
            </span>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}>
            Read more →
          </a>
        </article>

        {/* Article 3 */}
        <article style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '3rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              maxWidth: '800px'
            }}>
            The Sound of Things Growing: Acoustic Ecology as Creative Practice
            </h2>
            <time style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.2rem',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap'
            }}>
              February 10, 2024
            </time>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Plants are communicating constantly, just not in frequencies we're trained to hear. By developing technologies that translate botanical processes into sound, artists and researchers are revealing hidden conversations in the natural world. This essay explores what we learn when we finally listen...
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
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
              Sound Art
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
              Biology
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
              Ecology
            </span>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}>
            Read more →
          </a>
        </article>

        {/* Article 4 */}
        <article style={{
          padding: '4rem',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: '3rem',
              fontWeight: '400',
              color: 'var(--color-text-primary)',
              lineHeight: 1.2,
              maxWidth: '800px'
            }}>
            Material Memory: How Buildings Remember and Forget
            </h2>
            <time style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.2rem',
              color: 'var(--color-accent)',
              whiteSpace: 'nowrap'
            }}>
              January 25, 2024
            </time>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            Architecture is often discussed in terms of space and form, but what about time? Buildings accumulate memories through use, wear, and adaptation. This reflection explores how physical structures become repositories of collective experience, and what happens when we design spaces specifically for memory...
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
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
              Architecture
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
            <span style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1rem',
              color: 'var(--color-text-secondary)',
              backgroundColor: 'var(--color-bg-primary)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid var(--color-border)'
            }}>
              Urban Theory
            </span>
          </div>
          <a href="#" style={{
            fontFamily: 'var(--font-label)',
            fontSize: '1.2rem',
            color: 'var(--color-accent)',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease'
          }}>
            Read more →
          </a>
        </article>
      </div>

      {/* Journal Navigation */}
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
          Explore the Archive
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
          The Journal serves as a space for sustained reflection on the creative process, cultural preservation, and the quiet work of cultivation.
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
            All Articles
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
            Recent Essays
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
            Topics
          </button>
        </div>
      </div>
    </div>
  );
}
