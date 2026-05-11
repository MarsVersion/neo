export interface JournalEntry {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'the-last-human-curator',
    title: 'The Last Human Curator',
    subtitle: 'What Remains When Machines Learn to Curate?',
    image: '/assets/nav_journal/Journal TLHC Dawn-Woolley.png'
  },
  {
    slug: 'museum-without-walls',
    title: 'Museum Without Walls',
    subtitle: 'Reclaiming the Urban Screen',
    image: '/assets/nav_journal/Journal MWW.jpg'
  },
  {
    slug: 'eva-adele-lamour-du-risque',
    title: 'World Report Berlin: EVA & ADELE, L’Amour du Risque',
    subtitle: 'When Art Becomes a Way of Life',
    image: '/assets/nav_journal/Journal EVA & ADELE .jpeg'
  },
  {
    slug: 'thomas-olbricht-me-collectors-room',
    title: 'Thomas Olbricht’s ME Collectors Room',
    subtitle: 'Collecting as a Cabinet of Curiosities',
    image: '/assets/nav_journal/SJournal MeCollec.png'
  }
];

