import { Send, X } from 'lucide-react';
import React from 'react'

const ChatWindow = ({messages, setIsOpen, input, setInput, handleSend}) => {
  return (
    <div className="flex flex-col w-[calc(100vw-32px)] sm:w-[350px] h-[500px] bg-white border border-border rounded-3xl shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="w-full bg-primary text-white p-5 flex items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-border p-4 rounded-full flex flex-col items-center justify-center">
                A
              </div>

              <div>
                <h4 className="font-inter font-semibold! text-lg! text-background!">
                  Ai Assistant
                </h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-background!">Online</p>
                </div>
              </div>
            </div>
            <div>
              <X onClick={() => setIsOpen(true)} />
            </div>
          </div>
          {/* Message */}

          <div className="flex-1 bg-card p-4 space-y-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm
          ${
            message.role === "user"
              ? "rounded-br-md bg-primary text-white"
              : "rounded-bl-md bg-white text-gray-700 shadow-sm"
          }
        `}
      >
        {message.content}
      </div>
              </div>
            ))}
          </div>
          {/* Input and Send */}

          <div className="relative w-full p-4">
            <input
              
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Type your message..."
              className="w-full text-sm bg-transparent placeholder:text-gray-400 border border-border px-4 py-4 rounded-xl"
              type="text"
            />
            <div className="absolute right-8 top-6 w-10 h-10  bg-primary rounded-xl flex justify-center items-center">
              <Send onClick={handleSend} className="w-6 h-6" color="white" />
            </div>
          </div>
        </div>
  )
}

export default ChatWindow