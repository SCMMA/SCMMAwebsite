# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for St. Charles Mixed Martial Arts (SCMMA), built with vanilla HTML, CSS, and JavaScript. The site consists of multiple pages showcasing the gym's programs, schedule, coaches, and facilities.

## Website Architecture

### Core Files
- `index.html` - Homepage with hero video/image, features, and contact info
- `gym.html` - Gym facilities, equipment, coaches gallery, and facility photos
- `kids.html` - Kids martial arts programs (ages 5-13) with detailed descriptions
- `schedule.html` - Class schedule image and program descriptions
- `news.html` - News page (currently unused/commented out in navigation)
- `styles.css` - All CSS styles including responsive design and page-specific styles
- `script.js` - JavaScript for navigation, mobile menu, smooth scrolling, and animations

### Assets Directory
Contains all media files including:
- Logo files (SVG format for scalability)
- Coach photos and facility images
- Video content for hero section
- Schedule and promotional images

## Key Features

### Responsive Design
- Mobile-first approach with breakpoint at 768px
- Dynamic mobile navigation menu with hamburger button
- Hero section switches from video to static image on mobile
- Logo visibility controlled per page on mobile

### Navigation System
- Active page highlighting via JavaScript
- Smooth scrolling for anchor links
- Mobile hamburger menu with slide-out navigation

### Page-Specific Content
- **Homepage**: Hero video/image, feature cards, contact information
- **Gym Page**: Coach profiles, facility gallery, equipment descriptions
- **Kids Page**: Age-specific program details, testimonials
- **Schedule Page**: Visual schedule with class descriptions

## Development Workflow

Since this is a static website with no build process:

1. **Live Testing**: Open HTML files directly in browser or use a simple HTTP server
2. **File Serving**: Use `python -m http.server 8000` or similar for local development
3. **Asset Management**: All assets are in the `Assets/` directory - maintain relative paths
4. **Cross-browser Testing**: Test responsive design across different screen sizes

## Content Management

### Adding New Coaches
1. Add coach image to `Assets/` directory
2. Update `gym.html` in the coaches section
3. Follow existing card structure with proper alt text

### Updating Schedule
1. Replace `Assets/Schedule.jpg` with new schedule image
2. Update class descriptions in `schedule.html` if needed

### Navigation Updates
If adding new pages:
1. Update navigation in all HTML files (header and footer)
2. Add corresponding navigation ID and update `script.js` active link logic
3. Ensure mobile navigation includes new links

## Styling Guidelines

- Primary brand color: `#ff4500` (orange)
- Dark theme: `#202020` for headers, `#333` for text
- Card design: Use existing `.program-card`, `.feature`, `.info-box` classes
- Images: Maintain aspect ratios, use object-fit for consistency
- Responsive: Test all changes at mobile breakpoint (768px)

## Browser Compatibility

The site uses modern CSS features and JavaScript ES6+. Ensure compatibility with:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- CSS Grid and Flexbox are used extensively