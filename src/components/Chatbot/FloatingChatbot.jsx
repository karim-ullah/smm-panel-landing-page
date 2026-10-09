"use client";
import { MessageCircle} from "lucide-react";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hi! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if(!input.trim()) return
    const newMessage = {
       role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

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
        <ChatWindow messages={messages} input={input} setInput={setInput} setIsOpen={setIsOpen} handleSend={handleSend}/>
      )}
    </div>
  );
};

export default FloatingChatbot;
