# Project Structure

## Directory Organization

### `/src/app` - Next.js App Router
- `page.js` - Home page with image slider
- `layout.js` - Root layout with Hebrew fonts and RTL support
- `globals.css` - Global styles
- `/blog` - Blog pages with dynamic routing
- `/contact` - Contact page
- `/gallery/[slug]` - Dynamic gallery pages
- `/lib` - Shared utilities and configurations

### `/src/components` - React Components
- `Navigation.js` - Main navigation with mobile/desktop variants
- `HomeSlide.js` - Individual slide component for homepage
- `PostCard.js` - Blog post card component
- `/galleryMulti` - Multi-image gallery components with lightbox
- `/galleryRegular` - Single-image gallery components with lightbox

### `/public` - Static Assets
- `/art` - Artistic photography images
- `/cars` - Car photography images  
- `/com` - Community/people photography
- `/slider` - Homepage slider images
- `/wg` - Wedding gallery organized by subcategories (bama, bd, family, friends, etc.)

## Key Patterns

### Gallery System
- **Gallery Config** (`/lib/galleryConfig.js`) - Maps gallery types to components
- **Image Data** (`/lib/images.js`) - Centralized image imports and metadata
- **Component Types**: Regular (single images) vs Multi (grouped galleries)
- **Dynamic Routing**: `/gallery/[slug]` loads appropriate gallery component

### Component Architecture
- Client components use `"use client"` directive
- Dynamic imports for performance optimization
- Responsive design with mobile-first approach
- Hebrew RTL layout support throughout

### File Naming
- `.js` for React components and pages
- `.jsx` for complex gallery components
- Kebab-case for directories
- PascalCase for component files

### Image Management
- All images statically imported in `/lib/images.js`
- Organized by category in `/public` folders
- Metadata includes alt text, style (landscape/portrait), and featured flags