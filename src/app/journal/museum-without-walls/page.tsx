'use client';

import JournalArticleLayout from '@/components/JournalArticleLayout';
import metaStyles from '@/components/JournalArticleLayout.module.css';

export default function JournalMuseumWithoutWalls() {
  const metadata = (
    <>
      <div className={metaStyles.metaRow}>Type: Unrealized Project Proposal</div>
      <div className={metaStyles.metaRow}>Author: Jung Me Chai</div>
      <div className={metaStyles.metaRow}>Project: Neo-Slow Archive</div>
      <div className={metaStyles.metaRow}>Status: Unrealized</div>
      <div className={metaStyles.metaRow}>Publication Date: May 2026</div>
      <div className={metaStyles.metaRow}>
        Themes: Public Space, Collective Experience, Urban Media, Art Beyond Institutions
      </div>
      <div className={`${metaStyles.metaRow} ${metaStyles.metaSpaced}`}>
        Photo: Amit Goffer, God&apos;s Biometric Data
      </div>
    </>
  );

  return (
    <JournalArticleLayout
      title="Museum Without Walls"
      deck="Reclaiming the Urban Screen"
      metadata={metadata}
      cover={{
        src: '/assets/nav_journal/Journal MWW.jpg',
        alt: 'Museum Without Walls',
      }}
    >
      <p>
        In most contemporary cities, the visual field has been thoroughly commercialized. Rooftops, façades, transit hubs, and intersections are saturated with LED displays engineered to capture attention and convert it into economic value. These luminous surfaces no longer merely advertise products; they shape the rhythm of perception itself.
      </p>
      <p>
        Museum Without Walls (MWW) proposes a simple but radical reversal. Instead of selling commodities, the city’s existing advertising infrastructure would be temporarily repurposed to present art.
      </p>
      <p>
        Over the course of approximately one kilometer, LED billboards mounted across an urban corridor would synchronize to display curated moving-image works, experimental cinema, generative animations, and newly commissioned digital pieces. The intervention requires no new architecture. The exhibition emerges through a shift in programming rather than construction.
      </p>
      <p>The result is a museum without a building.</p>
      <p>
        Visitors do not purchase tickets or cross a threshold. They encounter the exhibition while waiting at traffic lights, walking home, or looking out from a bus window. Art appears within the ordinary flow of urban life, dissolving the institutional distinction between designated cultural space and everyday experience.
      </p>
      <p>
        The project recalls the legacy of the “museum without walls,” a concept articulated by André Malraux, who imagined art liberated from the constraints of architecture and geography. Yet while Malraux’s vision depended on photographic reproduction, Museum Without Walls operates directly within the contemporary attention economy. It appropriates the very surfaces through which commercial images dominate public consciousness.
      </p>
      <p>
        The proposal also extends a lineage of public media interventions, from Times Square Arts to Piccadilly Lights and Seoul’s urban media façades. What distinguishes MWW is its ambition to transform an entire corridor into a distributed exhibition environment, turning the street itself into both architecture and audience.
      </p>
      <p>
        The curatorial implications are significant. Moving-image works would no longer be experienced in darkened galleries under ideal conditions, but amid traffic noise, weather, and distraction. The city becomes an active collaborator, introducing chance and unpredictability into the viewing experience. Reflection in glass, passing headlights, and fragmented attention become part of the work.
      </p>
      <p>
        At its best, Museum Without Walls democratizes access to contemporary art. It offers a collective encounter that does not depend on admission fees, prior knowledge, or institutional familiarity. For a brief period, public space is reclaimed as a site of shared imagination rather than commercial persuasion.
      </p>
      <p>Yet the proposal also raises important questions.</p>
      <p>
        Can art truly subvert a medium designed for advertising, or does it risk becoming another form of ambient spectacle? Does the insertion of cultural content into corporate infrastructure constitute a meaningful transformation, or merely a symbolic gesture? And who determines what is shown in a public environment where visibility is inseparable from power?
      </p>
      <p>
        These tensions are central to the project’s significance. Museum Without Walls does not present itself as a utopian solution, but as a curatorial experiment that tests whether the mechanisms of urban attention can be redirected toward reflection rather than consumption.
      </p>
      <p>
        Its unrealized status is perhaps fitting. The project remains suspended between possibility and constraint—technically feasible, conceptually clear, yet dependent on negotiations among municipalities, advertisers, property owners, and cultural institutions. Like many compelling ideas, it exists at the threshold where imagination exceeds administrative reality.
      </p>
      <p>
        Still, the proposal points toward an urgent question for contemporary culture: what would happen if the most visible surfaces of the city were used not to sell products, but to expand public consciousness?
      </p>
      <p>
        For one luminous kilometer, the city might remember that it can be more than a marketplace. It can also be a place for art.
      </p>
    </JournalArticleLayout>
  );
}
