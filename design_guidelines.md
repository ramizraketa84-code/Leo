# Design Guidelines: TrimoO Community Hub

## Design Approach
**Reference-Based**: Drawing from leading gaming/streaming platforms (Twitch, Discord, YouTube Gaming) with dark, vibrant aesthetics that emphasize community and energy while maintaining professional polish.

## Core Design Elements

### Color Palette
**Dark Mode Primary** (entire site):
- Background: 220 15% 8% (deep dark blue-gray)
- Surface: 220 15% 12% (slightly elevated dark)
- Primary Accent: 280 85% 65% (vibrant purple - streaming brand color)
- Secondary Accent: 200 95% 55% (electric cyan for highlights)
- Success/Interactive: 145 65% 55% (modern green for CTAs)

**Platform Brand Colors** (use official colors for each platform's card/button):
- Twitch: 260 100% 63%
- YouTube: 0 100% 50%
- TikTok: 348 100% 57%
- Kick: 120 100% 40%

### Typography
**Font Stack**: 
- Primary: 'Inter' (Google Fonts) - clean, modern sans-serif
- Accent/Headers: 'Space Grotesk' (Google Fonts) - bold, gaming-friendly headings

**Hierarchy**:
- Hero Title: 4xl-6xl, font-bold, tracking-tight
- Section Headers: 3xl-4xl, font-bold
- Platform Names: xl-2xl, font-semibold
- Body: base-lg, font-normal

### Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-16 md:py-24
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Container Strategy**:
- Max width: max-w-6xl for content sections
- Full-width backgrounds with inner containers

## Component Library

### Welcome Modal (Initial Interaction)
**Design**: Centered overlay with backdrop blur effect
- Semi-transparent dark background (bg-black/60 backdrop-blur-md)
- Modal card: Rounded-2xl with gradient border effect
- Question text: "Where did you hear about TrimoO?" in 2xl-3xl
- Platform buttons: 2x2 grid on mobile, 4-column on desktop
- Each button: Platform logo + name, hover scale effect, official brand colors
- Smooth fade-in animation on page load

### Hero Section
**Layout**: Full viewport height (min-h-screen) with animated gradient background
- Background: Animated gradient mesh (purple → cyan → dark purple)
- Overlay pattern: Subtle geometric grid or particle effect
- Content: Centered, z-layered above background
- Profile image: Large circular avatar (w-32 md:w-48) with glowing ring effect
- Name/Title: Large typography with gradient text effect
- Tagline: Professional streamer description

### Social Links Grid
**Design**: 2x2 mobile, 4-column desktop grid of platform cards
- Each card: 
  - Aspect-square with rounded-xl borders
  - Platform logo centered (large, 40-48px)
  - Platform name below logo
  - Gradient background using platform brand colors
  - Hover: Lift effect (scale-105) + glow shadow
  - Click: Opens platform link

**Platform Order**: Twitch, YouTube, TikTok, Kick

### Sponsors Section
**Layout**: Horizontal showcase with premium presentation
- Section title: "Proudly Sponsored By"
- Sponsor cards: 2-column grid (mobile stack)
- Each card:
  - Large sponsor logo (OperaGX, Skinsplace)
  - Dark surface with subtle gradient border
  - Hover glow effect
  - Equal prominence for both sponsors

### Navigation/Header
**Sticky header** with glass-morphism effect:
- Logo/Name left-aligned
- Smooth blur background (backdrop-blur-lg)
- Minimal, letting content shine

### Footer
**Simple, elegant**:
- Copyright notice
- Social icons row
- Dark background matching overall theme

## Animations & Interactions
- Page load: Staggered fade-in for all sections (250ms delays)
- Modal: Smooth scale + fade entrance
- Platform cards: Hover scale (1.05) with 200ms transition
- Sponsor cards: Glow effect on hover
- Gradient backgrounds: Subtle animated shift (slow, 10s+ duration)

## Images
**Large Hero Image**: YES
- **Hero Background**: Abstract gaming/streaming themed gradient mesh or particle effect background (can use CSS gradients + animated blur effects, no static image needed - pure CSS art)
- **Profile Image**: Circular streamer avatar in hero section (128-192px diameter)
- **Platform Logos**: Official SVG icons for Twitch, YouTube, TikTok, Kick (use icon libraries or CDN)
- **Sponsor Logos**: OperaGX and Skinsplace official logos (high-res PNGs on dark backgrounds)

## Responsive Strategy
**Mobile-First**:
- Modal: Stack platform buttons 2x2
- Hero: Reduce title size, smaller profile image
- Social grid: 2 columns
- Sponsors: Stack vertically
- Maintain consistent spacing rhythm (py-12 md:py-24)

**Key Breakpoint**: md (768px) for major layout shifts

## Critical Design Notes
- Entire site uses dark theme - no light mode toggle
- Every interactive element has hover state
- Blur backgrounds on any buttons over images/gradients
- Professional polish = consistent shadows, rounded corners, smooth transitions
- Gaming aesthetic ≠ chaotic; maintain clean hierarchy and breathing room