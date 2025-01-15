'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Sidebar } from "../components/Sidebar"
import { ChatSection } from "../components/ChatSection"
import { AnimatedSection } from "../components/AnimatedSection"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function GetStarted() {
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="container flex flex-row flex-1 px-4 py-8 mx-auto">
        {/* Sidebar */}
        <div className="w-1/4 p-4 text-white bg-gray-800">
          <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
        </div>

        {/* Main Chat Section */}
        <div className="w-3/4 p-4">
          <AnimatedSection>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tighter sm:text-5xl"
            >
              Chat Interface
            </motion.h1>
            <motion.div variants={fadeInUp} className="mt-6">
              <ChatSection selectedChat={selectedChat} />
            </motion.div>
          </AnimatedSection>
        </div>
      </main>
      <footer className="w-full py-6 text-center text-white bg-gray-800">
        <p className="text-sm">© 2023 Code Canvas. All rights reserved.</p>
      </footer>
    </div>
  )
}
