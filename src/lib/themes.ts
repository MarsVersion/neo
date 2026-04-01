export interface Theme {
  slug: string;
  name: string;
  description: string;
}

export const themes: Theme[] = [
  {
    slug: 'observation',
    name: 'Observation',
    description: 'A way of perceiving'
  },
  {
    slug: 'process',
    name: 'Process',
    description: 'The formation of ideas'
  },
  {
    slug: 'concept',
    name: 'Concept',
    description: 'A structure in formation'
  },
  {
    slug: 'images',
    name: 'Images',
    description: 'How images shape reality'
  },
  {
    slug: 'objects',
    name: 'Objects',
    description: 'Material presence and form'
  },
  {
    slug: 'unbuilt',
    name: 'Unbuilt',
    description: 'Ideas not yet realized'
  },
  {
    slug: 'archives',
    name: 'Archives',
    description: 'Fragments and documents'
  },
  {
    slug: 'systems',
    name: 'Systems',
    description: 'Structures shaping behavior'
  }
];

export const themeSections = [
  {
    title: 'Formation',
    themes: themes.filter(t => ['observation', 'process', 'concept'].includes(t.slug))
  },
  {
    title: 'Manifestation',
    themes: themes.filter(t => ['objects', 'unbuilt'].includes(t.slug))
  },
  {
    title: 'Context',
    themes: themes.filter(t => ['images', 'archives', 'systems'].includes(t.slug))
  }
];
