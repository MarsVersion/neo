import HeroSection from './components/HeroSection';
import './home.css';

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      
      {/* Main Content Grid */}
      <div className="container">
        <div className="editorial-grid">
          
          {/* Unrealized Ideas Section */}
          <section className="section-ideas">
            <a href="/ideas" className="ideas-link">
              <div className="card ideas-full">
                <div className="ideas-image-container">
                  <img src="/assets/images/UI.jpg" alt="Unrealized Ideas" />
                  <div className="image-overlay"></div>
                  <div className="ideas-content">
                    <div className="card-header">
                      <h2 className="card-title">Unrealized Ideas</h2>
                      <p className="card-subtitle card-accent">A cross-disciplinary idea ecosystem</p>
                    </div>
                    <p className="card-description">
                      Neo-Slow archives concepts before they are built, written, or realized — ideas that already exist, but remain in a latent state.
                    </p>
                    <span className="nav-link">Explore Archive</span>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* Theme Section */}
          <section className="section-theme">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Theme</h2>
                <p className="card-subtitle card-accent">Art, Technology • Speculative thinking</p>
              </div>
              <p className="card-description">
                Cross-disciplinary exploration where artistic vision meets technological possibility, creating space for concepts that challenge conventional boundaries.
              </p>
              <a href="/themes" className="nav-link">View Themes</a>
            </div>
          </section>

          {/* Contributors Section */}
          <section className="section-contributors">
            <a href="/contributors" className="contributors-link">
              <div className="card">
                <div className="card-header">
                  <h2 className="card-title">Contributors</h2>
                  <p className="card-subtitle card-accent">Artists, Curators, Technologists, Writers</p>
                </div>
                
                {/* Contributors Grid */}
                <div className="contributors-grid">
                  <div className="contributor-image">
                    <img src="/assets/images/JMC.png" alt="Jung Me Chai" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="contributor-image">
                    <img src="/assets/images/WMside.jpg" alt="Contributor" />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="contributor-image">
                    <img src="/assets/images/BMscar.jpg" alt="Contributor" />
                    <div className="image-overlay"></div>
                  </div>
                </div>
                
                <p className="card-description">
                  A diverse network of creative minds contributing unrealized ideas across disciplines, building an ecosystem of latent potential.
                </p>
                <span className="nav-link">Meet Contributors</span>
              </div>
            </a>
          </section>

          {/* Journal Section */}
          <section className="section-journal">
            <a href="/journal" className="journal-link">
              <div className="card journal-full">
                <div className="journal-image-container">
                  <img src="/assets/images/Catwheel single.png" alt="Journal Documentation" />
                  <div className="image-overlay"></div>
                  <div className="journal-content">
                    <div className="card-header">
                      <h2 className="card-title">Journal</h2>
                      <p className="card-subtitle card-accent">Engineering Logic, Artistic Logic, Public Attribution</p>
                    </div>
                    <p className="card-description">
                      Documenting the process of idea development, from initial conception to the critical moments where concepts remain unrealized.
                    </p>
                    <span className="nav-link">Read Journal</span>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* Map Section */}
          <section className="section-map">
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Map</h2>
                <p className="card-subtitle card-accent">Latent Futures, Funding Gatekeeping</p>
              </div>
              <p className="card-description">
                Visualizing the landscape of unrealized ideas, mapping connections between concepts and the systems that support or constrain their realization.
              </p>
              <a href="/map" className="nav-link">Explore Map</a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
