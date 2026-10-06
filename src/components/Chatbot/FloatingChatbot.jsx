"use client";
import { MessageCircle, Send, X } from "lucide-react";
import React, { useState } from "react";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          onClick={() => setIsOpen(false)}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center"
        >
          <MessageCircle className="h-8 w-8 text-white cursor-pointer" />
        </div>
      ) : (
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
            {/* Bot message */}
            <div className="flex justify-start">
              <div
                className="
        max-w-[80%]
        rounded-2xl
        rounded-bl-md
        bg-white
        px-4
        py-3
        text-sm
        text-gray-700
        shadow-sm
      "
              >
                Hi! How can I help you today?
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end">
              <div
                className="
        max-w-[80%]
        rounded-2xl
        rounded-br-md
        bg-primary
        px-4
        py-3
        text-sm
        text-white
      "
              >
                I want to know about your services.
              </div>
            </div>
          </div>
          {/* Input and Send */}

          <div className="relative w-full p-4">
            <input
              placeholder="Type your message..."
              className="w-full text-sm bg-transparent placeholder:text-gray-400 border border-border px-4 py-4 rounded-xl"
              type="text"
            />
            <div className="absolute right-8 top-6 w-10 h-10  bg-primary rounded-xl flex justify-center items-center">
              <Send className="w-6 h-6" color="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatbot;
