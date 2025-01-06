import Image from 'next/image'
import Link from 'next/link'
// import { Button } from "@/components/ui/button"
import { PencilIcon, TypeIcon, PaletteIcon, CodeIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image src="/placeholder.svg?height=32&width=32" alt="Code Canvas Logo" width={32} height={32} />
          <span className="ml-2 text-2xl font-bold">Code Canvas</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Turn Your Sketches into Code
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Code Canvas transforms your sketches, text, and color palettes into beautiful HTML and CSS code.
              </p>
              {/* <div className="space-x-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">Learn More</Button>
              </div> */}
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <PencilIcon className="h-12 w-12 mb-4 text-purple-500" />
                <h3 className="text-xl font-bold">Sketch Input</h3>
                <p className="text-center text-gray-500">Upload or draw your design ideas directly in the app.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <TypeIcon className="h-12 w-12 mb-4 text-pink-500" />
                <h3 className="text-xl font-bold">Text Description</h3>
                <p className="text-center text-gray-500">Describe your design in words for more precise results.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <PaletteIcon className="h-12 w-12 mb-4 text-red-500" />
                <h3 className="text-xl font-bold">Color Palette</h3>
                <p className="text-center text-gray-500">Choose or generate the perfect color scheme for your design.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <CodeIcon className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold">Code Generation</h3>
                <p className="text-center text-gray-500">Get clean, responsive HTML and CSS code in seconds.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Input Your Design</h3>
                <p className="text-center text-gray-500">Upload a sketch, describe your idea, or select a color palette.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">AI Processing</h3>
                <p className="text-center text-gray-500">Our AI analyzes your input and generates the best possible code.</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Get Your Code</h3>
                <p className="text-center text-gray-500">Receive clean, responsive HTML and CSS code ready to use.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Designs?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Code Canvas today and start turning your creative ideas into functional, beautiful code.
              </p>
              {/* <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                Start Your Free Trial
              </Button> */}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Code Canvas. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  )
}

