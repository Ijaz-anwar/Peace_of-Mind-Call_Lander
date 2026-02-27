import AutoInsuranceChatbot from './AutoInsuranceChatbot'
import './Hero.css'
import { handlePhoneCall } from '../utils/pixelTracking';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            {/* <div className="hero-badge">
              <span className="badge-dot"></span>
              Trusted Since 1999
            </div> */}

            <h1 className="hero-title">
              Get Comprehensive
              <span className="gradient-text"> Auto Insurance </span> at Affordable Rates
            </h1>

            <p className="hero-description">
              Protect your vehicle with personalized coverage tailored to your needs.
              Get instant quotes, compare plans, and drive with confidence knowing
              you're covered by industry-leading protection.
            </p>

            <div className="hero-actions">
              <button
                className="btn-primary"
                onClick={(e) => handlePhoneCall('+18335494113', e)}
              >
                <span>+1 833-549-4113</span>
              </button>
              {/* <button className="btn-primary">
                <span>+1 (979) 240-1495</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button> */}
              {/* <a href="tel:+14704317587" className="btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.92 21.21 21.72 20.21 21.72C9.31 20.87 2 13.56 2 2.66C2 1.66 2.8 0.87 3.8 0.87H6.8C7.8 0.87 8.59 1.66 8.59 2.66C8.59 4.66 8.95 6.55 9.61 8.29C9.84 8.92 9.67 9.63 9.18 10.12L7.48 11.82C9.1 15.06 12.94 18.9 16.18 20.52L17.88 18.82C18.37 18.33 19.08 18.16 19.71 18.39C21.45 19.05 23.34 19.41 25.34 19.41C26.34 19.41 27.13 20.2 27.13 21.2Z" fill="currentColor"/>
                </svg>
                <span>Call Now</span>
              </a> */}
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-icon">⭐</div>
                <div className="trust-text">
                  <strong>4.9/5</strong>
                  <span>Customer Rating</span>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon">🛡️</div>
                <div className="trust-text">
                  <strong>10,000+</strong>
                  <span>Protected Drivers</span>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon">⚡</div>
                <div className="trust-text">
                  <strong>24/7</strong>
                  <span>Support Available</span>
                </div>
              </div>
            </div>
          </div>
          {/* Chatbot in Hero Section */}
          <div className="hero-chatbot">
            <AutoInsuranceChatbot isOpen={true} />
          </div>
          {/* <div className="hero-visual">
            <div className="visual-card">
              <div className="card-glow"></div>
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="50" y="100" width="300" height="120" rx="8" fill="url(#carGradient)" opacity="0.9"/>
                <circle cx="120" cy="220" r="25" fill="#0A0F1C" stroke="url(#wheelGradient)" strokeWidth="4"/>
                <circle cx="280" cy="220" r="25" fill="#0A0F1C" stroke="url(#wheelGradient)" strokeWidth="4"/>
                <path d="M80 100 L140 60 L260 60 L320 100" fill="url(#windowGradient)" opacity="0.6"/>
                <rect x="160" y="50" width="80" height="50" rx="4" fill="url(#roofGradient)" opacity="0.5"/>
                <defs>
                  <linearGradient id="carGradient" x1="50" y1="100" x2="350" y2="220">
                    <stop offset="0%" stopColor="#0066FF"/>
                    <stop offset="100%" stopColor="#00D4AA"/>
                  </linearGradient>
                  <linearGradient id="wheelGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00D4AA"/>
                    <stop offset="100%" stopColor="#0066FF"/>
                  </linearGradient>
                  <linearGradient id="windowGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.5"/>
                  </linearGradient>
                  <linearGradient id="roofGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00D4AA"/>
                    <stop offset="100%" stopColor="#0066FF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div> 

             <div className="floating-badge badge-1">
              <div className="badge-icon">✓</div>
              <div className="badge-content">
                <strong>Instant Quote</strong>
                <span>In 2 minutes</span>
              </div>
            </div>

            <div className="floating-badge badge-2">
              <div className="badge-icon">💰</div>
              <div className="badge-content">
                <strong>Save up to 40%</strong>
                <span>On premiums</span>
              </div>
            </div>

            <div className="floating-badge badge-3">
              <div className="badge-icon">🚗</div>
              <div className="badge-content">
                <strong>All Vehicles</strong>
                <span>Covered</span>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
    </section>
  )
}

export default Hero
