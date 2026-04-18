# Kadix Technologies Website

A modern, professional website for Kadix, a technology company specializing in web applications, mobile apps, and AI solutions and launching internal startups. This project features a clean, premium design with smooth animations and a focus on user experience.

## Overview

A premium, multi-page tech company website inspired by the Charter/fintech aesthetic — minimal, bold, and confident. The site positions Kadix as a venture studio and digital product company, not a typical agency.

## Design System Setup

- Custom CSS variables for the exact color palette (#2b2dff primary, #f9f9ff background, gradients)
- Plus Jakarta Sans font via Google Fonts, Inter fallback
- Tailwind config extended with custom colors, spacing, and typography scale
- Reusable component primitives: gradient buttons (pill), service cards (16px radius), section wrappers with 80-120px padding, badges ("Coming Soon", "Stealth Mode")

## Features

- **Modern Design**: Clean, minimalist UI with a premium feel.
- **Smooth Animations**: Subtle transitions and hover effects throughout the site.
- **Responsive Layout**: Fully responsive design for desktop, tablet, and mobile devices.
- **Page Layout Component**: Reusable `PageLayout` component with consistent header and footer.
- **Section Wrapper**: Reusable `SectionWrapper` component for consistent section styling.
- **Page Hero**: Dedicated hero components for the homepage and other pages.
- **Case Study System**: Dedicated pages for showcasing case studies.

## Pages

- **Home**: Introduction to Kadix Labs, services, and featured case studies.
- **About**: Company mission, vision, values, and team.
- **Services**: Detailed breakdown of services offered.
- **Portfolio**: List of all case studies.
- **Case Study**: Individual case study pages (e.g., FinFlow, MedConnect).
- **Contact**: Contact information and inquiry form.

## Tech Stack

- **React**: UI library for building the user interface.
- **TypeScript**: Type safety for the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Lucide React**: Icon library.
- **React Router**: For client-side routing.

## Project Structure

```
src/
├── components/        # Reusable components
│   ├── PageLayout.tsx   # Main layout with header and footer
│   ├── PageHero.tsx     # Hero section component
│   ├── SectionWrapper.tsx # Section styling component
│   └── ...
├── pages/             # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Contact.tsx
│   └── ...
├── assets/            # Static assets
│   └── images/        # Images and icons
├── App.tsx            # Main application component
└── main.tsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd kadix-labs
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
