export default function IdeaPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container section">
      <h1 className="text-large">Idea: {params.slug}</h1>
      <p className="text-medium" style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
        Exploring the unrealized idea: {params.slug}
      </p>
    </div>
  );
}
