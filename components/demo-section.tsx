"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@clerk/nextjs"
import { useClerk } from "@clerk/clerk-react"

export default function DemoSection() {
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const { isSignedIn } = useAuth()
  const { openSignIn } = useClerk()

  const handleUpload = () => {
    if (!isSignedIn) {
      openSignIn()
      return
    }

    setIsUploading(true)
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 10
      setProgress(currentProgress)
      if (currentProgress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
      }
    }, 500)

    // TODO: Integrate your ML model here
    // This is where you would call your API to process the uploaded file
    console.log("ML model integration goes here")
  }

  return (
    <section id="demo" className="py-20 bg-vercel-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-aqua">Experience the Magic</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center mb-8 text-vercel-white">
            Upload your database and see our AI clean it in real-time—free demo for everyone!
          </p>
          <div className="border-2 border-dashed border-vercel-green rounded-lg p-12 text-center">
            <input type="file" className="hidden" id="file-upload" />
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-vercel-green hover:bg-aqua text-vercel-black font-bold py-2 px-4 rounded inline-block mb-4"
            >
              Choose File
            </label>
            <p className="text-vercel-white">Supports CSV and Excel files</p>
          </div>
          {isUploading && (
            <div className="mt-8">
              <Progress value={progress} className="w-full bg-vercel-black" />
              <p className="text-center mt-2 text-vercel-white">Cleaning in progress...</p>
            </div>
          )}
          <div className="mt-8 text-center">
            <Button
              onClick={handleUpload}
              disabled={isUploading}
              className="bg-vercel-green hover:bg-aqua text-vercel-black"
            >
              {isUploading ? "Cleaning..." : "Start Demo"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}