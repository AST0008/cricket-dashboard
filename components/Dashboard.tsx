'use client';

import React, { useState } from 'react';
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
    const foundPlayer = players.find((p) => p.image === player.image) || players[0];
    setSelectedPlayer(foundPlayer);
  };

  const cardBg = isDark ? 'bg-slate-800 text-white' : 'bg-white text-gray-900';
  const cardShadow = isDark ? 'shadow-md shadow-black/50' : 'shadow-md shadow-gray-300';

  return (
    <div
      className={`flex h-screen font-alegreya overflow-hidden relative ${isDark
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white'
        : 'bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900'
        }`}
    >
      <AnimatedBackground />

      <div className="flex-1 flex flex-col">
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDark={isDark}
          setIsDark={setIsDark}
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
        />

        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <PlayerProfile selectedPlayer={selectedPlayer} isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <TeamRoster onPlayerSelect={handlePlayerSelect} isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <BattingFormChart isDark={isDark} />
            </div>


            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <SkillsRadarChart isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <PlayerComparisonChart isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <SeasonPerformanceChart
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
                isDark={isDark}
              />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <VenuePerformanceChart isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <PowerplayDeathChart isDark={isDark} />
            </div>

            <div className={`p-4 rounded-xl ${cardBg} ${cardShadow}`}>
              <MatchTimelineChart isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="absolute bottom-6 right-6 bg-primary p-4 rounded-full shadow-lg hover:scale-110 transition"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </button>
      )}

      {isChatOpen && (
        <div
          className={`fixed top-0 right-0 h-full w-[400px] rounded-l-xl shadow-xl flex flex-col ${isDark ? 'bg-slate-800 border-l border-slate-700' : 'bg-white border-l border-gray-300'
            }`}
        >
          <div
            className={`flex items-center justify-between p-3 border-b ${isDark ? 'border-slate-700' : 'border-gray-200'
              }`}
          >
            <h2 className={`${isDark ? 'text-white' : 'text-gray-900'} text-lg font-semibold`}>
              AI Assistant
            </h2>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-slate-700 rounded-full"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <Chatbot player={selectedPlayer} isDark={isDark} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CricketDashboard;
