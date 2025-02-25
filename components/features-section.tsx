import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Wand2, Layout, GitMerge } from "lucide-react"

const features = [
  {
    title: "AI-Driven Error Detection",
    description: "Automatically spots typos, duplicates, and inconsistencies.",
    icon: Zap,
  },
  {
    title: "Smart Data Correction",
    description: "Uses machine learning to fix errors intelligently.",
    icon: Wand2,
  },
  {
    title: "Intuitive Design",
    description: "Easy for anyone to use, no coding required.",
    icon: Layout,
  },
  {
    title: "Scalable Integration",
    description: "Connects seamlessly with your existing tools and systems.",
    icon: GitMerge,
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-aqua">What Makes Our Tool Stand Out</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-vercel-black border-vercel-green">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-vercel-green mb-4" />
                <CardTitle className="text-xl font-semibold text-aqua">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-vercel-white">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

