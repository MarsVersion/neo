export default function ThemePage({ params }: { params: { slug: string } }) {
  return (
    <div className="container section">
      <h1 className="text-large">Theme: {params.slug}</h1>
      <p className="text-medium" style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
        Exploring the theme: {params.slug}
      </p>
    </div>
  );
}
