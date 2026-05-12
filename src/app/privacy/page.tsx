export default function PrivacyPolicy() {
  return (
    <div
      className="section"
      style={{
        width: '100%',
        maxWidth: '48rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxSizing: 'border-box',
        paddingTop: 'clamp(4rem, 10vw, 8rem)',
        paddingBottom: '3rem',
        paddingLeft: 'clamp(1.5rem, 5vw, 2.75rem)',
        paddingRight: 'clamp(1.5rem, 5vw, 2.75rem)',
      }}
    >
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '3rem',
        fontWeight: '300',
        color: 'var(--color-text-primary)',
        marginBottom: '2rem',
        lineHeight: 1.8,
        textAlign: 'left'
      }}>
        Privacy Policy
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '1.1rem',
        fontWeight: '300',
        color: 'var(--color-text-secondary)',
        marginBottom: '4rem',
        lineHeight: 1.8
      }}>
        Effective Date: April 2026<br />
        Last Updated: May 2026
      </p>

      <div style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '1.1rem',
        fontWeight: '500',
        color: 'var(--color-text-primary)',
        lineHeight: 1.8,
        display: 'flex',
        flexDirection: 'column',
        gap: '2.5rem'
      }}>
        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            1. Overview
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow is designed as a privacy-conscious, processing-based system.
            All interactions are processed transiently. Neo-Slow does not provide server-side storage, user accounts, or data persistence.
            We do not build profiles, track behavior, or monetize user data.
          </p>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            2. Data Processing Approach
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow follows three core principles:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Minimal Processing: Only the data necessary for functionality is processed</li>
            <li style={{ marginBottom: '0.5rem' }}>No Storage: Neo-Slow does not store user content</li>
            <li style={{ marginBottom: '0.5rem' }}>No Tracking: No analytics, telemetry, or behavioral monitoring</li>
          </ul>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            3. What Data Is Processed
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                3.1 User Input
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow may process:
              </p>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>Text input</li>
                <li style={{ marginBottom: '0.5rem' }}>Conceptual or written content entered by the user</li>
              </ul>
              <p style={{ marginTop: '1rem', marginBottom: 0, lineHeight: 1.8 }}>
                <strong>Purpose:</strong> To process, structure, or transform content within the system.
              </p>
            </div>

            <div>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                3.2 Technical Processing
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                User input is processed transiently during use.
                Processing occurs only as technically required to enable functionality and is not retained by Neo-Slow.
              </p>
            </div>

            <div>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                3.3 What Neo-Slow Does Not Do
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow does not:
              </p>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>create user accounts</li>
                <li style={{ marginBottom: '0.5rem' }}>store user content</li>
                <li style={{ marginBottom: '0.5rem' }}>track user behavior</li>
                <li style={{ marginBottom: '0.5rem' }}>collect personal identifiers</li>
                <li style={{ marginBottom: '0.5rem' }}>use analytics or advertising tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            4. No Storage
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow does not store user content.
            All processing is temporary and limited to the duration of use.
          </p>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            5. No Third-Party Sharing
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow does not:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>share data with third parties</li>
            <li style={{ marginBottom: '0.5rem' }}>sell data</li>
            <li style={{ marginBottom: '0.5rem' }}>use external analytics services</li>
          </ul>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            6. No Cookies or Tracking
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow does not use:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>cookies (in core functionality)</li>
            <li style={{ marginBottom: '0.5rem' }}>tracking technologies</li>
            <li style={{ marginBottom: '0.5rem' }}>analytics tools</li>
          </ul>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            7. Security
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow applies appropriate technical measures to ensure secure processing.
            Processing is designed to minimize exposure by avoiding persistent storage.
            Device-level security remains the responsibility of the user.
          </p>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            8. Your Rights
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            To the extent that personal data is processed, you may have rights under applicable data protection laws, including:
          </p>
          <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
            <li style={{ marginBottom: '0.5rem' }}>Access</li>
            <li style={{ marginBottom: '0.5rem' }}>Rectification</li>
            <li style={{ marginBottom: '0.5rem' }}>Erasure</li>
            <li style={{ marginBottom: '0.5rem' }}>Restriction</li>
            <li style={{ marginBottom: '0.5rem' }}>Portability</li>
            <li style={{ marginBottom: '0.5rem' }}>Objection</li>
          </ul>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            9. Children's Privacy
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Neo-Slow is not intended for children under 16.
          </p>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            10. Changes
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            This policy may be updated to reflect changes in the system.
          </p>
        </section>

        <section>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            11. Contact
          </h2>
          <p style={{ margin: 0, lineHeight: 1.8 }}>
            Email: yes@neoslow.com<br />
            Website: https://neoslow.com
          </p>
        </section>

        <div style={{ 
          marginTop: '6rem',
          paddingTop: '8rem',
          borderTop: '1px solid var(--color-border)'
        }}>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '3rem',
            fontWeight: '300',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem',
            lineHeight: 1.8,
            textAlign: 'left'
          }}>
            Terms of Use
          </h2>
          
          <p style={{ 
            fontFamily: 'var(--font-body)', 
            fontSize: '1.1rem',
            fontWeight: '500',
            color: 'var(--color-text-secondary)',
            marginBottom: '4rem',
            lineHeight: 1.8
          }}>
            Effective Date: May 2026
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                1. Acceptance of Terms
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                By using Neo-Slow, you agree to these Terms.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                2. Nature of the Product
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow is a system for:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>reflection</li>
                <li style={{ marginBottom: '0.5rem' }}>structuring content</li>
                <li style={{ marginBottom: '0.5rem' }}>exploring ideas</li>
              </ul>
              <p style={{ marginTop: '1rem', marginBottom: 0, lineHeight: 1.8 }}>
                Neo-Slow is not:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>a medical device</li>
                <li style={{ marginBottom: '0.5rem' }}>a professional advisory service</li>
                <li style={{ marginBottom: '0.5rem' }}>a decision-making authority</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                3. Intended Use
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                You may use Neo-Slow for:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>writing and ideation</li>
                <li style={{ marginBottom: '0.5rem' }}>conceptual exploration</li>
                <li style={{ marginBottom: '0.5rem' }}>reflective processes</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                4. User Responsibility
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                You are responsible for:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>your inputs</li>
                <li style={{ marginBottom: '0.5rem' }}>your interpretation of outputs</li>
                <li style={{ marginBottom: '0.5rem' }}>decisions based on outputs</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                5. Limitations of the System
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Content processed through Neo-Slow may be incomplete, inaccurate, or context-dependent.
                It should not be considered a reliable basis for decisions.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                6. No Professional Advice
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow does not provide:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>medical advice</li>
                <li style={{ marginBottom: '0.5rem' }}>legal advice</li>
                <li style={{ marginBottom: '0.5rem' }}>financial advice</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                7. Data Handling
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow does not store user content.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                8. Intellectual Property
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ 
                    fontFamily: 'var(--font-headline)', 
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.8
                  }}>
                    8.1 The Software
                  </h4>
                  <p style={{ margin: 0, lineHeight: 1.8 }}>
                    Neo-Slow (code, design, concept) remains the property of its creator.
                  </p>
                </div>
                <div>
                  <h4 style={{ 
                    fontFamily: 'var(--font-headline)', 
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    marginBottom: '1.5rem',
                    lineHeight: 1.8
                  }}>
                    8.2 User Content
                  </h4>
                  <p style={{ margin: 0, lineHeight: 1.8 }}>
                    Users retain all rights to their own content.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                9. Acceptable Use
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                You agree not to:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>use Neo-Slow for unlawful purposes</li>
                <li style={{ marginBottom: '0.5rem' }}>misuse the system</li>
                <li style={{ marginBottom: '0.5rem' }}>distribute harmful content through it</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                10. Availability
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow is provided without guarantee of availability or error-free operation.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                11. Limitation of Liability
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                To the extent permitted by law, Neo-Slow is not liable for:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', lineHeight: 1.8 }}>
                <li style={{ marginBottom: '0.5rem' }}>decisions made based on processed content</li>
                <li style={{ marginBottom: '0.5rem' }}>indirect or consequential damages</li>
              </ul>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                12. Updates
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Neo-Slow may be modified or updated at any time.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                13. Governing Law
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                These Terms are governed by the laws of Germany / European Union.
              </p>
            </section>

            <section>
              <h3 style={{ 
                fontFamily: 'var(--font-headline)', 
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                marginBottom: '1.5rem',
                lineHeight: 1.8
              }}>
                14. Contact
              </h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>
                Email: yes@neoslow.com<br />
                Website: https://neoslow.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
