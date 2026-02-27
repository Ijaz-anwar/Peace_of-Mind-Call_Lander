import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img style={{
                width: "25%",
                height: "10%",
                objectFit: "cover"
              }}
                src="https://peaceofmind-co.com/wp-content/uploads/2025/08/1000176243-removebg-preview-1.png"
                alt="Auto Insurance Illustration"
                className="w-full h-full object-cover"
              />
              {/* <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div> */}
              {/* <span className="logo-text">AutoInsure Expert</span> */}
            </div>
            <p className="footer-description">
              Your trusted U.S. partner for comprehensive auto insurance since 1999.
              Protecting what matters most to you.
            </p>
            {/* <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div> */}
          </div>

          <div className="footer-links">
            {/* <div className="footer-column">
              <h4 className="footer-title">Services</h4>
              <ul>
                <li><a href="#features">Auto Insurance</a></li>
                <li><a href="#features">Motorcycle Insurance</a></li>
                <li><a href="#features">Commercial Auto</a></li>
                <li><a href="#features">Claims Support</a></li>
              </ul>
            </div> */}

            <div className="footer-column">
              <h4 className="footer-title">Company</h4>
              <ul>
                <li><a href="#features">Why Choose Us</a></li>
              </ul>
            </div>

            {/* <div className="footer-column">
              <h4 className="footer-title">Contact Info</h4>
              <ul>
                <li>
                  <a href="tel:+19792401495">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.92 21.21 21.72 20.21 21.72C9.31 20.87 2 13.56 2 2.66C2 1.66 2.8 0.87 3.8 0.87H6.8C7.8 0.87 8.59 1.66 8.59 2.66C8.59 4.66 8.95 6.55 9.61 8.29C9.84 8.92 9.67 9.63 9.18 10.12L7.48 11.82C9.1 15.06 12.94 18.9 16.18 20.52L17.88 18.82C18.37 18.33 19.08 18.16 19.71 18.39C21.45 19.05 23.34 19.41 25.34 19.41C26.34 19.41 27.13 20.2 27.13 21.2Z" fill="currentColor"/>
                    </svg>
                    +1 (979) 240-1495
                  </a>
                </li>
                <li>
                  <a href="mailto:Leslie@cmediaagency.com">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Leslie@cmediaagency.com
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <div className="footer-disclaimer">
          <p>
            <strong>Important Legal Disclosure:</strong> This website is not a government agency. Peace of Mind Insurance is a private lead generation service owned and operated by Capital Media Agency, Centerfield and Peace of Mind Insurance. Insurance plans referenced may not meet Auto Insurance requirements and availability varies in all states. By submitting your information, you provide express written consent to be contacted by Capital Media Agency, Centerfield and Peace of Mind Insurance via phone call, text message, or email, including through autodialed, AI, or prerecorded messages, even if your number is on a state or national Do Not Call registry.
          </p>
          <p>
            Your personal information may be shared with licensed insurance agents or third-party partners for marketing purposes or to contact you via voice call or email only; text messaging originator opt-in data and consent will not be shared with any third parties. Submitting your information constitutes permission for an agent to contact you regarding available Auto Insurance coverage options, which may include Major Medical, Short-Term, Fixed Indemnity, or other insurance products. Plan availability, descriptions, and quotes may vary. By using this site, you agree to the <Link to="/terms-conditions">Terms of Service</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            Copyright © 2026 Peace Of Mind Insurance. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">•</span>
            <Link to="/terms-conditions">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
