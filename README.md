# AutoGuard Insurance Landing Page

A modern, responsive auto insurance landing page built with React and Vite.

## Features

- 🎨 Modern dark-themed UI with gradient accents
- 📱 Fully responsive design for all devices
- 🔗 React Router for navigation
- 📄 Privacy Policy and Terms & Conditions pages
- ⚡ Fast and optimized with Vite
- 🎯 Clean and professional design
- 📞 Mobile-optimized call button in header

## Changes from Previous Version

- ✅ Removed Services section
- ✅ Mobile header now shows only call button (no "Get Quote" button)
- ✅ Added routing with React Router
- ✅ Added Privacy Policy page
- ✅ Added Terms & Conditions page
- ✅ Removed chat widget from bottom
- ✅ Updated Footer with links to legal pages

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Extract the project folder
2. Navigate to the project directory:
   ```bash
   cd auto-insurance-landing-updated
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
auto-insurance-landing-updated/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Features.jsx
│   │   ├── Features.css
│   │   ├── WhyChooseUs.jsx
│   │   ├── WhyChooseUs.css
│   │   ├── Stats.jsx
│   │   ├── Stats.css
│   │   ├── CallToAction.jsx
│   │   ├── CallToAction.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── PrivacyPolicy.jsx
│   │   ├── TermsConditions.jsx
│   │   └── LegalPages.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Key Components

### Header
- Sticky navigation bar
- Logo with animation
- Desktop navigation menu
- Mobile-only call button
- Collapsible mobile menu

### Pages
- **Home**: Main landing page with all sections
- **Privacy Policy**: Comprehensive privacy policy
- **Terms & Conditions**: Detailed terms and conditions

### Sections
- Hero: Eye-catching hero section with CTA
- Features: Key insurance features
- Why Choose Us: Benefits and advantages
- Stats: Company statistics and achievements
- Call to Action: Final conversion section
- Footer: Links and company information

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: #0066FF;
  --primary-dark: #0052CC;
  --secondary: #FF6B35;
  /* ... other variables */
}
```

### Content
- Update text content directly in component files
- Modify phone number in Header and Footer components
- Edit legal pages in `src/pages/` directory

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 AutoGuard Insurance. All rights reserved.

## Support

For support, email info@autoguard.com or call +1 470-431-7587
