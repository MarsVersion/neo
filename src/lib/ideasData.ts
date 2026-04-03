export interface Idea {
  slug: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  tags: string[];
}

export const ideas: Idea[] = [
  {
    slug: 'real-symbolic-imaginary',
    title: 'Real, Symbolic, Imaginary',
    type: 'Unrealized Curatorial Project',
    year: 2020,
    description: 'A curatorial project exploring North Korea as reality, projection, and imagination. Based on collected materials, it examines how images are constructed when access is limited.',
    image: '/assets/images/UP-RSI.jpg',
    tags: ['Mediated Reality', 'Geopolitical Imagination', 'Translation of Material']
  },
  {
    slug: 'neo-slow-hardware',
    title: 'Neo-Slow Hardware',
    type: 'Unrealized Hardware Concept',
    year: 2025,
    description: 'A ritual, pocket-sized companion that responds without interpreting. Activated by a deliberate gesture, it replaces interaction with quiet perception.',
    image: '/assets/images/UP-NS-Hardware.jpg',
    tags: ['Calm Technology', 'Privacy by Design', 'Non-Interpretive AI']
  }
];
