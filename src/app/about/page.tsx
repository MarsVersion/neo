export default function About() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20rem 2rem' }}>
      <h1 style={{ 
        fontFamily: 'var(--font-headline)', 
        fontSize: '4rem',
        fontWeight: '400',
        color: 'var(--color-text-primary)',
        marginBottom: '2rem',
        lineHeight: 1.8,
        textAlign: 'left'
      }}>
        About Neo Slow
      </h1>

      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1rem',
        color: 'var(--color-text-primary)',
        lineHeight: 1.8,
        textAlign: 'left'
      }}>
        <section style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            Concept
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Neo-Slow is a curated platform for unrealized ideas in art, technology, and creative research.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            It documents concepts before they are built, written, or realized —<br />
            ideas that already exist, but remain in a latent state.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Neo-Slow archives these ideas as they emerge and creates an ecosystem where they can take root.
          </p>
        </section>

        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--color-border)',
          margin: '6rem 0'
        }} />

        <section style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            Why
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Important ideas are often seen too late — or not at all.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            We know them through fragments: notebooks, sketches, traces left behind.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Leonardo da Vinci&apos;s notebooks revealed concepts centuries after they were conceived.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Neo-Slow makes these ideas visible earlier —<br />
            before they depend on execution or recognition.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Unrealized ideas are not failures.<br />
            They are latent futures.
          </p>
        </section>

        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--color-border)',
          margin: '6rem 0'
        }} />

        <section style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            What Neo-Slow Does
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Neo-Slow operates as a living structure:
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, paddingLeft: '2rem' }}>
            •&nbsp;&nbsp;Archive — documents unrealized ideas across disciplines
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, paddingLeft: '2rem' }}>
            •&nbsp;&nbsp;Connect — is a core principle: ideas gain meaning through their relationships
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8, paddingLeft: '2rem' }}>
            •&nbsp;&nbsp;Sustain — sustains ideas in their latent state
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            It does not collect outcomes.<br />
            It holds potential.
          </p>
          <p style={{ marginBottom: '1.5rem',  fontWeight: '800',lineHeight: 1.8 }}>
            Neo-Slow is not an archive of the past, but an infrastructure for the not-yet.
          </p>
        </section>

        <hr style={{
          border: 'none',
          borderTop: '1px solid var(--color-border)',
          margin: '6rem 0'
        }} />

        <section style={{ marginBottom: '6rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: '1.25rem',
            fontWeight: '800',
            color: 'var(--color-text-primary)',
            marginBottom: '1.5rem',
            lineHeight: 1.8
          }}>
            Initiated by
          </h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Neo-Slow is developed as an independent practice by <span style={{ fontWeight: '800' }}>Jung Me Chai</span>, a curator working across contemporary art, technology, and research.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            She is a curator and former director of <span style={{ fontWeight: '800' }}>DISKURS Berlin</span>, and developed <span style={{ fontWeight: '800' }}>Busy Mars</span>, an AI-based platform for discovering artists, curators, and cultural practitioners. Her work spans exhibitions, biennials, and institutional collaborations in Europe and Korea, alongside writing on contemporary art.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            The platform is shaped through a hybrid mode of authorship:<br />
            a single curatorial direction, extended through close collaboration with AI systems as tools for thinking, structuring, and building.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            This approach does not replace authorship — it expands its scale and capacity.
          </p>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            At its core, it remains human: defined by decisions about what to keep, what to connect, and what to make visible.
          </p>
        </section>
      </div>
    </div>
  );
}
