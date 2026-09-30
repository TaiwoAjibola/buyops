# BuyOps Landing Page v2 - UI Documentation

## Overview

A modern, high-impact landing page for BuyOps - Nigeria's first unified fractional real estate ecosystem. Built with Next.js, React, Tailwind CSS, and Framer Motion. Features interactive parallax effects, persona-based tab switching, and waitlist integration.

---

## Typography

- **Primary Font**: Jost (headings, titles, emphasis)
- **Secondary Font**: Jost (body copy, buttons, links)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Color Palette

- **Brand Dark**: `#0F172A` - Primary text, headings
- **Brand Blue**: `#2563EB` - Investors persona
- **Brand Green**: `#10B981` - Sales Agents persona
- **Brand Indigo**: `#4338CA` - Asset Owners persona
- **Brand Gray**: `#64748B` - Secondary text, metadata
- **Brand Light**: `#F8FAFC` - Backgrounds, subtle fills

### Section 2: Interactive Trinity (Tab-Based Persona Experience)

**Component**: `PersonaSwitcher.tsx`
**Background**: Dynamic (changes per selected tab)

---

## Navigation Bar

**Component**: `Navigation.tsx`

- Glass-morphic effect with subtle shadow
- Smooth slide-down animation on mount
- Uses smooth scroll behavior (react-scroll or CSS scroll-behavior: smooth)
- Ecosystem (smooth scroll to Section 2: Persona Switcher)
- The Trail (smooth scroll to Section 4: Digital Trail)
- FAQ (smooth scroll to Section 6)

**Right**:

- "Join Waitlist" (primary blue button, triggers modal or scrolls to footer)

### Styling

- Height: 80px (5rem)
- Container: max-width 1280px, horizontal padding
- Logo scales on hover
- Nav links: gray text → blue on hover
  **Component**: `HeroSection.tsx`
  **Background**: Dynamic gradient with parallax layers

### Visual Mechanics

#### Mouse-Follow Parallax (3 Layers)

**Layer 1 (Background)**:

- Moves slowly with mouse (transform based on mouse X/Y)
- Low opacity, decorative element

**Layer 2 (Middle)**:

- High-resolution 3D render of modern Nigerian architectural structure (glass villa)
- Tilts slightly based on cursor position (rotateX/rotateY based on mouse coordinates)
- Main visual focus

**Layer 3 (Foreground)**:

- Floating UI elements (price tags, "Verified" badges)
- Moves faster than house to create depth perception
- Content underneath changes from brand-dark to white/brand-blue as cursor passes over
- Creates interactive discovery effect

```
Real Estate Wealth,
Unlocked.
```

- Font: 8xl, ultra-bold

**Subheadline**:
"Nigeria's premier ecosystem connecting asset owners, agents, and investors."

**Primary CTA**:

- Button: "Join the Waitlist"
- Pulse animation (scale + opacity loop)
- Glass-morphic style (see design pattern below)

### Technical Implementation

- Custom hook: `useMousePosition()` tracks cursor X/Y

## Section 2: Interactive Trinity (Tab-Based Persona Experience)

### Layout

#### Sticky Tab Bar

- Pill-shaped switcher at top of section
- Three tabs: **Asset Owners** | **Sales Agents** | **Investors**
- Smooth sliding indicator animation

### The "Morphing" Section

When a tab is clicked, entire section transitions (0.5s Framer Motion):

- Background color
- Accent colors
- Animation style

### Persona 1: Asset Owners

**Theme Color**: Indigo (`#4338CA`)

**Headline**: "Monetize your Land & Property."

**Features**:

- Multi-step Asset Wizard (Land, Off-plan, Under Construction)
- Automated Fraction Distribution System
- Revenue Generated: ₦847M

### Persona 2: Sales Agents

**Theme Color**: Green (`#10B981`)

**Features**:

- One-Click Payment Link Generation
- Automated Follow-up System

**Visual Stats**:

- Active Leads: 127
- Deals Closed This Month: 43
- Commission Earned: ₦12.4M

**CTA**: "Start Selling" (Green button)

---

### Persona 3: Investors

**Theme Color**: Blue (`#2563EB`)

**Headline**: "Buy the Future, One Piece at a Time."

**Hero Image**: 3D Map of Nigeria showing "Fractions Owned" with property pins
**Features**:

