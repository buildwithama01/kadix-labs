

# Kadix Technologies Website

## Overview
A premium, multi-page tech company website inspired by the Charter/fintech aesthetic — minimal, bold, and confident. The site positions Kadix as a venture studio and digital product company, not a typical agency.

## Design System Setup
- Custom CSS variables for the exact color palette (#2b2dff primary, #f9f9ff background, gradients)
- Plus Jakarta Sans font via Google Fonts, Inter fallback
- Tailwind config extended with custom colors, spacing, and typography scale
- Reusable component primitives: gradient buttons (pill), service cards (16px radius), section wrappers with 80-120px padding, badges ("Coming Soon", "Stealth Mode")

## Pages & Structure

### 1. Home Page
- **Hero**: Large bold headline ("Building Scalable Tech Products & Future Companies"), subtext, dual CTAs, floating abstract UI mockup elements on the right
- **Trust Bar**: Tech logos strip (React, Next.js, Python, AI, Cloud)
- **Services Preview**: 3 clean cards (Web & App Dev, AI Automation, SaaS/Product Dev)
- **Portfolio Preview**: 2-3 featured project cards with hover lift
- **Ventures Section**: "What We're Building" with stealth/coming-soon cards
- **About Preview**: Short story + two founder cards with "View Story" links
- **Final CTA**: Full-width gradient section

### 2. Services Page
- Intro section with headline and description
- Detailed breakdown of 3 service areas with icons and descriptions
- Process section (how Kadix works — step-by-step)
- Bottom CTA

### 3. Ventures Page
- Intro positioning Kadix as a venture studio
- Internal product cards (with status badges)
- "Stealth Mode" placeholder cards
- Future vision section

### 4. Portfolio Page
- Grid of project cards (minimal, image + title + tags)
- Optional category filter tabs

### 5. Case Study Page (Template)
- Project overview, problem, solution, tech stack, results
- Clean layout with placeholder images

### 6. About Page
- Company story section
- Mission & vision
- Founders section with clickable cards linking to individual pages

### 7. Founder Page (Template)
- Name, title, personal story, skills, associated projects
- Professional but personal layout

### 8. Venture Detail Page (Template)
- Product name, problem, description, status badge
- Clean startup-style layout

### 9. Contact Page
- Simple form (name, email, project details)
- Short intro text, minimal layout

## Shared Components
- **Navbar**: Sticky with blur, logo left, nav links + gradient CTA right, mobile hamburger menu
- **Footer**: Links, social icons, copyright
- **Section Wrapper**: Consistent max-width 1200px, vertical padding
- **Gradient Button, Secondary Button, Ghost Button**
- **Project Card, Service Card, Venture Card, Founder Card**
- **Badge component** for statuses

## Interactions
- Smooth hover lift on cards
- Subtle fade-in on scroll (intersection observer)
- Navbar blur on scroll
- Gradient button hover transitions (200-300ms)

## Routing
React Router with routes for all 9+ pages, using dynamic routes for case studies, ventures, and founders.

