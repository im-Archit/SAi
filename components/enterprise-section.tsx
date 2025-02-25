import { Button } from "@/components/ui/button"
import { Shield, Maximize2, Cog, HeadsetIcon as HeadsetMic } from "lucide-react"

const enterpriseFeatures = [
  {
    icon: Maximize2,
    title: "Unmatched Scalability",
    description: "Handles millions of rows effortlessly.",
  },
  {
    icon: Shield,
    title: "Top-Tier Security",
    description: "End-to-end encryption and compliance with GDPR, CCPA, etc.",
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "API access and integration with enterprise platforms (e.g., Salesforce, SAP).",
  },
  {
    icon: HeadsetMic,
    title: "Priority Support",
    description: "Dedicated team for onboarding and assistance.",
  },
]

export default function EnterpriseSection() {
  return (
    <section id="enterprise" className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-aqua">Built for Big Business</h2>
        <p className="text-center mb-12 text-vercel-white max-w-2xl mx-auto">
          A different software solution for large companies with massive datasets and complex needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {enterpriseFeatures.map((feature, index) => (
            <div key={index} className="flex items-start">
              <feature.icon className="w-8 h-8 text-vercel-green mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-aqua">{feature.title}</h3>
                <p className="text-vercel-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-vercel-green hover:bg-aqua text-vercel-black">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

