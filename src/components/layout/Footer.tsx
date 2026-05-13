"use client";

import { withBasePath } from "@/lib/sitePath";

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
            href={withBasePath("/privacy/")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.3rem",
              fontWeight: "300",
              color: "white",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Privacy Policy
          </a>
          <a
            href={withBasePath("/contact/")}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.3rem",
              fontWeight: "300",
              color: "white",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Contact
          </a>
        </div>
        
        {/* Right: Social + Copyright */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        }}>
          <a
            href="https://www.instagram.com/neos_low/"
            target="_blank"
            rel="noopener noreferrer"
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
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61589408591200"
            target="_blank"
            rel="noopener noreferrer"
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
            Facebook
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
