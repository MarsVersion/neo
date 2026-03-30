import { notFound } from 'next/navigation';
import { contributors, Contributor } from '@/lib/contributors';
import ContributorDetail from '@/components/ContributorDetail';

interface ContributorPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ContributorPage({ params }: ContributorPageProps) {
  const { slug } = await params;
  const contributor = contributors.find(c => c.slug === slug);

  if (!contributor) {
    notFound();
  }

  return <ContributorDetail contributor={contributor} />;
}

export async function generateStaticParams() {
  return contributors.map((contributor) => ({
    slug: contributor.slug,
  }));
}
