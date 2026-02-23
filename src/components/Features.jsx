import './Features.css'

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Instant Quotes',
      description: 'Get your personalized quote in just 2 minutes with our streamlined process'
    },
    {
      icon: '💰',
      title: 'Best Rates',
      description: 'Compare multiple carriers and save up to 40% on your auto insurance premiums'
    },
    {
      icon: '🛡️',
      title: 'Full Coverage',
      description: 'Comprehensive protection for all types of vehicles and driving situations'
    },
    {
      icon: '📱',
      title: '24/7 Support',
      description: 'Round-the-clock customer service ready to assist with claims and questions'
    },
    {
      icon: '✓',
      title: 'Easy Claims',
      description: 'Simple, hassle-free claims process with fast resolution and payment'
    },
    {
      icon: '🎯',
      title: 'Personalized Plans',
      description: 'Customized coverage options tailored to your specific needs and budget'
    }
  ]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="section-title">
            Benefits That <span className="gradient-text">Make A Difference</span>
          </h2>
          <p className="section-description">
            Experience insurance that works as hard as you do with features designed for modern drivers
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              className="feature-card" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
                <div className="icon-glow"></div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
