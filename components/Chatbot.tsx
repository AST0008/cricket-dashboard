// app/components/Chatbot.tsx
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Bot, User } from 'lucide-react';
import { Player } from '@/lib/data';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function Chatbot({ player, isDark }: { player: Player | null; isDark: boolean }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !player) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: input, playerName: player.name, playerStats: player.stats }),
      });
      const data = await response.json();
      const modelMessage: Message = { role: 'model', text: data.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage: Message = { role: 'model', text: "Sorry, I'm having trouble connecting." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatBg = isDark ? 'bg-slate-900 text-white' : 'bg-gray-100 text-gray-900';
  const userBubbleBg = isDark ? 'bg-blue-600 text-white' : 'bg-blue-200 text-gray-900';
  const modelBubbleBg = isDark ? 'bg-slate-700 text-white' : 'bg-gray-200 text-gray-900';

  return (
    <div className={`flex flex-col h-[500px] rounded-lg p-4 ${chatBg}`}>
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}
            >
              {msg.role === 'model' && <Bot className="h-6 w-6 text-gray-300" />}
              <div
                className={`rounded-lg px-4 py-2 max-w-[70%] break-words ${
                  msg.role === 'user' ? userBubbleBg : modelBubbleBg
                }`}
              >
                {msg.text}
              </div>
              {msg.role === 'user' && <User className="h-6 w-6 text-blue-500" />}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2 pt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={player ? `Ask about ${player.name}...` : 'Select a player first'}
          disabled={!player || isLoading}
          className={isDark ? 'bg-slate-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'}
        />
        <Button type="submit" disabled={!player || isLoading}>
          {isLoading ? '...' : <Send className="h-4 w-4" />}
        </Button>
      </form>
    </div>
  );
}
