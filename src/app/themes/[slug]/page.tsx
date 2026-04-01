import { notFound } from 'next/navigation';
import { themes } from '@/lib/themes';
import ThemeDetail from '@/components/ThemeDetail';

export default async function ThemePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const theme = themes.find(t => t.slug === slug);
  
  if (!theme) {
    notFound();
  }
  
  return <ThemeDetail theme={theme} allThemes={themes} />;
}
