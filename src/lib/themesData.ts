export interface Theme {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export const themes: Theme[] = [
  {
    slug: 'observation',
    name: 'Observation',
    description: 'A way of perceiving',
    image: '/assets/images/themes/observation.jpg',
    tags: ['Perception', 'Seeing', 'Awareness']
  },
  {
    slug: 'process',
    name: 'Process',
    description: 'The formation of ideas',
    image: '/assets/images/themes/process.jpg',
    tags: ['Formation', 'Development', 'Method']
  },
  {
    slug: 'concept',
    name: 'Concept',
    description: 'A structure in formation',
    image: '/assets/images/themes/concept.jpg',
    tags: ['Structure', 'Framework', 'Idea']
  },
  {
    slug: 'images',
    name: 'Images',
    description: 'How images shape reality',
    image: '/assets/images/themes/images.jpg',
    tags: ['Visual', 'Reality', 'Representation']
  },
  {
    slug: 'objects',
    name: 'Objects',
    description: 'Material manifestations of thought',
    image: '/assets/images/themes/objects.jpg',
    tags: ['Material', 'Physical', 'Manifestation']
  },
  {
    slug: 'language',
    name: 'Language',
    description: 'The limits of thought',
    image: '/assets/images/themes/language.jpg',
    tags: ['Communication', 'Expression', 'Limits']
  },
  {
    slug: 'time',
    name: 'Time',
    description: 'Temporal dimensions of ideas',
    image: '/assets/images/themes/time.jpg',
    tags: ['Temporal', 'Duration', 'Chronology']
  },
  {
    slug: 'space',
    name: 'Space',
    description: 'Where ideas exist',
    image: '/assets/images/themes/space.jpg',
    tags: ['Location', 'Environment', 'Context']
  }
];
