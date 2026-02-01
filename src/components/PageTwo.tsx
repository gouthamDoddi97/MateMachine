import './PageTwo.css'

interface PageTwoProps {
  onNext: () => void
}

function PageTwo({ onNext }: PageTwoProps) {
  return (
    <div className="page-two">
        <div className="hero-center2">
        <h1 className="hero-title6">The Meaning Scarcity Thesis</h1>
        
        <p className="hero-mission">
          MateMachine is architected to permanently sustain this layer as core infrastructure 
          for meaning formation in a post-AI civilization.
        </p>
        
        <div className="hero-section">
          <h3 className="section-title">The Human Premise</h3>
          <p>
            Machines do not require meaning. Humans do. Human beings are biological and emotional 
            social organisms built on connection, attachment, and belonging.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">The Meaning Scarcity</h3>
          <p>
            As automation expands, material productivity becomes abundant while human meaning 
            becomes structurally scarce. Love and relational continuity constitute the primary 
            organizing foundation of human meaning.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">The Missing Civic Layer</h3>
          <p>
            Cities lack a public layer for relationship formation and social continuity.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">The Physical Social Operating Layer</h3>
          <p>
            Permanent public venues supported by digital orchestration for structured 
            face-to-face interaction.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">Cultural Compatibility</h3>
          <p>
            Public, transparent, non-alcoholic and culturally protected environments 
            deployable globally.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">What This Installs</h3>
          <p>
            A permanent civic layer equivalent to libraries and parks.
          </p>
        </div>
        
        <div className="hero-section">
          <h3 className="section-title">Charter Anchor Territories</h3>
          <p className="section-subheading">Initial 25 of 100+ Planned Cities</p>
          <p>
            Dubai, London, New York, Los Angeles, Paris, Toronto, Miami, Berlin, Sydney, Singapore, 
            São Paulo, Mexico City, Barcelona, Madrid, Milan, Rome, Istanbul, Bangkok, Seoul, 
            Amsterdam, Tokyo, Hong Kong, Taipei, Shanghai, Beijing.
          </p>
        </div>
        </div>
      
      <footer className="hero-footer">
        <a onClick={onNext} className="footer-link">
          Proceed to the Global Anchor Partnership Architecture →
        </a>
      </footer>
    </div>
  )
}

export default PageTwo
