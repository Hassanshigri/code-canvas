'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { StickyHeader } from "../components/StickyHeader";
import { Button } from "../components/ui/button";
import { AnimatedSection } from "../components/AnimatedSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <AnimatedSection className="space-y-8">
          <motion.h1 variants={fadeInUp} className="text-4xl font-bold mb-6">Get Started with Code Canvas</motion.h1>
          <motion.p variants={fadeInUp} className="text-xl mb-8">
            Welcome to Code Canvas! Follow these steps to begin transforming your designs into code.
          </motion.p>
          <motion.ol variants={fadeInUp} className="list-decimal list-inside space-y-4 mb-8">
            {[
              "Create an account or sign in",
              "Upload your sketch or describe your design",
              "Choose your color palette",
              "Generate your code",
              "Review and download your HTML and CSS"
            ].map((step, index) => (
              <motion.li key={index} variants={fadeInUp}>{step}</motion.li>
            ))}
          </motion.ol>
          <motion.div variants={fadeInUp}>
            <Button asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">© 2023 Code Canvas. All rights reserved.</p>
      </footer>
    </div>
  )
}

