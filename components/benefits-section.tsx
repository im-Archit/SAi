import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle, TrendingUp, BarChart } from "lucide-react"

const benefits = [
  {
    title: "Save Time & Costs",
    description: "Automate manual data cleaning tasks.",
    icon: Clock,
  },
  {
    title: "Enhance Accuracy",
    description: "Deliver reliable data for better decisions.",
    icon: CheckCircle,
  },
  {
    title: "Increase Efficiency",
    description: "Focus on insights, not data prep.",
    icon: TrendingUp,
  },
  {
    title: "Grow with Confidence",
    description: "Scales from small datasets to enterprise needs.",
    icon: BarChart,
  },
]

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-vercel-green">Unlock the Power of Clean Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-vercel-black border-vercel-green">
              <CardHeader>
                <benefit.icon className="w-12 h-12 text-aqua mb-4" />
                <CardTitle className="text-xl font-semibold text-vercel-green">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-vercel-white">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

