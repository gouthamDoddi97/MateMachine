import './Hero.css'

interface HeroProps {
  onNext: () => void
}

function Hero({ onNext }: HeroProps) {


  return (
    <div className="hero">
      <div className="hero-logo">
        <img src="/MM LOGO.png" alt="MateMachine" />
      </div>
      
      <div className="hero-content">
        <img src="/womenMM.png" alt="" className="silhouette silhouette-left" />
        <img src="/ManMM.png" alt="" className="silhouette silhouette-right" />
        
        <div className="hero-center">
          <h1 className="hero-title">MateMachine</h1>
          <h2 className="hero-subtitle">Deployable Urban Connection Infrastructure</h2>
          
          <p className={ "hero-mission1"}>
            Hybrid physical + digital operating layer for permanent human-connection nodes in global cities.
          </p>
          
          <p className="hero-mission">
            MateMachine installs the missing civic layer of human connection into the urban fabric.
          </p>
          
          <div className="hero-section">
            <h3 className="section-title">The Shift</h3>
            <p>
              Advanced automation is making goods and services abundant while human meaning, 
              connection, and continuity becomes scarce.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">The Missing Urban Layer</h3>
            <p>
              Modern cities have layers for transport, education, health, commerce, culture, and recreation — 
              but lack a public civic layer dedicated to relationship formation, community bonding, and social continuity.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">What Is Being Installed</h3>
            <p>
              Permanent physical civic venues supported by a digital operating layer that structures 
              real-world, face-to-face human interaction.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">What Is Breaking</h3>
            <p>
              Younger generations show declining real-world social confidence, relational fatigue, 
              and weakening long-term relationship formation.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">What This System Fixes</h3>
            <p>
              MateMachine restores public civic infrastructure for human connection, 
              continuity, and cultural stability.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">Deployment Status</h3>
            <p>
              Initial anchor city: Dubai.<br />
              Expansion nodes: New York and London.
            </p>
          </div>
          
          <div className="hero-section">
            <h3 className="section-title">Three-Layer Urban Connection Architecture</h3>
            <p>
              <strong>Layer I — Public Civic Activation Layer:</strong> City-wide real-world connection 
              activations in designated public civic zones (e.g. Dubai Mall, JBR Walk, Box Park, 
              and equivalent central districts in anchor cities).
            </p>
            <p>
              <strong>Layer II — Partner Venue Activation Layer:</strong> Curated hospitality and 
              cultural venues hosting structured MateMachine connection sessions.
            </p>
            <p>
              <strong>Layer III — Anchor Civic Venue Layer:</strong> Permanent sovereign-grade 
              MateMachine locations that function as the city's official human-connection institutions.
            </p>
          </div>
        </div>
      </div>
      
      <footer className="hero-footer">
        <a onClick={onNext} className="footer-link">
          Proceed to the Meaning Infrastructure Thesis →
        </a>
      </footer>
    </div>
  )
}

export default Hero
