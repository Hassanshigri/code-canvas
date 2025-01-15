'use client'

import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { ChatSection } from "../components/ChatSection"

export default function GetStarted() {
  const [selectedChat, setSelectedChat] = useState(null)

  return (
    <div className="flex flex-col h-screen bg-gray-100 sm:flex-row">
      {/* Sidebar */}
      <Sidebar selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

      {/* Chat Section */}
      <ChatSection selectedChat={selectedChat} />
    </div>
  )
}
