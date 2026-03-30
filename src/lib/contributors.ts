export interface Contributor {
  slug: string;
  name: string;
  role: string;
  shortDescription: string;
  fullBio: string;
  sections?: {
    title: string;
    content: string | string[];
  }[];
  links?: {
    title: string;
    url: string;
  }[];
  image?: string;
}

export const contributors: Contributor[] = [
  {
    slug: 'jung-me-chai',
    name: 'Jung Me Chai',
    role: 'Curator, Writer, Creative Technologist',
    shortDescription: 'Jung Me Chai is a curator, writer, and creative technologist working across art, research, and digital systems. She develops curatorial frameworks that connect unrealized ideas across physical and digital space.',
    fullBio: 'Jung Me Chai is a curator, writer, and creative technologist working across art, research, and digital systems.\n\nHer practice focuses on the conditions under which ideas emerge, connect, and remain unrealized. Moving between exhibition-making and technological development, she explores how curatorial thinking can extend beyond physical space into structured, networked environments.\n\nShe is the founder of Neo-Slow — a platform dedicated to mapping unrealized ideas as latent futures — as well as HybridCurator and Busy Mars, which expand curatorial practice into digital and AI-driven contexts.\n\nShe previously directed Diskurs Berlin and has curated exhibitions and projects across Europe and Korea.',
    links: [
      { title: 'HybridCurator', url: 'https://hybridcurator.com/' },
      { title: 'Busy Mars', url: 'https://www.busymars.com/' },
      { title: 'Discursus', url: 'https://www.discursus.info/' }
    ],
    image: '/assets/images/Contributors images/JMC.jpg'
  },
  {
    slug: 'marcus-steinweg',
    name: 'Marcus Steinweg',
    role: 'German Philosopher',
    shortDescription: 'Marcus Steinweg is a German philosopher whose work moves between philosophy, art, and literature, exploring subjectivity, abstraction, and the conditions of thought.',
    fullBio: 'Marcus Steinweg is a German philosopher whose work moves between philosophy, art, and literature. His writing explores questions of subjectivity, abstraction, and the conditions of thought, often engaging with contemporary artistic practices.\n\nThrough essays, lectures, and collaborations with artists, he develops a mode of thinking that resists fixed systems, emphasizing openness, intensity, and conceptual rigor.',
    sections: [
      {
        title: 'Selected publications',
        content: [
          'Subjekt und Wahrheit (2000)',
          'Der absolute Ort (2002)',
          'Behauptungen (2005)',
          'Inaesthetik (2007)',
          'Die Philosophie der Übertreibung (2009)',
          'Aporien der Liebe (2010)',
          'Manifest des Nihilismus (2011)',
          'Philosophie der Schwelle (2013)',
          'Der Ausnahmezustand (2014)',
          'Metaphysik der Leere (2014)',
          'Evidenzterror (2015)',
          'Entzug des Denkens (2015)',
          'Philosophie nach Nietzsche (2016)',
          'Dichtung und Wahrheit (2017)',
          'Kunst und Philosophie (2018)',
          'Subjektivität und Selbstdifferenz (2018)',
          'Absolutheit (2019)',
          'Metaphysik der Entscheidung (2020)',
          'Das Subjekt und seine Masken (2020)',
          'Quantenphilosophie (2021)',
          'Fetzen (with Marie Rotkopf, 2022)',
          'Sprachlöcher (2023)',
          'Kafka (with Sonja Dierks, 2024)',
          'Schnipsel (2025)'
        ]
      }
    ],
    image: '/assets/images/Contributors images/Marcus Steinweg.jpg'
  },
  {
    slug: 'li-zhenhua',
    name: 'Li Zhenhua',
    role: 'Curator',
    shortDescription: 'Li Zhenhua is a curator and writer working across contemporary art, media art, and digital culture, with a focus on moving image, digital systems, and cross-cultural exchange.',
    fullBio: 'Li Zhenhua is a curator and writer working at the intersection of contemporary art, media art, and digital culture. His practice focuses on the impact of technology on artistic production and the evolving conditions of exhibition-making in a networked world.\n\nHe has worked extensively with international institutions and artists, and has served as curator for media art at Art Basel Hong Kong. His projects often engage with moving image, digital systems, and cross-cultural dialogue.',
    sections: [
      {
        title: 'Selected curatorial projects and roles',
        content: [
          'Film Curator, Art Basel Hong Kong (2014–2024)',
          'Curator, Noor Riyadh (2025)',
          'Curator, Glow Shenzhen Festival (Futian District) (2025)',
          'Curator, Main Project, 3rd Ural Industrial Biennial of Contemporary Art',
          'Heat: Zhang Yuan Solo Exhibition, Nanjing (2010)',
          'Wave Project, Walker Art Center',
          'Digital Revolution, Barbican Centre, London (Advisory Board, 2014)',
          'Various Art Basel Hong Kong Film Programs'
        ]
      },
      {
        title: 'Platforms and initiatives',
        content: [
          'Founder, Laboratory Art Beijing (2006)',
          'Founder, Mustard Seed Garden',
          'Organizer, MAAP New Media Art Festival (Beijing edition)'
        ]
      },
      {
        title: 'Film and cross-media projects',
        content: [
          'Producer, Poet on a Business Trip (Ju Anqi, 2015)',
          'Producer, I Am Chinese (Shen Shaomin, 2007)'
        ]
      },
      {
        title: 'Advisory and nomination roles',
        content: [
          'Nominator, Prix Pictet',
          'Nominator, Sovereign Asian Art Prize',
          'Nominator, Future Generation Art Prize',
          'Advisor, Digital Revolution Exhibition, Barbican Centre'
        ]
      }
    ],
    image: '/assets/images/Contributors images/BM Li Zhenhua.png'
  },
  {
    slug: 'aes-f',
    name: 'AES+F',
    role: 'Artist Collective',
    shortDescription: 'AES+F is an artist collective working across video, digital imagery, and immersive installation, constructing hyperreal image worlds between reality, simulation, and myth.',
    fullBio: 'AES+F is an artist collective working across video, digital imagery, and immersive installation. Their practice combines photography, 3D animation, and cinematic composition to construct hyperreal, symbolic worlds that reflect on globalization, power, and contemporary mythologies.\n\nTheir large-scale works operate between reality and fiction, often staging suspended, ambiguous narratives that resist linear interpretation.',
    sections: [
      {
        title: 'Biennials and major exhibitions',
        content: [
          '52nd Venice Biennale — Russian Pavilion, Last Riot (2007)',
          '53rd Venice Biennale — The Feast of Trimalchio (2009)',
          '56th Venice Biennale — Inverso Mundus (2015)',
          '4th Moscow Biennale of Contemporary Art — Allegoria Sacra (2011)',
          '17th Sydney Biennale (2010)',
          'Gwangju Biennale',
          'Lyon Biennale',
          'Havana Biennale',
          'Istanbul Biennale',
          'Gothenburg Biennial',
          'Tirana Biennale',
          'Bratislava Biennale'
        ]
      },
      {
        title: 'Major institutional exhibitions',
        content: [
          'Martin-Gropius-Bau, Berlin — The Liminal Space Trilogy (2012)',
          'Moscow Manege — The Liminal Space Trilogy (2012)',
          'Albright-Knox Art Gallery, Buffalo (2015)',
          'Faena Arts Center, Buenos Aires (2013)'
        ]
      }
    ],
    image: '/assets/images/Contributors images/AESF.jpg'
  }
];
