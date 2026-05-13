import SectionBackLink from '@/components/SectionBackLink';
import { ideas } from '@/lib/ideasData';

export async function generateStaticParams() {
  return ideas.map((idea) => ({ slug: idea.slug }));
}

export default async function IdeaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="container section">
      <h1 className="text-large">Idea: {slug}</h1>
      <p className="text-medium" style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
        Exploring the unrealized idea: {slug}
      </p>
      <div
        style={{
          marginTop: '3rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--color-border)'
        }}
      >
        <SectionBackLink href="/ideas/">Ideas</SectionBackLink>
      </div>
    </div>
  );
}
