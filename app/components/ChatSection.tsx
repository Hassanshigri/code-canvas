'use client'

import { useState } from "react"
import { Button } from "../components/ui/button"

interface ChatSectionProps {
  selectedChat: any
}

export const ChatSection = ({ selectedChat }: ChatSectionProps) => {
  const [prompt, setPrompt] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [messages, setMessages] = useState<any[]>([])

  const handlePromptSubmit = () => {
    if (prompt) {
      setMessages([...messages, { type: "user", text: prompt }])
      setPrompt("")
      // Here you can handle sending the prompt to the backend or API
    }
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
      // Handle image upload logic here
    }
  }

  return (
    <div>
      {selectedChat ? (
        <>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Chat with {selectedChat.name}</h3>
              </div>
              <div className="p-4 bg-gray-100 border rounded-lg">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`text-${msg.type === "user" ? "right" : "left"}`}>
                      <div className={`p-2 bg-${msg.type === "user" ? "purple-500" : "gray-500"} text-white rounded`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Prompt and Image Upload */}
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full p-2 text-black bg-gray-200 rounded-lg"
                  placeholder="Enter your prompt here..."
                />
                <Button
                  onClick={handlePromptSubmit}
                  className="ml-4 text-white bg-purple-600 hover:bg-purple-700"
                >
                  Send
                </Button>
              </div>

              <div className="flex items-center">
                <input
                  type="file"
                  onChange={handleImageUpload}
                  className="p-2 bg-gray-200 rounded-lg"
                />
                {image && <span className="ml-4 text-gray-600">{image.name}</span>}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-400">Select a chat to start</div>
      )}
    </div>
  )
}
