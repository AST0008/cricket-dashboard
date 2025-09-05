import { useState, useRef } from 'react';
import { players } from '@/lib/constants';

interface ChatMessage {
  type: 'user' | 'bot';
  message: string;
}

export const useDashboard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { type: 'bot', message: `Welcome! Ask me anything about ${players[0].name}'s performance.` }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredChart, setHoveredChart] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState('2024');
  const [chartAnimation, setChartAnimation] = useState(true);
  const chatRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (!currentMessage.trim()) return;
    
    setChatMessages(prev => [...prev, { type: 'user', message: currentMessage }]);
    const userMsg = currentMessage;
    setCurrentMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        `${selectedPlayer.name} has an outstanding average of ${selectedPlayer.average} with ${selectedPlayer.centuries} centuries in ${selectedPlayer.matches} matches.`,
        `His highest score of ${selectedPlayer.highestScore} showcases his ability to play long innings and convert starts into big scores.`,
        `With ${selectedPlayer.runs.toLocaleString()} career runs, ${selectedPlayer.name} is among the elite batsmen in world cricket.`,
        `The performance trend shows consistent improvement, especially in pressure situations and crucial matches.`
      ];
      
      setChatMessages(prev => [...prev, { 
        type: 'bot', 
        message: responses[Math.floor(Math.random() * responses.length)]
      }]);
      setIsTyping(false);
    }, 1200);
  };

  return {
    selectedPlayer,
    setSelectedPlayer,
    activeTab,
    setActiveTab,
    isDark,
    setIsDark,
    searchQuery,
    setSearchQuery,
    chatMessages,
    setChatMessages,
    currentMessage,
    setCurrentMessage,
    isTyping,
    setIsTyping,
    hoveredChart,
    setHoveredChart,
    selectedSeason,
    setSelectedSeason,
    chartAnimation,
    setChartAnimation,
    chatRef,
    sendMessage
  };
};
