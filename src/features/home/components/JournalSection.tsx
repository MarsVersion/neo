export default function JournalSection() {
  const entries = [
    { date: "2024.03.15", title: "On the nature of unrealized ideas" },
    { date: "2024.03.10", title: "Silicon dreams and digital gardens" },
    { date: "2024.03.05", title: "The architecture of thought" }
  ];

  return (
    <section style={{ padding: '4rem 0' }}>
      <h2 style={{ 
        fontSize: '2rem', 
        fontFamily: 'var(--font-headline)',
        marginBottom: '3rem',
        fontWeight: 400
      }}>
        From the Journal
      </h2>
      
      <div style={{ maxWidth: '800px' }}>
        {entries.map((entry, index) => (
          <div
            key={index}
            style={{
              padding: '1.5rem 0',
              borderBottom: index < entries.length - 1 ? '1px solid var(--color-border)' : 'none'
            }}
          >
            <div style={{
              fontSize: '0.875rem',
              fontFamily: 'var(--font-label)',
              color: 'var(--color-text-secondary)',
              marginBottom: '0.5rem'
            }}>
              {entry.date}
            </div>
            <h3 style={{
              fontSize: '1.125rem',
              fontFamily: 'var(--font-headline)',
              fontWeight: 400,
              marginBottom: '0.5rem'
            }}>
              <a href="/journal" style={{ color: 'var(--color-text-primary)' }}>
                {entry.title}
              </a>
            </h3>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <a 
          href="/journal"
          style={{
            fontFamily: 'var(--font-label)',
            color: 'var(--color-accent)',
            fontSize: '0.875rem'
          }}
        >
          Read more →
        </a>
      </div>
    </section>
  );
}
