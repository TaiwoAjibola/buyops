# BuyOps Landing Page

A high-performance, high-animation landing page for BuyOps - The unified ecosystem for Nigeria's smartest investors, agents, and administrators.

## 🎨 Design Features

- **Deep Indigo Background** (#020617) with Teal (#2DD4BF) and Royal Blue (#3B82F6) accents
- **Bento Grid Layout** with rounded-3xl cards and glass-morphic effects
- **Smooth Scroll** powered by Lenis
- **Advanced Animations** using Framer Motion with scroll-linked parallax effects
- **Responsive Design** optimized for all devices

## 🚀 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Lenis** - Smooth scroll

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with smooth scroll
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── BentoCard.tsx       # Reusable bento card component
│   ├── ScrollSection.tsx   # Parallax scroll section
│   ├── AppPreview.tsx      # App preview component
│   ├── SmoothScrollProvider.tsx  # Lenis wrapper
│   └── sections/
│       ├── HeroSection.tsx           # Section 1: Hero with certificate
│       ├── TrinitySection.tsx        # Section 2: The 3 apps
│       ├── FractionalGallery.tsx     # Section 3: Property marquee
│       ├── DigitalTrailSection.tsx   # Section 4: Sticky sidebar
│       └── CTAFooter.tsx             # Section 5: CTA & Footer
```

## ✨ Key Features

### Section 1: Hero
- Staggered text entrance animation
- Floating glass-morphic Digital Property Certificate
- Mouse-tilt effect on certificate card
- Smooth scroll indicator

### Section 2: The Trinity
- **BuyOps Admin**: Command center with live revenue counter
- **BuyOps Sales**: 4-tab lead management with pulsing CTA
- **BuyOps Investor**: Mobile frame showing fractional tiles

### Section 3: Fractional Gallery
- Infinite horizontal marquee
- Property cards with hover "explode" effect
- Shimmer effect on Naira (₦) prices
- Metadata reveal on hover (ROI, Risk Level, Fractions)

### Section 4: Digital Trail
- Sticky sidebar with 4 illuminating steps
- Scroll-linked opacity and scale effects
- Detailed process breakdown
- Registration code visualization

### Section 5: CTA & Footer
- Large bento footer with glowing "Get Started" button
- Stats grid showing key metrics
- Comprehensive footer links
- Social media integration

## 🎯 Performance Optimizations

- Lazy loading of components
- Optimized animations with `will-change`
- Efficient scroll listeners
- Image optimization (placeholder SVGs)
- Minimal re-renders with `viewport={{ once: true }}`

## 💰 Currency Format

All monetary values use the Nigerian Naira symbol: **₦**

## 🎭 Animation Highlights

- **useScroll & useTransform** for parallax effects
- **Staggered animations** for text entrances
- **Mouse-tracking** for 3D tilt effects
- **Infinite marquees** for seamless scrolling
- **Pulse & glow effects** for CTAs

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Customization

All colors and animations can be customized in:
- `tailwind.config.ts` - Theme configuration
- `src/app/globals.css` - Custom CSS utilities

## 📄 License

© 2026 BuyOps. Built for Nigeria's smartest investors.
