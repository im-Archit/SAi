import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "This tool cut our data prep time in half!",
    author: "Analyst, TechCorp",
  },
  {
    quote: "A game-changer for our enterprise data workflows.",
    author: "CIO, MegaCorp",
  },
  {
    quote: "Impressive AI capabilities. It's like having a data scientist on demand.",
    author: "Data Scientist, InnovateCo",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-vercel-green">Loved by Users Worldwide</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-vercel-black border-vercel-green">
              <CardContent className="p-6">
                <p className="text-vercel-white mb-4">"{testimonial.quote}"</p>
                <p className="text-aqua font-semibold">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

