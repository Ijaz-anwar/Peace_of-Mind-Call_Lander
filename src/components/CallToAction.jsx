import './CallToAction.css'
import { FiPhone } from "react-icons/fi";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-background">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>

          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Get <span className="gradient-text">Protected?</span>
            </h2>
            <p className="cta-description">
              Get your personalized auto insurance quote in minutes. No commitment required.
              Join thousands of satisfied customers who trust us to protect what matters most.
            </p>

            <div className="cta-actions">
              {/* <button className="btn-cta-primary">
                <span>Call Now</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button> */}
              <a href="tel:+18335494113" className="btn-cta-secondary" onClick={() => { if (typeof window.fbq === 'function') window.fbq('track', 'Contact'); }}>
                {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22 20.92 21.21 21.72 20.21 21.72C9.31 20.87 2 13.56 2 2.66C2 1.66 2.8 0.87 3.8 0.87H6.8C7.8 0.87 8.59 1.66 8.59 2.66C8.59 4.66 8.95 6.55 9.61 8.29C9.84 8.92 9.67 9.63 9.18 10.12L7.48 11.82C9.1 15.06 12.94 18.9 16.18 20.52L17.88 18.82C18.37 18.33 19.08 18.16 19.71 18.39C21.45 19.05 23.34 19.41 25.34 19.41C26.34 19.41 27.13 20.2 27.13 21.2Z" fill="currentColor"/>
                </svg> */}<FiPhone />
                <span>+1 833-549-4113</span>
              </a>
            </div>

            <div className="cta-features">
              <div className="cta-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>No credit check required</span>
              </div>
              <div className="cta-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Instant online quotes</span>
              </div>
              <div className="cta-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Coverage starts today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
