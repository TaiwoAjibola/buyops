# BuyOps Development Guide

## 🎯 Quick Start

Your development server is now running at: **http://localhost:3000**

## 📋 What's Been Built

### ✅ Complete Sections

1. **Hero Section** - Staggered text animation + floating certificate with 3D tilt
2. **Trinity Section** - Three app previews (Admin, Sales, Investor) with scroll animations
3. **Fractional Gallery** - Infinite marquee with hover-explode property cards
4. **Digital Trail** - Sticky sidebar with 4-step process
5. **CTA Footer** - Large bento footer with glowing button and stats

### 🎨 Design System

- **Colors**: 
  - Background: `#020617` (Deep Indigo)
  - Primary: `#2DD4BF` (Teal)
  - Secondary: `#3B82F6` (Royal Blue)

- **Components**:
  - `BentoCard` - Reusable card with animations
  - `AppPreview` - App showcase component
  - `ScrollSection` - Parallax scroll wrapper
  - `SmoothScrollProvider` - Lenis smooth scroll

### 🎭 Animation Features

- **Scroll-linked animations** using Framer Motion's `useScroll` and `useTransform`
- **Mouse-tracking** for 3D tilt effects on the hero certificate
- **Staggered text** entrance with delay-based timing
- **Infinite marquee** for property gallery
- **Sticky sidebar** with scroll-triggered highlighting
- **Pulsing CTAs** with glow effects
- **Hover explosions** revealing metadata

## 🛠️ Customization Points

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'deep-indigo': '#020617',
  'teal-accent': '#2DD4BF',
  'royal-blue': '#3B82F6',
}
```

### Animation Speeds
Edit individual component files:
- Hero text stagger: `HeroSection.tsx` (delay: i * 0.1)
- Scroll parallax: `ScrollSection.tsx` (y transform values)
- Marquee speed: `FractionalGallery.tsx` (duration: 60)

### Content
- **Hero text**: [HeroSection.tsx](src/components/sections/HeroSection.tsx#L37)
- **App descriptions**: [TrinitySection.tsx](src/components/sections/TrinitySection.tsx)
- **Properties**: [FractionalGallery.tsx](src/components/sections/FractionalGallery.tsx#L80)
- **Process steps**: [DigitalTrailSection.tsx](src/components/sections/DigitalTrailSection.tsx#L8)
- **Footer content**: [CTAFooter.tsx](src/components/sections/CTAFooter.tsx)

## 📱 Responsive Design

All sections are fully responsive:
- **Mobile**: Stacked layouts, simplified animations
- **Tablet**: 2-column grids where appropriate
- **Desktop**: Full bento grid layouts with parallax

## 🚀 Performance Tips

1. **Images**: Replace placeholder SVGs with actual images
2. **Fonts**: Optimize font loading in `layout.tsx`
3. **Build**: Run `npm run build` to check production build
4. **Analytics**: Add performance monitoring

## 📦 Production Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel (recommended)
vercel deploy
```

## 🎨 Design Inspiration

This landing page is inspired by `makedesign.tech` with:
- Heavy bento grid usage
- Glass-morphic effects
- Scroll-linked animations
- High-contrast color palette

## 💡 Next Steps

1. **Add real images** to replace placeholder SVGs
2. **Connect to backend** for dynamic content
3. **Add analytics** tracking
4. **Implement SEO** meta tags
5. **Add loading states** and error boundaries
6. **Test on real devices** for performance

## 🐛 Troubleshooting

- **Animations not smooth?** Check if browser supports hardware acceleration
- **Scroll laggy?** Adjust Lenis duration in `SmoothScrollProvider.tsx`
- **Build errors?** Run `npm install` again

## 📞 Support

For questions or issues, check:
- Next.js docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/
- Lenis: https://www.npmjs.com/package/lenis
- Tailwind CSS: https://tailwindcss.com/docs

---

**Built with ❤️ for BuyOps**
