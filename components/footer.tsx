import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-vercel-black text-vercel-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-aqua">Contact Us</h3>
            <p>Email: sarchit707@gmail.com</p>
            <p>Phone: +91 9582255479</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-aqua">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-vercel-white hover:text-aqua">
                Twitter
              </a>
              <a href="#" className="text-vercel-white hover:text-aqua">
                LinkedIn
              </a>
              <a href="#" className="text-vercel-white hover:text-aqua">
                GitHub
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-aqua">Newsletter</h3>
            <form className="flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="mr-2 bg-vercel-black border-vercel-green text-vercel-white"
              />
              <Button type="submit" className="bg-vercel-green text-vercel-black hover:bg-aqua">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 SqueakyAI. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-vercel-white hover:text-aqua mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-vercel-white hover:text-aqua">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

