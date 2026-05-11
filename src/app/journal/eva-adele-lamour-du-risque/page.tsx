'use client';

import JournalArticleLayout from '@/components/JournalArticleLayout';
import metaStyles from '@/components/JournalArticleLayout.module.css';

const SOURCE_URL =
  'https://monthlyart.com/world-report-berlin-eva-adele-lamour-du-risque/';

export default function JournalEvaAdeleLamourDuRisque() {
  const metadata = (
    <>
      <div className={metaStyles.metaRow}>Type: Exhibition Review &amp; Interview</div>
      <div className={metaStyles.metaRow}>Author: Jung Me Chai</div>
      <div className={metaStyles.metaRow}>Original Publication: Monthly Art 월간미술</div>
      <div className={metaStyles.metaRow}>Publication Date: 2018</div>
      <div className={metaStyles.metaRow}>Language: Korean</div>
      <div className={metaStyles.metaRow}>Subject: EVA &amp; ADELE</div>
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
        Tags: Performance Art, Identity, Gender, Berlin, Contemporary Art
      </div>
    </>
  );

  return (
    <JournalArticleLayout
      title="World Report Berlin: EVA &amp; ADELE, L’Amour du Risque"
      deck="When Art Becomes a Way of Life"
      metadata={metadata}
      cover={{
        src: '/assets/nav_journal/Journal EVA & ADELE .jpeg',
        alt: 'EVA & ADELE, L’Amour du Risque',
      }}
    >
      <p>
        Are EVA &amp; ADELE still engaged in a dangerous love affair? In a country such as Germany, where public attitudes toward sexuality and personal identity are comparatively liberal, the title L’Amour du Risque may initially seem theatrical. Yet the life they have chosen remains radical. In many parts of the world, their appearance alone could provoke hostility—or even legal sanction.
      </p>
      <p>
        The duo is often compared to Gilbert &amp; George, but the comparison is only partially illuminating. EVA &amp; ADELE are not merely collaborators; they have erased the distinction between artwork and biography. Little is known about their lives before they assumed these names. Their public history begins with their union as a single artistic entity.
      </p>
      <p>
        They first met in 1989 and began working together in 1991. One of their earliest public acts was a symbolic wedding staged at Martin-Gropius-Bau during the exhibition Metropolis. Dressed as two brides, they transformed marriage into an act of artistic self-invention. The ceremony functioned as a deliberate reset—a ritual through which two individuals were reborn as one living artwork.
      </p>
      <p>
        Since then, EVA &amp; ADELE have become ubiquitous figures on the international art circuit, appearing at biennials, art fairs, and museum openings around the world. Their synchronized presence is so consistent that they seem to exist outside ordinary notions of time and place, materializing wherever contemporary art gathers.
      </p>
      <p>
        The retrospective L’Amour du Risque, presented at me Collectors Room, offered a comprehensive survey of this remarkable practice. The exhibition included large-scale paintings, photographs, videos, sculptural installations, and 162 detailed costume drawings. At its center stood WINGS, an exuberant arrangement of pink and gold garments with wing-like forms, embodying the duo’s vision of transformation and flight.
      </p>
      <p>
        Under the neon sign “FUTURING,” visitors encountered meticulously organized drawings that charted each costume element down to the minute. Clothing, accessories, and makeup were recorded with near-scientific precision. The cumulative effect was unexpectedly moving: part storyboard, part diary, part conceptual score.
      </p>
      <p>
        Video works such as Kisses in the Supermarket and Watermusic documented performances in which everyday settings became stages for acts of tenderness and disruption. In these works, art emerges not as an isolated event but as an ongoing negotiation with the social world.
      </p>
      <p>
        EVA &amp; ADELE describe their practice as “FUTURING.” Unlike conventional performance, which has a beginning and an end, FUTURING unfolds continuously. Painting, dressing, traveling, and meeting others are all part of the same uninterrupted artistic process. Their proposition is simple and profound: art is not confined to institutions. Wherever they appear, a museum comes into being.
      </p>
      <p>
        Pink plays a central role in their visual language. Historically associated with the persecution of homosexuals, the color is reclaimed and amplified until it becomes a symbol of affirmation rather than stigma. Their work demonstrates how signs of exclusion can be transformed into instruments of freedom.
      </p>
      <p>
        During our conversation, the artists spoke with remarkable clarity about their resistance to premature visibility. When they began working together, social media did not yet exist. This allowed them to develop their artistic identity gradually and on their own terms. Today, they welcome every photograph and every encounter as part of the work itself.
      </p>
      <p>
        At home, however, their lives are unexpectedly ordinary. They divide their building into living quarters above and a studio below. On days without public engagements, they may remain in pajamas. Preparing for an event, by contrast, can take up to three hours—a carefully choreographed ritual of shaving, makeup, and dressing.
      </p>
      <p>
        Collector Thomas Olbricht has emphasized that EVA &amp; ADELE should not be understood merely as eccentric performers, but as conceptual artists who challenge fixed categories of thought. Their significance lies not only in their striking appearance, but in their ability to expose the fragility of the systems through which identity is defined and regulated.
      </p>
      <p>
        As our interview came to a close, I was reminded of philosopher Marcus Steinweg, who wrote of their work: “Insistence, resistance, complexity, affirmation, repetition and transformability become the essential features of a new concept of form.”
      </p>
      <p>
        The observation applies not only to EVA &amp; ADELE, but to contemporary art more broadly. Their practice suggests that identity is never complete, and that transformation is not a temporary gesture but a permanent condition.
      </p>

      <h2>{'\u003cEVA & ADELE – L\u2019amour du risque(위험한 사랑)\u003e'}</h2>
      <p lang="ko">me Collectors Room Berlin, 2018년 4월 27일-8월 27일</p>

      <p lang="ko">
        에바와 아델레는 아직도 위험한 사랑을 하는 것일까? 독일처럼 사랑과 성 관련 부분에 비교적 관대한 나라에서 태어나고 성장한 에바와 아델레에게 위험한 사랑이란 무엇일까? 이들이 선택한 대담한 삶의 방식은 독일 외 상당한 국가에서는 위험에 처한 상황을 이야기시킬 수도 있다. 마치 중국 경극에 나오는 진한 분장의 배우 같은 모습을 달갑지 않게 보는 이도 있을 것이며 몇몇 국가에서는 남녀 구분이 안 되는 이들의 외모가 처벌 대상이 될 수도 있다.
      </p>
      <p lang="ko">
        에바와 아델레를 영국 퍼포먼스의 대표주자로 알려진 길버트와 조지(Gibert &amp; George)와 비교하는 경우가 많다. 대답은 독일식 긍정과 부정의 줄임말 네, 아니요 의 합성어인 야인(야와 나인)이다. 길버트와 조지는 생물학적으로 남성으로 태어났으며 외형적인 모습도 그다지 다양한 변화를 볼 수 없으며 이들이 어떻게 만났으며 활동했는지는 잘 알려져 있다. 반면, 에바는 남성, 아델레는 여성으로 태어났으며 에바와 아델레로 활동하기 전 생활과 작품활동은 알려진 것이 전혀 없다. 공개된 작가 이력도 이 둘이 합쳐진 시기로부터 시작된다. 1989년에 만났으며 2011년에는 시청에서 정식 결혼을 하기도 하였다. 에바와 아델레로서 정식적인 활동은 1991년으로 올라가며 그 시작은 마틴 그로피우스(Martin-Gropius-Bau) 미술관에서 열린 메트로폴리스(Metropolis) 전시에 에바외 아델레의 결혼식이다. 성이 다름에도 불구하고 이들은 둘 다 신부 복장을 했으며 웨딩드레스는 마틴 그로피우스 미술관에 기증되었다. 상징적인 의식을 통한 일종의 인생의 리셋이 실행된 경우이다. 에바와 아델레로 부활한 듯한 이들은 세계 여러 곳에 열리는 각종 대형행사인 비엔날레와 아트페어에 퍼포먼스 형식으로 참석하며 예술인은 물론 대중과 언론에 관심을 받기 시작했다. 어떤 이는 마치 축지법을 사용하는 듯 출현하는 이들을 외계인이라고 칭하기도 한다. 필자도 이들이 어디 가도 나타나는 바람에 어리둥절했던 기억이 있다.
      </p>
      <p lang="ko">
        회고전 {'<EVA & ADELE – L’amour du Risque>'}에는 32점 대형회화, 조형물, 사진, 비디오 및 162개의 코스튬 계획서 드로잉이 전시되었다. 전시장 중앙에 설치된 날개가 장착된 금색과 핑크색의 의상 작업 {'<WINGS>'} (1992, 1995, 1997)가 이목을 끈다. 수십 년 동안 수집하고 제작한 속옷, 스타킹, 신발, 핸드백, 가방과 우산이 전시장 중앙에 설치되어 있다. {'<FUTURING>'}이라는 네온사인 아래에는 집요할 정도로 구성된 162 개의 코스튬 드로잉은 퍼포먼스에 사용될 옷과 소품 및 착용 순서 시간은 물론 분까지 정확하게 기록되어 있다. 이 드로잉 시리즈에도 어김없이 분홍색 은 빠지지 않는다. 마치 재밌는 만화를 보는 듯 관객은 긴 시간 벽에 붙어 자리를 뜨지 않는다. 비디오 작품 {'<WINGS I, II, III>'} (1997, 1998)은 이들의 발자취를 한 순간을 살필 수 있는 기회를 주기도 한다. {'<Cum>'} 시리즈는 언론에 나온 기사나 관객이 찍은 사진을 사용해 아이러니하게 표현하고 있다. 영상작업 {'<Kisses in the Supermarket>'} (1997)은 뉴욕의 한 슈퍼마켓에서 키스 퍼포먼스를 담고 있다. 벽 코너에 설치된 {'<Transformer-Performer>'}는 이들의 속옷 브래지어, 코르셋, 거들 및 침대로 구성되어 있다. 대부분은 연한 핑크색인데 올인원과 가터벨트가 합쳐진 검정 속옷은 하트가 마치 해골처럼 중앙에 떡하니 자리 잡고 있다. 에바와 아델레는 이들은 행위를 FUTURING-Performance라 칭한다. 고전적 의미의 여와 남이라는 성의 경계를 넘는 행위(Over the Boundaries of Gender)를 통하여 새로운 공동체의 삶을 살고 있기 때문이다. 비디오 작업 {'<Watermusic>'} (1997/2003)에서 이들의 FUTURING-Performanc가 강렬하게 전해진다.
      </p>
      <p lang="ko">
        회고전이 열리는 미 컬렉터스 룸(me Collectors Room Berlin)의 컬렉터 토마스 올브리히트(Thomas Olbricht)는 간담회에서 에바와 아델레를 단지 독특한 퍼포머로서 뿐만 아니라 경계를 넘나드는 개념예술의 상징 하나로서 보기를 바란다고 했다. 경계를 넘나든다는 것은 단지 이들의 강렬한 복장과 화장에 있지 않다. 고정적인 관념과 굳어진 사고체계에 질문을 던지며 이것이 얼마나 허망한 것인가를 이들만의 방법론을 통하여 보여 주고자 하는 것이다.
      </p>
      <p lang="ko">
        베를린에서 활동하지만 일 년에 약 70% 정도는 퍼포먼스 관련 여행을 한다는 에바와 아델레를 어렵게 만나 그동안 궁금했던 점을 파혜쳐 보기로 한다.
      </p>
      <p lang="ko">
        <strong>에바와 아델레는 항상 대문자로 표기된다. 이유가 있는가?</strong>
        <br />
        에바 아델레는 우리의 작품이며 특별한 이유는 없다. 그리고 우리를 호칭할 때는 항상 에바와 아델레 순서로 불러주기를 바란다. 마치 아담과 이브처럼 말이다.
      </p>
      <p lang="ko">
        <strong>에바와 아델레에게 퍼포먼스란 무엇인가? 요세프 보이스가 주장한 소셜 플라스틱과 관계가 있는가?</strong>
        <br />
        방법론적인 의미의 퍼포먼스에는 시작과 끝이 있다. 하지만, 우리에게 퍼포먼스는 끝과 시작이 없는24시간 지속되는 행위이며 고전적인 의미의 퍼포먼스 경계를 넘어섰다. 행위예술만이 퍼포먼스는 아니다. 우리에게 있어서 그림을 그리고 작품을 실행하는 행위도 퍼포먼스이다.
        <br />
        <br />
        우리의 퍼포먼스를 통하여 관객들은 굳이 미술관을 가지 않더라도 예술품을 접할 기회를 가진다. 예술은 미술관이나 전시장에서 국한돼서는 된다고 생각한다. 즉 장소 불문 우리가 있는 곳이 미술관이다.
      </p>
      <p lang="ko">
        <strong>에바 아델레가 이만큼 유명해진 데는 소셜네트워크가 어느 정도 영향을 준 것 같다. 국제행사 때는 SNS는 물론 인터넷에 에바와 아델레의 사진으로 도배되어 있다. 항상 사진 찍히고, 찍어 달라는 요청이 부담스럽지 않은가?</strong>
        <br />
        우선, 우리가 1991년 공동으로 작품 활동을 시작할 당시 SNS가 없었다. 그래서 천천히 마음의 준비를 할 수 있었다. 에바와 아델레가 여기까지 오기에 시간이 필요했다. 초기 때부터 관객과 미디어가 우리를 현재처럼 인터넷에 올렸다면 감당이 안 됐을 것이다. 당시 미술시장 또한 에바와 아델레를 성급하게 홍보하고 팔려고 했다. 이름만 대면 다 아는 갤러리들로부터 러브콜이 많이 들어 왔지만 거절했다. 우리 스스로 페이스를 지키고 싶었다. 다행히도 시대와 함께 에바와 아델레를 준비할 수 있었으며 이제는 이러한 관심을 제대로 받아 들일 수 있게 되었다. 지금은 모든 사진요청을 즐겁게 받아들이며 감사하게 생각한다.
      </p>
      <p lang="ko">
        <strong>집에서도 코스튬과 풀메이컵으로 다니는지?</strong>
        <br />
        위층은 우리가 사는 공간이고 아래층은 스튜디오로 사용하니 일정이 없으면 온종일 잠옷으로 다닐 때도 있고 화장은 기본정도만 한다. 일어나자마자 씻고, 면도하고 얼굴에 그림을 그리기 시작한다. 이때는 방문객이 와도 절대 문을 안 연다. 외부 일정이 있는 날은 화장하고 준비하는데 약 3시간 정도 걸린다.
      </p>
      <p lang="ko">
        <strong>국가사회주의 독일 노동자당(나치당)이 핑크를 동성연애자의 억압용 색으로 사용했다. 에바와 아델레도 코스튬에 핑크를 자주 사용하는데 이유가 있으며 의상은 스스로 제작하는가?</strong>
        <br />
        그렇다. 신체는 주체 즉 개인의 것이며 정치가나 사회적 분위기가 이래라저래라 할 수 없다.
        <br />
        정치적 탄압의 상징을 가시적으로 극대화 함으로서 억압이 얼마나 허망한 행위인지를 보여주고자 했다. 복장 디자인은 우리가 직접 하며 여러 명의 재단사가 제작한다. 하지만 회화는 우리가 함께 직접 그린다. 둘이 함께 작업을 하다 보니 이견이 있을 때도 있긴 하다. (웃음)
      </p>
      <p lang="ko">
        에바와 아델레의 웃음을 뒤로 인터뷰를 마친다. 독일에서 가장 핫한 철학자 마르쿠스 슈타인벡(Marcus Steinweg)의 {'<FOR EVA & ADELE>'} 텍스트의 구절을 인용하고자 한다. &quot;Insistence, resistance, complexity affirmation, repetition and transformability become the essential features of a new concept of form.&quot; 이는 비단 에바와 아델레 만을 위한 글이 아닌 동시대 예술인이 한 번쯤은 고뇌할 부분이 아닌가 싶다.
      </p>
    </JournalArticleLayout>
  );
}
