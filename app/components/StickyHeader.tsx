'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

export function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  })

  return (
    <motion.header
      animate={{
        backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isSticky ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto lg:px-6">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/placeholder.svg?height=32&width=32" alt="Code Canvas Logo" width={32} height={32} />
          <span className="ml-2 text-2xl font-bold">Code Canvas</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/get-started">
            Get Started
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