- Fractional Ownership Model (Not Percentages)
- Automated Digital Certificates (PR-HRL-####)
- Dividend Tracking & Payouts
- Properties Available: 500+
- Average Entry Point: ₦850K
  **CTA**: "Browse Properties" (Blue button)

---

### State Management

- `activeTab` state: 'owners' | 'agents' | 'investors'
- Drives theme colors, content, and animations across entire section
- AnimatePresence for smooth content transitions

---

## Section 3: Enhanced Fractional Gallery (Active Inventory)

**Component**: `FractionalGallery.tsx`
**Background**: Gray 50 (dynamically shifts to blurred property image on hover)

### Header

- Title: "Active Inventory"
- Subtitle: "Premium real estate opportunities, one fraction at a time"

### The Marquee Enhancement

- Infinite horizontal loop (60s duration)
- **NEW**: "Hot Deal" tag on specific high-value properties
  - Red/orange pulse animation
  - "Limited Fractions Available" badge

### Interactive Cards (Enhanced)

**On Hover**:

**Card 1: The Grandeur Suites** 🔥 HOT DEAL

- Location: Lekki Phase 1
- Price: ₦5,000,000 per fraction
- Status: Under Construction
- Expected ROI: 18%
- Risk: Low

**Card 2: Emerald Garden**

- Location: Epe, Lagos
- Price: ₦850,000 per fraction
- Status: Land/Development
- Expected ROI: 15%
- Risk: Low (Asset Backed)
- Available: 22/30 fractions

**Card 3: Abuja Smart Hub**

- Risk: Low
- Available: 3/10 fractions
- Text: "Hover to preview property details"

---

## Section 4: Digital Trail

**Component**: `DigitalTrailSection.tsx`
**Background**: White

### Header

- Title: "The Digital Trail"
- Subtitle: "Every transaction, fully transparent and secure from start to finish"

### Layout

2-column grid (sticky sidebar + scrolling content)

#### Left: Sticky Sidebar (Desktop)

Numbered badges for current step in view

- Admin creates secure asset entry with verified legal documentation

**Step 02: Engage**

- Sales agents manage leads through 4-tab system

**Step 03: Transact**

- "Ready to Buy" workflow triggers secure gateway
- No agent touches cash

**Step 04: Verify**

- System auto-generates PR-HRL-#### code
- Digital Deed issued
- Step numbers highlighted based on scroll position
- Bullet points with checkmarks

---

## Section 5: Trust & Transparency

**Component**: `TrustSection.tsx`
**Background**: White

### Layout

#### Feature Cards

1. **Native Currency**
   - Everything priced and settled in Nigerian Naira (₦)

2. **Zero-Cash Policy**
   - 100% digital payment trails for security and transparency

3. **Role-Based Access**
   - Distinct dashboards for Asset Owners, Sales Agents, and Investors

4. **Data-Driven**
   - 7-section asset analysis covering ROI, Risk, and Legal status

### Styling

- Glass-morphic cards (see design pattern)
- Center-aligned text
- Bold titles, gray body copy
- Hover: enhanced shadow + backdrop blur increase

---

### FAQ Items (6 questions)

1. What is fractional real estate ownership?

### Interaction

### Footer

---

### Waitlist Form (Embedded in Hero & Footer)

#### Fields

1. **Name** (Text input)
2. **Email** (Email input with validation)
3. **I am a...** (Dropdown):

#### UX Flow

- Form remains visible with reset option

**Headline**: "Ready to build your fractional portfolio?"

### Stats Grid

- 18% Average ROI

### Footer Links

4 columns:

- Center: © 2026 BuyOps. Built for Nigeria's smartest investors.

---

box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
}

```

**Usage**: Hero CTA buttons, Trust section cards, Floating UI elements

**Tailwind Equivalent**:
```

bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg

```

### Animations
- **Scroll-triggered**: `whileInView` with `viewport={{ once: true }}`
- **Fade & Slide Up**: Most sections (opacity 0→1, y 30→0)
- **Stagger delays**: 0.1s per item in grids
- **Hover effects**: Scale 1.02, y: -4px
- **Button taps**: Scale 0.98
- **Pulse**: Scale 1.05 + opacity 0.8, infinite loop
- **Parallax**: Transform based on mouse position
- **Color Reveal**: Mix-blend-mode cursor effect

### Cards
**Base Class**: `card-modern`
- Rounded corners (rounded-lg = 8px)
- Border (1px gray-200)
- White background
- Shadow (sm → md on hover)
- Transition: 300ms

**Glass Variant**: `card-glass`
- Semi-transparent background
- Backdrop blur
- Enhanced shadow
- Light border

### Spacing
- **Section Padding**: `section-padding` = py-24 (mobile) → py-32 (desktop)
- **Container**: `container-custom` = max-w-7xl, px-6 → px-12
- **Grid Gaps**: 6-12 (1.5rem - 3rem)

### Responsive Breakpoints
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

---

## Technical Stack

### Core
- Next.js 14.2.35 (App Router)
- React 18
- TypeScript 5.3.0

### Styling
- Tailwind CSS 3.4.0
- Custom utility classes
- Glass-morphism effects

### Animation
- Framer Motion 11.0.0
- Lenis 1.1.0 (smooth scroll)
- canvas-confetti (waitlist success)

### New Animation Utilities
- **useMousePosition()**: Custom hook tracking cursor X/Y
- **State Management**: `activeTab` state for persona switching
- **Parallax Layers**: Motion.div with transform calculations

### Assets
- Logo: `/src/media/logo/Buyops Logo.svg`
- Icon: `/src/media/icon/Icon.svg`
- Fonts: Jost (Google Fonts)
- 3D Architecture Renders (to be added)

---

## File Structure (Updated)
```

/src
/app
page.tsx # Main page composition
layout.tsx # Font setup, Navigation
globals.css # Global styles, utilities
/components
Navigation.tsx # Smooth scroll navigation
SmoothScrollProvider.tsx
/sections
HeroSection.tsx # Interactive parallax hero
PersonaSwitcher.tsx # 3-tab morphing section
FractionalGallery.tsx # Enhanced with hot deals
DigitalTrailSection.tsx
TrustSection.tsx
FAQSection.tsx
WaitlistForm.tsx # Form component
CTAFooter.tsx # Footer with embedded waitlist
/hooks
useMousePosition.ts # Track cursor for parallax
/media
/logo
Buyops Logo.svg
/icon
Icon.svg

```

---

## Performance Notes
- Images use Next.js Image component for optimization
- Animations use GPU-accelerated properties (transform, opacity)
- Smooth scroll provided by Lenis or react-scroll
- Font loading from Google Fonts with fallbacks
- All sections use viewport-triggered animations to reduce initial render cost
- Mouse tracking debounced for performance
- Tab switching uses AnimatePresence for smooth transitions

---

## Accessibility
- Semantic HTML (`<section>`, `<nav>`, `<footer>`, `<button>`)
- Alt text on all images
- Keyboard navigation support (tab switching with arrow keys)
- Focus states on interactive elements
- Sufficient color contrast ratios
- Responsive design for all screen sizes
- ARIA labels on interactive elements
- Skip to content link
- Reduced motion support (prefers-reduced-motion media query)
```
