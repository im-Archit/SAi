import { Brain, Zap, Database } from "lucide-react"

const technologies = [
  {
    icon: Brain,
    title: "Anomaly Detection",
    description: "Advanced algorithms for spotting outliers in your data.",
  },
  {
    icon: Zap,
    title: "Natural Language Processing",
    description: "Cutting-edge NLP for cleaning text-heavy data.",
  },
  {
    icon: Database,
    title: "Predictive Models",
    description: "Smart algorithms for filling missing values in your datasets.",
  },
]

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-aqua">Powered by Cutting-Edge AI</h2>
        <p className="text-center mb-12 text-vercel-white max-w-2xl mx-auto">
          Our tool uses advanced machine learning and natural language processing to clean and optimize your data like
          never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <tech.icon className="w-16 h-16 text-vercel-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-aqua">{tech.title}</h3>
              <p className="text-vercel-white">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

