export interface Idea {
  slug: string;
  title: string;
  type: string;
  year: number;
  description: string;
  image: string;
  tags: string[];
  /** Optional line shown on the card between title and type/year (existing ideas omit this). */
  subtitle?: string;
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
  },
  {
    slug: 'museum-without-walls',
    title: 'Museum Without Walls',
    type: 'Unrealized Urban Media Project',
    year: 2026,
    subtitle: 'Where billboards become art.',
    description:
      'Museum Without Walls proposes transforming existing LED advertising screens in the city into a temporary public media exhibition.',
    image: '/assets/nav_images/MWW1.png',
    tags: ['Public Space', 'Urban Media', 'Collective Experience']
  },
  {
    slug: 'the-last-human-curator',
    title: 'The Last Human Curator',
    type: 'Unrealized Curatorial Scenario',
    year: 2026,
    subtitle: 'A near-future museum after curatorial automation.',
    description:
      'The Last Human Curator imagines a near-future museum in which artificial intelligence systems have assumed nearly all curatorial and institutional functions.',
    image: '/assets/nav_images/tlhc.jpg',
    tags: ['AI Curation', 'Museum Futures', 'Human Judgment']
  }
];
