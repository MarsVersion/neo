import GradientText from '@/components/ui/GradientText';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">
            <GradientText
              colors={["#F5F3EE", "#5fd986", "#F5F3EE"]}
              animationSpeed={25}
              showBorder={false}
              pauseOnHover={false}
              yoyo={true}
            >
              Imagination is infinite.<br /><span style={{ whiteSpace: 'nowrap' }}>Realization has its own timing.</span>
            </GradientText>
          </h1>
        </div>
      </div>
    </section>
  );
}
