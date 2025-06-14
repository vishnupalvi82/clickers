import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import WorkShowcase from "@/components/work-showcase"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import SocialSection from "@/components/social-section"
import Footer from "@/components/footer"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import FloatingElements from "@/components/floating-elements"
import PageTransitions from "@/components/page-transitions"
import SectionDivider from "@/components/section-divider"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background effects */}
      <BackgroundGradient />
      <PageTransitions />
      <FloatingElements />

      {/* Content */}
      <Header />
      <HeroSection />
      <SectionDivider variant="wave" color="purple" />
      <AboutSection />
      <SectionDivider variant="diagonal" color="blue" />
      <ServicesSection />
      <SectionDivider variant="curve" color="cyan" />
      <WorkShowcase />
      <SectionDivider variant="wave" color="purple" />
      <PortfolioSection />
      <SectionDivider variant="diagonal" color="blue" />
      <TestimonialsSection />
      <SectionDivider variant="curve" color="cyan" />
      <SocialSection />
      <Footer />
    </main>
  )
}
