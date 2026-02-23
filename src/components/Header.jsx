import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone } from "react-icons/fi";

import './Header.css'

const Header = ({ scrolled }) => {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img
              src="https://peaceofmind-co.com/wp-content/uploads/2025/08/1000176243-removebg-preview-1.png"
              alt="Auto Insurance Illustration"
              className="w-full h-full object-cover desktop"
            />
          </Link>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="tel:+18335494113">Contact</a>
          </nav>

          <div className="header-actions">
            <a href="tel:+18335494113" className="phone-link my-vibrate-button" onClick={() => { if (typeof window.fbq === 'function') window.fbq('track', 'Contact'); }}>
              {/* <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92V19.92C22 20.92 21.21 21.72 20.21 21.72C9.31 20.87 2 13.56 2 2.66C2 1.66 2.8 0.87 3.8 0.87H6.8C7.8 0.87 8.59 1.66 8.59 2.66C8.59 4.66 8.95 6.55 9.61 8.29C9.84 8.92 9.67 9.63 9.18 10.12L7.48 11.82C9.1 15.06 12.94 18.9 16.18 20.52L17.88 18.82C18.37 18.33 19.08 18.16 19.71 18.39C21.45 19.05 23.34 19.41 25.34 19.41C26.34 19.41 27.13 20.2 27.13 21.2Z" fill="currentColor"/>
              </svg> */}<FiPhone />
              <span>Call Now for a Free Quote</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
