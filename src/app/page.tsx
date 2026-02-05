import HeroSection from '@/components/sections/HeroSection'
import PersonaSwitcher from '@/components/sections/PersonaSwitcher'
import FractionalGallery from '@/components/sections/FractionalGallery'
import DigitalTrailSection from '@/components/sections/DigitalTrailSection'
import TrustSection from '@/components/sections/TrustSection'
import FAQSection from '@/components/sections/FAQSection'
import CTAFooter from '@/components/sections/CTAFooter'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PersonaSwitcher />
      <FractionalGallery />
      <DigitalTrailSection />
      <TrustSection />
      <FAQSection />
      <CTAFooter />
    </main>
  )
}
