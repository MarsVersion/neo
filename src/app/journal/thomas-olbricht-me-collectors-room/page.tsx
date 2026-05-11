'use client';

import JournalArticleLayout from '@/components/JournalArticleLayout';
import metaStyles from '@/components/JournalArticleLayout.module.css';

const SOURCE_URL =
  'https://noblesse.com/%ed%86%a0%eb%a7%88%ec%8a%a4-%ec%98%ac%eb%b8%8c%eb%a6%ac%ed%9e%88%ed%8a%b8%ec%9d%98-me-collectors-room/';

export default function JournalThomasOlbrichtMeCollectorsRoom() {
  const metadata = (
    <>
      <div className={metaStyles.metaRow}>Type: Interview</div>
      <div className={metaStyles.metaRow}>Author: Jung Me Chai</div>
      <div className={metaStyles.metaRow}>Original Publication: Noblesse Korea</div>
      <div className={metaStyles.metaRow}>Publication Date: March 2013</div>
      <div className={metaStyles.metaRow}>Language: Korean</div>
      <div className={metaStyles.metaRow}>Subject: Thomas Olbricht</div>
      <div className={`${metaStyles.metaRow} ${metaStyles.metaSpaced}`}>
        Original Source:{' '}
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={metaStyles.sourceLink}
        >
          {SOURCE_URL}
        </a>
      </div>
      <div className={`${metaStyles.metaRow} ${metaStyles.metaSpaced}`}>
        Editorial Note: Republished as part of the Neo-Slow Journal archive.
      </div>
      <div className={`${metaStyles.metaRow} ${metaStyles.metaSpaced}`}>
        Tags: Collecting, Museums, Contemporary Art
      </div>
    </>
  );

  return (
    <JournalArticleLayout
      title="Thomas Olbricht’s ME Collectors Room"
      metadata={metadata}
      cover={{
        src: '/assets/nav_journal/SJournal MeCollec.png',
        alt: 'Thomas Olbricht’s ME Collectors Room',
      }}
    >
      <p>
        Few collectors in Germany embody as many identities as Thomas Olbricht. In one interview, he described himself simply as “a rocker”—a remark that suggests less a taste for music than an allegiance to restless energy and a refusal of convention. The label suits him. Collector, professor, chemist, endocrinologist, and heir to the Wella fortune, Olbricht resists easy categorization, and so does his collection.
      </p>
      <p>
        Unlike many German collectors whose holdings are defined by a sharply focused historical or conceptual program, Olbricht has assembled a far more eclectic universe. What began with childhood pursuits—stamps, matchboxes, toy cars—has evolved over four decades into a collection of more than 2,500 works spanning six centuries, from sixteenth-century paintings and Art Nouveau to contemporary art. Its breadth is matched by its caliber: works by Gerhard Richter, Eric Fischl, Cindy Sherman, Marlene Dumas, Andreas Gursky, and Elmgreen & Dragset, among many others.
      </p>
      <p>
        What distinguishes Olbricht, however, is not simply the scale or market value of his holdings. It is the way he turns collecting into a form of narrative and speculation. Rather than treating art as an asset class or adhering to the strict logic of connoisseurship, he embraces juxtaposition, curiosity, and surprise.
      </p>
      <p>
        This sensibility finds its clearest expression in me Collectors Room, the exhibition space he opened on Berlin’s Auguststraße in 2010. Far from the austere atmosphere typical of many private museums, the venue combines a contemporary exhibition program with a stylish café and the permanent installation “Wunderkammer Olbricht.” Named after the historical cabinet of curiosities, this presentation brings together art, natural specimens, scientific instruments, and objects that defy easy explanation.
      </p>
      <p>
        The result is an environment in which contemporary art is not isolated within the white cube, but placed in dialogue with the broader history of human fascination. Works by artists such as Marina Abramović, Matthew Barney, Chuck Close, Jan Fabre, and Sylvie Fleury appear within an atmosphere that feels part fairy tale, part laboratory, and part theater.
      </p>
      <p>
        Olbricht has noted that the “ME” in me Collectors Room does not refer to the self, but to “Moving Energies.” The phrase captures the essence of his project. His collection is driven not by a desire to impose order, but by a belief that meaning emerges through unexpected encounters.
      </p>
      <p>
        If German collecting has often been associated with rigor and specialization, Thomas Olbricht offers a compelling alternative: a collection animated by intuition, imagination, and a profound commitment to diversity. In that sense, his self-description as a rocker may be the most precise definition of all.
      </p>

      <h2>토마스 올브리히트의 ‘Me-Collectors Room’</h2>

      <p lang="ko">
        독일의 손꼽히는 컬렉터 토마스 올브리히트(Thomas Olbricht)는 언젠가 한 인터뷰에서 자신을 ‘로커’라고 했다. 아마 로커의 영혼을 추구한다는 의미일 것이다. 사실 그에겐 컬렉터라는 호칭 외에도 교수, 화학자, 내분비학 의사, 헤어 브랜드 웰라(Wella)의 상속자 등 다양한 수식어가 따라다닌다. 그를 부르는 호칭이 이렇게 각양각색이듯 그의 컬렉션 또한 프로필이 뚜렷한 전형적인 독일 컬렉터들과는 다르다. 1970~1980년대에 유년기를 보낸 이라면 한 번쯤 시도해봤을 우표나 성냥갑, 장난감 자동차 수집에 이어 지난 40여 년간 장르와 매체를 불문하고 16세기 고전 미술 작품과 아르누보, 현대미술에 이르는 약 2500점의 미술품을 컬렉팅해왔다. 그가 작품을 소장한 작가군의 면면 또한 화려하다. 게르하르트 리히터(Gerhard Richter)를 시작으로 에릭 피슬(Eric Fischl), 신디 셔먼(Cindy Sherman), 마를렌 뒤마(Marlene Dumas), 안드레아스 거스키(Andreas Gursky), 엘름그렌과 드락세트(Elmgreen & Dragset) 등 그 작품 가격만 수백억, 수천억을 호가한다. 미술사가가 울고 갈 만한 전문 지식을 갖추고 한 가지에 집중하는 컬렉션 그리고 블루칩 작가들의 작품만 투자 목적으로 수집하는 미술계의 풍토에서 그의 컬렉션은 분명 특별한 존재 가치를 지닌다. 2010년 베를린의 대표적 화랑가로 꼽히는 아우구스트슈트라세(Auguststraße)에 문을 연 그의 소장품 전시 미술관 ‘미-컬렉터스 룸(Me-Collectors Room)’만 봐도 그렇다. 대개 엄숙한 개인 컬렉터의 전시 공간과 달리 이곳은 입구에 스타일리시한 카페가 들어서 있다. 또 건물 2층에 ‘분더카머 올브리히트(Wunderkammer Olbricht)’라는 이름의 상설 전시장을 만들어 관람객의 호기심을 자극한다. 분더카머는 독일어로 ‘놀라운 것들의 방’을 뜻한다. 지난 9월 17일부터 내년 2월 22일까지 이 공간에선 그의 현대미술 소장품전 가 열린다. ‘귀중한 작품’, ‘희귀 자연 작품’, ‘과학 기기’, ‘설명할 수 없는 것들’의 4개 섹션으로 나뉘어 열리는 전시에선 행위예술의 대가 마리나 아브라모비치(Marina Abramovic)의 사진 작품 ‘Self Portrait with Skull’부터 매슈 바니(Matthew Barney), 척 클로즈(Chuck Close), 얀 파브르(Jan Fabre), 실비 플뢰리(Sylvie Fleury) 같은 대가의 작품 수십 점을 만날 수 있다. 구상미술, 특히 여성 작가의 구상미술에 남다른 애착을 보이는 이번 전시를 한마디로 표현하면, {'<이상한 나라의 앨리스>'}와 {'<해리 포터>'} 시리즈의 여러 버전을 하나로 짬뽕한 느낌이랄까? 자신의 컬렉션 전시 미술관 ‘Me-Collectors Room’의 ‘me’ 의미가 ‘나’가 아닌 ‘moving energies’의 약자(Moving Energies-Collectors Room)라 말하는 토마스 올브리히트의 이번 소장품전은 그간 선보인 그의 몇몇 전시와 마찬가지로 도발적이고 거침없다. 토마스 올브리히트가 자신을 로커라 지칭한 이유가 궁금하다면 지금 당장 베를린으로 떠나보시길. 그곳에 다양성으로 독일 미술계를 성장하게 하는 그의 컬렉션이 있다. www.me-berlin.com
      </p>
    </JournalArticleLayout>
  );
}
