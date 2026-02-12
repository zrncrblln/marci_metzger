# Operator/Investigator Guide: Marci Metzger Real Estate Website

## Overview

This workspace contains the Marci Metzger Real Estate website, a modern real estate platform built with React, TypeScript, and Tailwind CSS. The website showcases luxury properties, provides information about real estate services, and serves as a lead generation tool for Marci Metzger's real estate business.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd marci-metzger
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Access the website at `http://localhost:8081` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Website Structure and Navigation

### Main Sections

#### 1. Navigation Bar

- **Location**: Fixed at the top of the page
- **Features**:
  - Logo/Brand name
  - Navigation links: Features, Properties, Blog, Contact
  - Mobile-responsive hamburger menu
  - Smooth scroll to sections

#### 2. Hero Section

- **Purpose**: Main landing area with compelling visuals
- **Content**:
  - Background image of luxury villa
  - Headline: "Pahrump Realtor"
  - Subtitle with professional description
  - Call-to-action button linking to phone

#### 3. Testimonial Section

- **Purpose**: Build credibility and trust
- **Content**:
  - Professional photo of Marci Metzger
  - 5-star rating display
  - Personal testimonial about community and services
  - Professional credentials

#### 4. Image Showcase

- **Purpose**: Visual appeal and property previews
- **Content**: Carousel of 6 high-resolution property images

#### 5. Features Section

- **Purpose**: Highlight key selling points
- **Content**:
  - Exceptional Craftsmanship
  - Smooth Journey
  - Adaptable Design
  - Custom Design
  - Prime Locations

#### 6. Properties Section

- **Purpose**: Showcase available properties
- **Content**:
  - 6 featured properties in grid layout
  - Property cards with:
    - High-quality images (16:9 aspect ratio)
    - Property badges (Featured/For Sale/For Rent)
    - Price overlays
    - Property details (bedrooms, bathrooms, area)
    - Location information
    - "View Details" call-to-action

#### 7. Blog Section

- **Purpose**: Content marketing and SEO
- **Content**: Latest blog posts about real estate topics

#### 8. Testimonials Section

- **Purpose**: Social proof
- **Content**: Multiple customer testimonials with ratings

#### 9. FAQ Section

- **Purpose**: Address common questions
- **Content**: Expandable FAQ items covering services and processes

#### 10. Call-to-Action Section

- **Purpose**: Convert visitors to leads
- **Content**: Prominent CTA for getting started

#### 11. Contact Section

- **Purpose**: Contact information and lead capture
- **Content**:
  - Contact details
  - Business hours
  - Contact form

#### 12. Footer

- **Purpose**: Legal and additional navigation
- **Content**: Copyright, links, and legal information

## Key Features and Functionality

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimized layouts
- Fluid typography and spacing

### Interactive Elements

- Smooth scrolling navigation
- Hover effects on property cards
- Expandable FAQ sections
- Image zoom on property hover

### Performance Optimizations

- Vite build system for fast development
- Optimized images and assets
- Lazy loading where applicable

### Accessibility

- Semantic HTML structure
- Proper alt tags for images
- Keyboard navigation support
- Screen reader friendly

## Content Management

### Property Listings

- Located in `src/components/PropertiesSection.tsx`
- Property data array with:
  - Name, location, price
  - Bedrooms, bathrooms, area
  - Badge type, image path

### Testimonials

- Customer testimonials in `src/components/TestimonialsSection.tsx`
- Testimonial quotes with ratings

### Images and Assets

- Property images in `src/assets/`
- Logo and branding assets
- High-resolution photos for showcase

## Technical Architecture

### Frontend Stack

- **React 18**: Component-based UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and dev server
- **shadcn/ui**: Modern UI component library
- **Lucide React**: Icon library

### Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── ui/        # shadcn/ui components
│   └── ...        # Feature components
├── pages/         # Page components
├── assets/        # Static assets
├── lib/           # Utility functions
└── hooks/         # Custom React hooks
```

### Key Components

- `Navbar.tsx`: Navigation component
- `HeroSection.tsx`: Main landing section
- `PropertiesSection.tsx`: Property listings
- `TestimonialQuote.tsx`: Main testimonial
- `ContactSection.tsx`: Contact information

## Deployment and Production

### Build Process

1. Run `npm run build` to create production build
2. Output in `dist/` directory
3. Deploy static files to web server

### Environment Configuration

- Development: `http://localhost:8081`
- Production: Configure domain and hosting

## Maintenance and Updates

### Content Updates

- Property listings: Update `properties` array in `PropertiesSection.tsx`
- Testimonials: Modify testimonial data
- Images: Replace in `src/assets/` directory

### Code Updates

- Follow existing patterns and conventions
- Use TypeScript for type safety
- Maintain responsive design principles
- Test across devices and browsers

## Contact Information

- **Agent**: Marci J Metzger
- **Phone**: (206) 919-6886
- **Email**: [contact email]
- **Location**: Pahrump, Nevada
- **Credentials**: REALTOR for Nearly Three Decades

## Troubleshooting

### Common Issues

- **Build fails**: Ensure Node.js version 18+
- **Images not loading**: Check asset paths in `src/assets/`
- **Styling issues**: Verify Tailwind classes and responsive breakpoints

### Development Tips

- Use browser dev tools for debugging
- Check console for TypeScript errors
- Test responsive design with device emulation

## Security Considerations

- No sensitive data stored in frontend
- All contact forms should route through secure backend
- Regular dependency updates for security patches
- HTTPS implementation for production

---

This guide provides comprehensive information for operators and investigators to effectively use and maintain the Marci Metzger Real Estate website workspace.
