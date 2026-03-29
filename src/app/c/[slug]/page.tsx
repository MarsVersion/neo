export default function ContributorPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container section">
      <h1 className="text-large">Contributor: {params.slug}</h1>
      <p className="text-medium" style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
        Profile and contributions from: {params.slug}
      </p>
    </div>
  );
}
