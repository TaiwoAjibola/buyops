import HeroSection from "@/components/sections/HeroSection";
import FeaturedAssets from "@/components/sections/FeaturedAssets";
import HowItWorks from "@/components/sections/HowItWorks";
import SellWithBuyOps from "@/components/sections/SellWithBuyOps";
import WhyBuyOps from "@/components/sections/WhyBuyOps";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedAssets />
      <HowItWorks />
      <SellWithBuyOps />
      <WhyBuyOps />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
