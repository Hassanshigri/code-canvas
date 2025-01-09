'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen">
      <motion.main 
        initial="initial"
        animate="animate"
        variants={staggerChildren}
        className="container flex-1 px-4 py-8 mx-auto"
      >
        <motion.h1 variants={fadeIn} className="mb-6 text-4xl font-bold">Get Started with Code Canvas</motion.h1>
        <motion.p variants={fadeIn} className="mb-8 text-xl">
          Welcome to Code Canvas! Follow these steps to begin transforming your designs into code.
        </motion.p>
        <motion.ol variants={staggerChildren} className="mb-8 space-y-4 list-decimal list-inside">
          {[
            "Create an account or sign in",
            "Upload your sketch or describe your design",
            "Choose your color palette",
            "Generate your code",
            "Review and download your HTML and CSS"
          ].map((step, index) => (
            <motion.li key={index} variants={fadeIn}>{step}</motion.li>
          ))}
        </motion.ol>
        <motion.div variants={fadeIn}>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </motion.div>
      </motion.main>
      <footer className="w-full py-6 text-center text-white bg-gray-800">
        <p className="text-sm">© 2023 Code Canvas. All rights reserved.</p>
      </footer>
    </div>
  )
}

