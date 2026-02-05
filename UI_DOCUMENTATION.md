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
- **White**: `#FFFFFF` - Main background
- **Gray 50**: `#F9FAFB` - Section backgrounds

---

## Navigation Bar
**Component**: `Navigation.tsx`

### Features
- Fixed position at top of viewport
- Transparent initially, becomes `bg-white/80 backdrop-blur-lg` on scroll
- Glass-morphic effect with subtle shadow
- Smooth slide-down animation on mount
- Uses smooth scroll behavior (react-scroll or CSS scroll-behavior: smooth)

### Layout
**Left**: BuyOps Logo (SVG, 120x40px)

**Center** (Desktop only):
- Ecosystem (smooth scroll to Section 2: Persona Switcher)
- Inventory (smooth scroll to Section 3: Gallery)
- The Trail (smooth scroll to Section 4: Digital Trail)
- FAQ (smooth scroll to Section 6)

**Right**:
- "Join Waitlist" (primary blue button, triggers modal or scrolls to footer)

### Styling
- Height: 80px (5rem)
- Container: max-width 1280px, horizontal padding
- Logo scales on hover
- Nav links: gray text → blue on hover
- One-pager scroll navigation

---

## Section 1: Enhanced Hero (The "Catchy" Reveal)
**Component**: `HeroSection.tsx`
**Background**: Dynamic gradient with parallax layers

### Concept
High-impact, interactive parallax playground with mouse-follow effects

### Visual Mechanics

#### Mouse-Follow Parallax (3 Layers)
**Layer 1 (Background)**:
- Large, outlined typography ("ESTATE")
- Moves slowly with mouse (transform based on mouse X/Y)
- Low opacity, decorative element

**Layer 2 (Middle)**:
- High-resolution 3D render of modern Nigerian architectural structure (glass villa)
- Tilts slightly based on cursor position (rotateX/rotateY based on mouse coordinates)
- Main visual focus

**Layer 3 (Foreground)**:
- Floating UI elements (price tags, "Verified" badges)
- Moves faster than house to create depth perception
- Interactive hover states

#### The "Color Reveal" Cursor
- Large circular "lens" (150px diameter) follows mouse
- Uses `mix-blend-mode: difference`
- Content underneath changes from brand-dark to white/brand-blue as cursor passes over
- Creates interactive discovery effect

### Content
**Headline**: 
```
Real Estate Wealth,
Unlocked.
```
- Font: 8xl, ultra-bold
- Gradient text effect

**Subheadline**:
"Nigeria's premier ecosystem connecting asset owners, agents, and investors."

**Primary CTA**:
- Button: "Join the Waitlist"
- Pulse animation (scale + opacity loop)
- Glass-morphic style (see design pattern below)

### Technical Implementation
- Custom hook: `useMousePosition()` tracks cursor X/Y
- Framer Motion `motion.div` for parallax layers
- Transform properties: `translateX`, `translateY`, `rotateX`, `rotateY`
- Parallax calculation: `(mouseX - centerX) * speedFactor`

---

## Section 2: Interactive Trinity (Tab-Based Persona Experience)
**Component**: `PersonaSwitcher.tsx`
**Background**: Dynamic (changes per selected tab)

### Layout

#### Sticky Tab Bar
- Pill-shaped switcher at top of section
- Three tabs: **Asset Owners** | **Sales Agents** | **Investors**
- Active tab has background color matching persona theme
- Smooth sliding indicator animation

### The "Morphing" Section
When a tab is clicked, entire section transitions (0.5s Framer Motion):
- Background color
- Accent colors
- Hero imagery
- Text content
- Animation style

---

### Persona 1: Asset Owners
**Theme Color**: Indigo (`#4338CA`)

**Headline**: "Monetize your Land & Property."

**Description**: "Transform your real estate assets into income-generating fractions. BuyOps Admin gives you total control over asset lifecycle, investor management, and revenue distribution."

**Hero Image**: Dashboard showing "Portfolio Value" graph with upward trend

**Features**:
- Multi-step Asset Wizard (Land, Off-plan, Under Construction)
- Automated Fraction Distribution System
- Real-time Revenue Analytics
- Investor Relations Dashboard
- Legal Documentation Management

**Visual Stats**:
- Total Assets Listed: 156
- Average ROI Delivered: 18%
- Revenue Generated: ₦847M

**Animation Style**: Smooth, steady "Growth" charts with line graphs rising

**CTA**: "List Your Property" (Indigo button)

---

### Persona 2: Sales Agents
**Theme Color**: Green (`#10B981`)

**Headline**: "Sell Faster, Earn Sooner."

**Description**: "Empower your sales pipeline with zero-friction lead management. Close deals without cash handling and earn commissions instantly through our velocity layer."

**Hero Image**: Mobile app showing "Commission Earned" with notification badges

**Features**:
- 4-Tab Lead Pipeline (Personal, Assigned, Freelancer, Archive)
- Instant Commission Calculator (Lead Finder vs. Deal Closer)
- One-Click Payment Link Generation
- Real-time Lead Status Tracking
- Automated Follow-up System

**Visual Stats**:
- Active Leads: 127
- Deals Closed This Month: 43
- Commission Earned: ₦12.4M

**Animation Style**: Fast, snappy "Lead" notification pops and status changes

**CTA**: "Start Selling" (Green button)

---

### Persona 3: Investors
**Theme Color**: Blue (`#2563EB`)

**Headline**: "Buy the Future, One Piece at a Time."

**Description**: "Access premium real estate fractions with complete transparency. Track your portfolio in real-time and access 7-section asset intelligence from anywhere."

