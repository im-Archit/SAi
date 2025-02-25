import Layout from "../components/layout"
import HeroSection from "../components/hero-section"
import FeaturesSection from "../components/features-section"
import BenefitsSection from "../components/benefits-section"
import DemoSection from "../components/demo-section"
import EnterpriseSection from "../components/enterprise-section"
import TechnologySection from "../components/technology-section"
import TestimonialsSection from "../components/testimonials-section"
import ProSubscription from "../components/pro-subscription"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <DemoSection />
      <EnterpriseSection />
      <TechnologySection />
      <TestimonialsSection />
      <ProSubscription />
    </Layout>
  )
}