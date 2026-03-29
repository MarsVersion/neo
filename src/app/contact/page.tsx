'use client';

export default function Contact() {
  return (
    <div className="container section" style={{ maxWidth: '1800px', margin: '0 auto', padding: '16rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '5rem',
        fontWeight: '400',
        color: 'var(--color-text-primary)',
        marginBottom: '1rem',
        lineHeight: 1.2,
        textAlign: 'center'
      }}>
        Contact
      </h1>
      
      <p style={{ 
        fontFamily: 'var(--font-body)', 
        fontSize: '2rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '6rem',
        lineHeight: 1.6,
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto 6rem auto'
      }}>
        For thoughtful communication and meaningful connections, reach out through the channels below.
      </p>

      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4rem'
      }}>
        {/* Email Contact */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 0'
        }}>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '2rem'
          }}>
            Email
          </h2>
          <a 
            href="mailto:yes@neoslow.com"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '2rem',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            yes@neoslow.com
          </a>
        </section>

        {/* Contact Form */}
        <section style={{
          padding: '4rem 0'
        }}>
          <h2 style={{ 
            fontFamily: 'var(--font-headline)', 
            fontSize: '3rem',
            fontWeight: '400',
            color: 'var(--color-text-primary)',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Message
          </h2>
          
          <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div>
              <label style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.5rem',
                color: 'var(--color-text-secondary)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Name
              </label>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.5rem',
                color: 'var(--color-text-secondary)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Email
              </label>
              <input
                type="email"
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.5rem',
                color: 'var(--color-text-secondary)',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Message
              </label>
              <textarea
                rows={6}
                style={{
                  width: '100%',
                  padding: '1rem',
                  fontSize: '1.5rem',
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                  resize: 'vertical'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-accent)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '1.5rem',
                fontWeight: '400',
                color: 'var(--color-text-primary)',
                backgroundColor: 'transparent',
                border: '1px solid var(--color-border)',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                alignSelf: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-accent)';
                e.currentTarget.style.color = 'var(--color-accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-border)';
                e.currentTarget.style.color = 'var(--color-text-primary)';
              }}
              onClick={(e) => {
                e.preventDefault();
                // Form submission logic would go here
                alert('Thank you for your message. We\'ll respond thoughtfully.');
              }}
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Additional Information */}
        <section style={{
          textAlign: 'center',
          padding: '4rem 0',
          borderTop: '1px solid var(--color-border)'
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.5rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.7,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We welcome thoughtful correspondence about ideas, collaborations, or reflections. 
            Each message is read with care and consideration.
          </p>
        </section>
      </div>
    </div>
  );
}
