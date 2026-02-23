import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="about">
      <div className="container">
        <div className="why-content">
          <div className="why-text">
            <span className="section-badge">Trusted Since 1999</span>
            <h2 className="section-title">
              Why Choose <span className="gradient-text">AutoGuard</span> Insurance
            </h2>
            <p className="why-description">
              Since 1999, we've been dedicated to providing individual auto insurance coverage 
              that each customer needs. We take pride in protecting your automobile or motorcycle 
              with our thorough insurance policies.
            </p>

            <div className="why-points">
              <div className="why-point">
                <div className="point-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h4>Superior Customer Service</h4>
                  <p>Dedicated support team available 24/7 to assist with your needs</p>
                </div>
              </div>

              <div className="why-point">
                <div className="point-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h4>25+ Years Experience</h4>
                  <p>Industry expertise helping hundreds of families and businesses</p>
                </div>
              </div>

              <div className="why-point">
                <div className="point-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h4>Customized Plans</h4>
                  <p>Tailored coverage that fits your budget and requirements perfectly</p>
                </div>
              </div>

              <div className="why-point">
                <div className="point-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="point-content">
                  <h4>No Hidden Surprises</h4>
                  <p>Transparent pricing and coverage details you can understand upfront</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              <span>Get Started Today</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="why-visual">
            <div className="visual-grid">
              <div className="grid-item item-1">
                <div className="item-icon">🏆</div>
                <div className="item-label">Award Winning</div>
              </div>
              <div className="grid-item item-2">
                <div className="item-icon">⚡</div>
                <div className="item-label">Fast Processing</div>
              </div>
              <div className="grid-item item-3">
                <div className="item-icon">💼</div>
                <div className="item-label">Professional Team</div>
              </div>
              <div className="grid-item item-4">
                <div className="item-icon">🔒</div>
                <div className="item-label">Secure & Safe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
