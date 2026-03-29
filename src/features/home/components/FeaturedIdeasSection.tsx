export default function FeaturedIdeasSection() {
  const ideas = [
    { title: "Quantum Poetry", description: "Where computation meets verse" },
    { title: "Silicon Memories", description: "Preserving digital consciousness" },
    { title: "Echo Networks", description: "Connecting thoughts across time" }
  ];

  return (
    <section style={{ 
      padding: '4rem 0',
      backgroundColor: 'var(--color-bg-secondary)',
      margin: '4rem 0',
      borderRadius: '8px'
    }}>
      <div className="container">
        <h2 style={{ 
          fontSize: '2rem', 
          fontFamily: 'var(--font-headline)',
          marginBottom: '3rem',
          fontWeight: 400,
          textAlign: 'center'
        }}>
          Featured Ideas
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem'
        }}>
          {ideas.map((idea, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontFamily: 'var(--font-headline)',
                marginBottom: '1rem',
                fontWeight: 400,
                color: 'var(--color-accent)'
              }}>
                {idea.title}
              </h3>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.5
              }}>
                {idea.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
