'use client'
import React, { useState } from 'react';
// import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { PlayerProfile } from '@/components/cards/PlayerProfile';
import { TeamRoster } from '@/components/cards/TeamRoster';
import { BattingFormChart } from '@/components/charts/BattingFormChart';
import { SkillsRadarChart } from '@/components/charts/SkillsRadarChart';
import { PlayerComparisonChart } from '@/components/charts/PlayerComparisonChart';
import { SeasonPerformanceChart } from '@/components/charts/SeasonPerformanceChart';
import { VenuePerformanceChart } from '@/components/charts/VenuePerformanceChart';
import { PowerplayDeathChart } from '@/components/charts/PowerplayDeathChart';
import { MatchTimelineChart } from '@/components/charts/MatchTimelineChart';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { players } from '@/lib/constants';
import { Chatbot } from '@/components/Chatbot';
import { X, MessageCircle } from 'lucide-react';

const CricketDashboard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[2]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDark, setIsDark] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState('2024');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handlePlayerSelect = (player: any) => {
    const foundPlayer = players.find(p => p.image === player.image) || players[0];
    setSelectedPlayer(foundPlayer);
  };

  return (
    <div
      className={`flex h-screen font-alegreya overflow-hidden relative
      ${isDark
          ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
        }`}
    >

      <AnimatedBackground />

      {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      <div className="flex-1 flex flex-col">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-full">
            <PlayerProfile selectedPlayer={selectedPlayer} />
            <TeamRoster onPlayerSelect={handlePlayerSelect} />
            <BattingFormChart />
            <SkillsRadarChart />
            <PlayerComparisonChart />
            <SeasonPerformanceChart
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
            />
            <VenuePerformanceChart />
            <PowerplayDeathChart />
            <MatchTimelineChart />
          </div>
        </div>
      </div>

      {/* Floating Chat Toggle Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="absolute bottom-6 right-6 bg-primary p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {/* Slide-in Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed top-0 right-0 h-full w-[400px] bg-slate-800 border-l border-slate-700 shadow-xl flex flex-col">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-3 border-b border-slate-700">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-slate-700 rounded-full">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          {/* Chatbot */}
          <div className="flex-1  overflow-y-auto">
            <Chatbot player={selectedPlayer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CricketDashboard;
