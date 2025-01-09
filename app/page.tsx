'use client'

import Link from "next/link";
import { PencilIcon, TypeIcon, PaletteIcon, CodeIcon } from 'lucide-react';
import { motion } from "framer-motion";
import { StickyHeader } from "./components/StickyHeader";
import { Button } from "./components/ui/button";
import { AnimatedSection } from "./components/AnimatedSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />

      <main className="flex-1">
        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Turn Your Sketches into Code
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="mx-auto max-w-[700px] text-xl md:text-2xl"
              >
                Code Canvas transforms your sketches, text, and color palettes into beautiful HTML and CSS code.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="text-purple-600 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                >
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/20 focus:ring-2 focus:ring-white focus:ring-opacity-50"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.h2 
              variants={fadeInUp}
              className="mb-12 text-3xl font-bold tracking-tighter text-center text-white sm:text-5xl"
            >
              Features
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  icon: <PencilIcon className="w-12 h-12 mb-4 text-purple-500" />,
                  title: "Sketch Input",
                  description: "Upload or draw your design ideas directly in the app."
                },
                {
                  icon: <TypeIcon className="w-12 h-12 mb-4 text-pink-500" />,
                  title: "Text Description",
                  description: "Describe your design in words for more precise results."
                },
                {
                  icon: <PaletteIcon className="w-12 h-12 mb-4 text-red-500" />,
                  title: "Color Palette",
                  description: "Choose or generate the perfect color scheme for your design."
                },
                {
                  icon: <CodeIcon className="w-12 h-12 mb-4 text-blue-500" />,
                  title: "Code Generation",
                  description: "Get clean, responsive HTML and CSS code in seconds."
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center p-4 space-y-2 bg-gray-700 border rounded-lg"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-center text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-12 bg-gray-100 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.h2 
              variants={fadeInUp}
              className="mb-12 text-3xl font-bold tracking-tighter text-center text-black sm:text-5xl"
            >
              How It Works
            </motion.h2>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Input Your Design",
                  description: "Upload a sketch, describe your idea, or select a color palette."
                },
                {
                  step: "2",
                  title: "AI Processing",
                  description: "Our AI analyzes your input and generates the best possible code."
                },
                {
                  step: "3",
                  title: "Get Your Code",
                  description: "Receive clean, responsive HTML and CSS code ready to use."
                },
              ].map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="flex flex-col items-center space-y-2">
                  <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-purple-500 rounded-full">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-black">{step.title}</h3>
                  <p className="text-center text-gray-500">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="w-full py-12 bg-gray-800 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl font-bold tracking-tighter text-white sm:text-5xl"
              >
                Ready to Transform Your Designs?
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="mx-auto max-w-[600px] text-gray-300 md:text-xl lg:text-base xl:text-xl"
              >
                Join Code Canvas today and start turning your creative ideas into functional, beautiful code.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button
                  asChild
                  size="lg"
                  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-600"
                >
                  <Link href="/get-started">Start Your Free Trial</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 bg-gray-800 border-t border-gray-700 sm:flex-row shrink-0 md:px-6">
        <p className="text-xs text-gray-400">
          © 2023 Code Canvas. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          {[
            { name: "Terms of Service", href: "#" },
            { name: "Privacy Policy", href: "#" },
            { name: "Contact Us", href: "#" },
          ].map((link, index) => (
            <Link
              key={index}
              className="text-xs text-gray-400 hover:underline underline-offset-4"
              href={link.href}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}

