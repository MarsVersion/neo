import SectionBackLink from '@/components/SectionBackLink';
import { contributors } from '@/lib/contributors';

export async function generateStaticParams() {
  return contributors.map((c) => ({ slug: c.slug }));
}

export default async function ContributorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container section">
      <h1 className="text-large">Contributor: {slug}</h1>
      <p className="text-medium" style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
        Profile and contributions from: {slug}
      </p>
      <div
        style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)'
        }}
      >
        <SectionBackLink href="/contributors/">Contributors</SectionBackLink>
      </div>
    </div>
  );
}
