import HeroSection from './components/HeroSection';
import FloatingBubbles from '@/components/home/FloatingBubbles';
import './home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      
      <div className="container">
        <FloatingBubbles />
      </div>
    </div>
  );
}
