export interface Idea {
  id: string;
  title: string;
  description: string;
  type: string;
  year: number;
  contributor: string;
  themes: string[];
  content?: string;
}

export const curatedIdeas: Idea[] = [
  {
    id: 'silent-archives',
    title: 'Silent Archives',
    description: 'A system for preserving unrecorded conversations and forgotten sounds in urban spaces.',
    type: 'Installation',
    year: 2023,
    contributor: 'Anna Klein',
    themes: ['archives', 'observation'],
    content: 'This project explores the acoustic memory of cities, capturing and preserving sounds that exist at the edge of perception...'
  },
  {
    id: 'unbuilt-chamber',
    title: 'Unbuilt Chamber',
    description: 'An architectural space that exists only through description and collective imagination.',
    type: 'Concept',
    year: 2024,
    contributor: 'Marcus Rodriguez',
    themes: ['unbuilt', 'concept'],
    content: 'The Unbuilt Chamber materializes through language, existing simultaneously in multiple minds yet never in physical form...'
  },
  {
    id: 'slow-interface',
    title: 'Slow Interface',
    description: 'A digital environment that deliberately resists efficiency and encourages contemplative interaction.',
    type: 'Digital Work',
    year: 2023,
    contributor: 'Sarah Chen',
    themes: ['process', 'systems'],
    content: 'In an age of acceleration, the Slow Interface introduces temporal friction as a design principle...'
  },
  {
    id: 'material-memory',
    title: 'Material Memory',
    description: 'Objects that retain and communicate traces of their previous interactions and environments.',
    type: 'Sculpture',
    year: 2024,
    contributor: 'James Laurent',
    themes: ['objects', 'archives'],
    content: 'These objects serve as vessels for accumulated experience, their surfaces recording passage through time...'
  },
  {
    id: 'perception-lens',
    title: 'Perception Lens',
    description: 'An optical device that reveals hidden patterns in everyday visual information.',
    type: 'Device',
    year: 2023,
    contributor: 'Anna Klein',
    themes: ['observation', 'images'],
    content: 'The Perception Lens operates as a prosthetic for attention, revealing what typically remains unseen...'
  },
  {
    id: 'formation-field',
    title: 'Formation Field',
    description: 'A responsive environment that visualizes the emergence and development of ideas in real-time.',
    type: 'Installation',
    year: 2024,
    contributor: 'Sarah Chen',
    themes: ['process', 'concept'],
    content: 'This installation makes visible the normally invisible processes of conceptual development...'
  }
];

export function getIdeasByTheme(themeSlug: string): Idea[] {
  return curatedIdeas
    .filter(idea => idea.themes.includes(themeSlug))
    .slice(0, 6); // Limit to 6 curated ideas per theme
}
