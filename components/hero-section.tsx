import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-emerald-400 opacity-20 animate-pulse"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-aqua to-vercel-green">
          Clean Data, Smarter Future
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-vercel-white">
          Harness the power of AI to clean your data instantly. Try it now or scale it for your enterprise.
        </p>
        <Button size="lg" className="bg-vercel-green hover:bg-aqua text-vercel-black">
          Try the Demo
        </Button>
      </div>
    </section>
  )
}

