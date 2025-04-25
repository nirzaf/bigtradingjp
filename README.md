# BIG TRADING - Vehicle & Machinery Export Platform

[![React](https://img.shields.io/badge/React-18.3.1-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178c6)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.2-646cff)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0.3-0055ff)](https://www.framer.com/motion/)

A modern, responsive web application for BIG TRADING, a leading exporter of high-quality Japanese vehicles, construction machinery, and spare parts with worldwide shipping services.

## 🌟 Features

- **Multilingual Support**: Full English and Japanese language support throughout the application
- **Responsive Design**: Mobile-first approach ensuring optimal experience across all devices
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion
- **Vehicle Showcase**: Dynamic galleries showcasing the inventory with filtering options
- **Business Objectives**: Clear presentation of core business services and advantages
- **Social Media Integration**: Instagram feed integration for real-time updates
- **SEO Optimized**: Structured data for better search engine visibility
- **Performance Focused**: Optimized assets and code splitting for fast loading times

## 🚗 Core Business

BIG TRADING specializes in:

- Buying and selling used heavy machinery and vehicles
- Providing various attachments and parts
- Maintenance services
- Transportation and export to overseas markets
- Solar power generation solutions

The company handles all processes from procurement to delivery in-house, ensuring a seamless experience for customers.

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion, Lottie animations
- **Routing**: React Router
- **SEO**: React Helmet Async
- **Code Quality**: ESLint, TypeScript-ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/bijtrading.git
cd bijtrading

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Project Structure

```
/
├── public/            # Static assets
├── src/
│   ├── assets/        # Dynamic assets (images, animations)
│   ├── components/    # Reusable UI components
│   ├── contexts/      # React contexts (language, theme)
│   ├── data/          # Static data files
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Utility functions
├── package.json       # Dependencies and scripts
└── vite.config.ts     # Vite configuration
```

## 🌍 Internationalization

The application supports both English and Japanese languages. All user-facing strings are managed through the `LanguageContext` to ensure consistent translations across the application.

## 🎨 Design System

The application uses a consistent color scheme defined in `color-codes.md`:

- Byzantine Blue (#3E5AC1): Trust and professionalism
- Ivory (#F7F7EA): Elegant and subtle backgrounds
- White (#FEFEFE): Clean and neutral elements
- Pumpkin (#F76C09): Eye-catching and bold accents
- Violet Blue (#1844C6): Strong and confident elements
- Safety Orange (#E77D2E): Visibility and attention

## 📱 Mobile-First Approach

The application is built with a mobile-first mindset, ensuring optimal user experience across all devices:

- Responsive layouts using Flexbox and CSS Grid
- Fluid typography with rem units
- Optimized assets for various screen sizes
- Touch-friendly interactive elements
