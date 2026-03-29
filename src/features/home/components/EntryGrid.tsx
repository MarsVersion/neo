export default function EntryGrid() {
  const entries = [
    { id: 1, title: "Digital Garden", category: "Research" },
    { id: 2, title: "Sound Sculpture", category: "Art" },
    { id: 3, title: "Memory Palace", category: "Technology" },
    { id: 4, title: "Echo Chamber", category: "Research" },
    { id: 5, title: "Light Installation", category: "Art" },
    { id: 6, title: "Algorithmic Dreams", category: "Technology" }
  ];

  return (
    <section style={{ padding: '4rem 0' }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontFamily: 'var(--font-headline)',
        marginBottom: '3rem',
        fontWeight: 400
      }}>
        Recent Entries
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {entries.map((entry) => (
          <div
            key={entry.id}
            style={{
              padding: '2rem',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: '4px',
              transition: 'border-color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            <div style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-label)',
              color: 'var(--color-accent)',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {entry.category}
            </div>
            <h3 style={{
              fontSize: '1.25rem',
              fontFamily: 'var(--font-headline)',
              marginBottom: '1rem',
              fontWeight: 400
            }}>
              {entry.title}
            </h3>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.5
            }}>
              An exploration of unrealized potential and creative possibilities.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
