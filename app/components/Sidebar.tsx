'use client'

import { useState } from "react"

interface SidebarProps {
  selectedChat: any
  setSelectedChat: (chat: any) => void
}

export const Sidebar = ({ selectedChat, setSelectedChat }: SidebarProps) => {
  const [chats, setChats] = useState([
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
    { id: 3, name: "Chat 3" }
  ])

  const handleSelectChat = (chat: any) => {
    setSelectedChat(chat)
  }

  return (
    <div className="w-full p-4 text-white bg-gray-800 sm:w-1/3 lg:w-1/4 xl:w-1/5">
      <h2 className="mb-4 text-xl font-bold">Chats</h2>
      <ul className="space-y-2">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className={`cursor-pointer p-2 hover:bg-gray-700 rounded ${
              selectedChat?.id === chat.id ? "bg-gray-600" : ""
            }`}
            onClick={() => handleSelectChat(chat)}
          >
            {chat.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
