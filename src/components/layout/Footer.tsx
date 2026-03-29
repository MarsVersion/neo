'use client';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      backgroundColor: 'var(--color-bg-primary)',
      padding: '5rem 5rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2rem'
      }}>
        
        {/* Left: Logo */}
        <div style={{
          fontFamily: 'var(--font-label)',
          fontSize: '3rem',
          fontWeight: '300',
          color: 'var(--color-text-primary)'
        }}>
          Neo Slow
        </div>
        
        {/* Center: Navigation */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center'
        }}>
          <a 
            href="/privacy" 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.3rem',
              fontWeight: '300',
              color: 'white',
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
            Privacy Policy
          </a>
          <a 
            href="/contact" 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize:'1.3rem',
              fontWeight: '300',
              color: 'white',
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
            Contact
          </a>
        </div>
        
        {/* Right: Social + Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Social Icons */}
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          
          {/* Copyright */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize:'1.3rem',
            fontWeight: '300',
            color: 'white',
            margin: 0
          }}>
            &copy; Neo Slow 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
