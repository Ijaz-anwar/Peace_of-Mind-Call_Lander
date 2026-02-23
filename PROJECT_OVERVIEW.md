# Project Overview: Peace of Mind Insurance Landing Page

## 📋 Project Summary
This project is a modern, responsive landing page for **Peace of Mind Insurance** (also referred to as **AutoGuard** in some documentation). It is built using **React** and **Vite**, featuring a clean design aimed at generating auto insurance leads.

## 🚀 Current Status
The application is fully functional with a main landing page and dedicated legal pages.

### 🔗 Active Routes
- **`/` (Home)**: The main landing page containing:
  - **Hero Section**: Primary call-to-action and imagery.
  - **Features**: Highlights of insurance coverage.
  - **Why Choose Us**: Value propositions.
  - **Stats**: Trust indicators (Satisfaction, Agents, etc.).
  - **Call To Action**: Final conversion prompt.
- **`/privacy-policy`**: Detailed privacy policy page.
- **`/terms-conditions`**: Terms of service page.

### 📱 Key Features
- **Responsive Design**: Mobile-friendly layout with a collapsible navigation menu.
- **Sticky Header**: Navigation remains visible on scroll.
- **Click-to-Call**: Prominent call buttons for mobile users.
- **Legal Compliance**: Dedicated pages for Privacy Policy and Terms.

## ⚙️ Configuration & Branding
- **Brand Name**: Primarily **"Peace of Mind Insurance"** (visible in Footer/Disclaimer) and **"AutoGuard"** (internal referencing).
- **Primary Contact Number**: `+1 (833) 549-4113`
  - *Location*: Configured in `Header.jsx` and `AutoInsuranceChatbot.jsx`.
- **Assets**: Images are hosted externally (e.g., `peaceofmind-co.com`, `medcareinsuranceagency.com`).

## 🛠️ Technical Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: `react-router-dom`
- **Styling**: Standard CSS (Modular & Global)
- **Icons**: `react-icons`

## 📂 Component Architecture
### Active Components
- `Header.jsx`: Main navigation and call button.
- `Hero.jsx`: Intro section.
- `Features.jsx`: Service highlights.
- `WhyChooseUs.jsx`: Company benefits.
- `Stats.jsx`: Numerical achievements.
- `CallToAction.jsx`: "Ready to get started?" section.
- `Footer.jsx`: Legal links, disclaimer, and copyright.

### Inactive / Available Components
- `AutoInsuranceChatbot.jsx`: A fully implemented chat widget with a "conversational" flow and countdown timer.
  - *Status*: **Currently NOT Imported** in `App.jsx`. It is available for use but not rendered.

## 💻 Setup & Commands
- **Install Dependencies**: `npm install`
- **Start Dev Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Preview Build**: `npm run preview`
