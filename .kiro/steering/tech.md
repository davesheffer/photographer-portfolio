# Technology Stack

## Framework & Build System
- **Next.js 14.2.23** - React framework with App Router
- **React 18** - UI library
- **Node.js** - Runtime environment

## Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Google Fonts** - Amatic SC (Hebrew) and Open Sans (Hebrew) fonts
- **React Icons 5.2.1** - Icon library

## Image & Media Handling
- **Swiper 11.1.4** - Touch slider/carousel library
- **Next.js Image** - Optimized image component
- Static image imports from `/public` directory

## Development & Deployment
- **ESLint** - Code linting via Next.js
- **Vercel** - Recommended deployment platform

## Common Commands
```bash
# Development
npm run dev          # Start development server on localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Key Dependencies
- All images are statically imported and organized in `/public` folders
- Hebrew language support with RTL (right-to-left) layout
- Client-side components use "use client" directive
- Dynamic imports for gallery components to optimize loading