**Hero Image**: 3D Map of Nigeria showing "Fractions Owned" with property pins

**Features**:
- Fractional Ownership Model (Not Percentages)
- 7-Section Deep-Dive Asset Intelligence
- Real-time Portfolio Valuation
- Automated Digital Certificates (PR-HRL-####)
- Dividend Tracking & Payouts

**Visual Stats**:
- Properties Available: 500+
- Average Entry Point: ₦850K
- Total Investors: 10,000+

**Animation Style**: Floating "Fraction" cards that drift and settle

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
- Card lifts up (y: -8px)
- Metadata reveals (ROI, Risk, Availability)
- **NEW**: Entire section background subtly shifts to blurred version of that property's image
- Background transition: 0.4s ease

#### Property Cards (380px width)
**Card 1: The Grandeur Suites** 🔥 HOT DEAL
- Location: Lekki Phase 1
- Price: ₦5,000,000 per fraction
- Status: Under Construction
- Expected ROI: 18%
- Risk: Low
- Available: 8/20 fractions
- Hot Deal Tag: Pulsing red badge

**Card 2: Emerald Garden**
- Location: Epe, Lagos
- Price: ₦850,000 per fraction
- Status: Land/Development
- Expected ROI: 15%
- Risk: Low (Asset Backed)
- Available: 22/30 fractions

**Card 3: Abuja Smart Hub**
- Location: Maitama
- Price: ₦12,500,000 per fraction
- Status: Completed
- Expected ROI: 12% Annual Rental
- Risk: Low
- Available: 3/10 fractions

### Footer
- Text: "Hover to preview property details"
- Button: "Explore All Properties" (blue, filled, opens to full inventory page)

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

#### Right: Process Steps
**Step 01: Deploy**
Title + Description + 4 bullet points
- Admin creates secure asset entry with verified legal documentation

**Step 02: Engage**
- Sales agents manage leads through 4-tab system

**Step 03: Transact**
- "Ready to Buy" workflow triggers secure gateway
- No agent touches cash

**Step 04: Verify**
- System auto-generates PR-HRL-#### code
- Digital Deed issued

### Styling
- Each step in white card with border
- Numbered badges (01, 02, 03, 04)
- Step numbers highlighted based on scroll position
- Bullet points with checkmarks

---

## Section 5: Trust & Transparency
**Component**: `TrustSection.tsx`
**Background**: White

### Header
Title: "Engineered for Trust."

### Layout
4-column grid (responsive to 2 cols on tablets, 1 on mobile)

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

## Section 6: FAQ
**Component**: `FAQSection.tsx`
**Background**: Gray 50

### Header
- Title: "Frequently Asked Questions"
- Subtitle: "Everything you need to know about fractional real estate investment"

### FAQ Items (6 questions)
1. What is fractional real estate ownership?
2. How does the payment process work?
3. What are the three BuyOps personas?
4. Is my investment secure?
5. What happens after I purchase a fraction?
6. What fees are involved?

### Interaction
- Accordion-style expandable cards
- Click to expand/collapse
- Smooth height animation
- Down arrow rotates 180° when open

### Footer
- "Still have questions?"
- "Contact Support" button (outlined blue)

---

## Section 7: Waitlist Integration
**Component**: `WaitlistForm.tsx` + `CTAFooter.tsx`
**Background**: Gray 50

### Waitlist Form (Embedded in Hero & Footer)

#### Fields
1. **Name** (Text input)
2. **Email** (Email input with validation)
3. **I am a...** (Dropdown):
   - Asset Owner
   - Sales Agent
   - Investor

#### UX Flow
- On submission: Button transforms into checkmark
- Confetti burst animation using `canvas-confetti`
- Success message: "You're on the list! Check your email."
- Form remains visible with reset option

### Main CTA Card
**Background**: Gradient blue (brand-blue → blue-700)
**Text Color**: White

**Headline**: "Ready to build your fractional portfolio?"
**Subtext**: "Join the 1,000+ agents and investors already scaling on the BuyOps infrastructure."

**Button/Form**: Embedded waitlist form

### Stats Grid
4 columns showing:
- ₦2.5B+ Total Assets Under Management
- 10,000+ Active Investors
- 500+ Properties Listed
- 18% Average ROI

### Footer Links
4 columns:
1. **Product**: Admin, Sales, Investor, Features, Pricing
2. **Company**: About, Careers, Blog, Press, Contact
3. **Resources**: Docs, API, Tutorials, Case Studies, FAQs
4. **Legal**: Privacy, Terms, Cookie, Compliance, Security

### Bottom Bar
- Left: BuyOps Logo
- Center: © 2026 BuyOps. Built for Nigeria's smartest investors.
- Right: Social links (Twitter, LinkedIn, Instagram, Facebook)

---

## Design Patterns

### The "Glass" Card
```css
.card-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
    page.tsx                # Main page composition
    layout.tsx              # Font setup, Navigation
    globals.css             # Global styles, utilities
  /components
    Navigation.tsx          # Smooth scroll navigation
    SmoothScrollProvider.tsx
    /sections
      HeroSection.tsx       # Interactive parallax hero
      PersonaSwitcher.tsx   # 3-tab morphing section
      FractionalGallery.tsx # Enhanced with hot deals
      DigitalTrailSection.tsx
      TrustSection.tsx
      FAQSection.tsx
      WaitlistForm.tsx      # Form component
      CTAFooter.tsx         # Footer with embedded waitlist
  /hooks
    useMousePosition.ts     # Track cursor for parallax
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
