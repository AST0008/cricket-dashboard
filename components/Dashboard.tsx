'use client'
import React, { useState, useEffect, useRef } from 'react';
import { 
  Home, Users, MessageSquare, Settings, Search, Moon, Sun, 
  TrendingUp, BarChart3, Activity, MessageCircle, Send, 
  Trophy, Target, Zap, Star, MapPin, Calendar, Globe
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, 
  CartesianGrid, Tooltip, ResponsiveContainer, RadialBarChart, 
  RadialBar, PieChart, Pie, Cell, ComposedChart, ScatterChart, 
  Scatter, ZAxis, Treemap, FunnelChart, Funnel, LabelList, 
  Sankey, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, 
  Radar, XAxis as RechartsXAxis, YAxis as RechartsYAxis
} from 'recharts';

// Enhanced player data with images and more details
const players = [
  { 
    id: 1, name: "Virat Kohli", country: "India", role: "Right-Handed Batsman", 
    matches: 593, runs: 27314, average: 58.07, centuries: 70, highestScore: "254*",
    image: "VK", teamLogo: "🇮🇳", jersey: 18, battingStyle: "Right-handed"
  },
  { 
    id: 2, name: "Babar Azam", country: "Pakistan", role: "Right-Handed Batsman", 
    matches: 278, runs: 12845, average: 56.83, centuries: 31, highestScore: "196",
    image: "BA", teamLogo: "🇵🇰", jersey: 56, battingStyle: "Right-handed"
  },
  { 
    id: 3, name: "Steve Smith", country: "Australia", role: "Right-Handed Batsman", 
    matches: 352, runs: 17162, average: 61.80, centuries: 43, highestScore: "239",
    image: "SS", teamLogo: "🇦🇺", jersey: 49, battingStyle: "Right-handed"
  },
  { 
    id: 4, name: "Kane Williamson", country: "New Zealand", role: "Right-Handed Batsman", 
    matches: 234, runs: 11358, average: 54.31, centuries: 32, highestScore: "251",
    image: "KW", teamLogo: "🇳🇿", jersey: 22, battingStyle: "Right-handed"
  },
  { 
    id: 5, name: "Joe Root", country: "England", role: "Right-Handed Batsman", 
    matches: 287, runs: 14116, average: 49.44, centuries: 34, highestScore: "254",
    image: "JR", teamLogo: "🇬🇧", jersey: 66, battingStyle: "Right-handed"
  },
];

// Team roster data
const teamRoster = [
  { name: "Rohit Sharma", role: "Right-Handed Batsman", image: "RS", jersey: 45 },
  { name: "Shikhar Dhawan", role: "Left-Handed Batsman", image: "SD", jersey: 25 },
  { name: "Shreyas Iyer", role: "Right-Handed Batsman", image: "SI", jersey: 41 },
  { name: "KL Rahul", role: "Right-Handed Batsman", image: "KR", jersey: 1 },
  { name: "Hardik Pandya", role: "All Rounder", image: "HP", jersey: 33 },
  { name: "Ravindra Jadeja", role: "All Rounder", image: "RJ", jersey: 8 },
  { name: "Rishabh Pant", role: "Wicket-Keeper", image: "RP", jersey: 17 },
  { name: "Jasprit Bumrah", role: "Right-arm Bowler", image: "JB", jersey: 93 }
];

// Partnership data
const partnerships = [
  { name: "Rohit Sharma", runs: 3547, matches: 87, image: "RS" },
  { name: "Shikhar Dhawan", runs: 4154, matches: 115, image: "SD" },
  { name: "KL Rahul", runs: 2156, matches: 51, image: "KR" }
];

// Performance data
const performanceData = [
  { match: 'Avg', value: 58.07, teamAvg: 42.5 },
  { match: 'Match 1', value: 52, teamAvg: 38 },
  { match: 'Match 2', value: 78, teamAvg: 45 },
  { match: 'Match 3', value: 102, teamAvg: 52 },
];

// Recent matches with world map visualization
const recentMatches = [
  { country: "India", matches: 17, color: "#F59E0B" },
  { country: "Australia", matches: 8, color: "#3B82F6" },
  { country: "South Africa", matches: 4, color: "#10B981" },
  { country: "England", matches: 12, color: "#EF4444" },
];

// Enhanced dummy data for various charts
const battingFormData = [
  { month: 'Jan', runs: 450, balls: 320, strikeRate: 140.6, avg: 45.0 },
  { month: 'Feb', runs: 380, balls: 280, strikeRate: 135.7, avg: 38.0 },
  { month: 'Mar', runs: 520, balls: 380, strikeRate: 136.8, avg: 52.0 },
  { month: 'Apr', runs: 480, balls: 350, strikeRate: 137.1, avg: 48.0 },
  { month: 'May', runs: 600, balls: 420, strikeRate: 142.9, avg: 60.0 },
  { month: 'Jun', runs: 420, balls: 300, strikeRate: 140.0, avg: 42.0 },
];

const bowlingStatsData = [
  { name: 'Pace', value: 85, color: '#FF6B6B' },
  { name: 'Spin', value: 65, color: '#4ECDC4' },
  { name: 'Accuracy', value: 92, color: '#45B7D1' },
  { name: 'Economy', value: 78, color: '#96CEB4' },
  { name: 'Wickets', value: 88, color: '#FFEAA7' },
];

const teamPerformanceData = [
  { team: 'RCB', wins: 8, losses: 6, points: 16, nrr: 0.156 },
  { team: 'MI', wins: 6, losses: 8, points: 12, nrr: -0.234 },
  { team: 'CSK', wins: 9, losses: 5, points: 18, nrr: 0.289 },
  { team: 'KKR', wins: 7, losses: 7, points: 14, nrr: 0.045 },
  { team: 'DC', wins: 5, losses: 9, points: 10, nrr: -0.456 },
  { team: 'SRH', wins: 10, losses: 4, points: 20, nrr: 0.378 },
];

const seasonComparisonData = [
  { year: '2021', runs: 405, matches: 15, avg: 27.0, sr: 125.5 },
  { year: '2022', runs: 523, matches: 16, avg: 34.9, sr: 131.2 },
  { year: '2023', runs: 639, matches: 14, avg: 45.6, sr: 139.8 },
  { year: '2024', runs: 741, matches: 15, avg: 49.4, sr: 142.3 },
];

const venuePerformanceData = [
  { venue: 'Chinnaswamy', runs: 1200, matches: 8, avg: 150.0, color: '#FF6B6B' },
  { venue: 'Wankhede', runs: 950, matches: 6, avg: 158.3, color: '#4ECDC4' },
  { venue: 'Eden Gardens', runs: 800, matches: 5, avg: 160.0, color: '#45B7D1' },
  { venue: 'Chepauk', runs: 1100, matches: 7, avg: 157.1, color: '#96CEB4' },
  { venue: 'Rajiv Gandhi', runs: 750, matches: 4, avg: 187.5, color: '#FFEAA7' },
];

const powerplayData = [
  { over: '1-2', runs: 45, balls: 12, sr: 375.0, boundaries: 8 },
  { over: '3-4', runs: 38, balls: 12, sr: 316.7, boundaries: 6 },
  { over: '5-6', runs: 42, balls: 12, sr: 350.0, boundaries: 7 },
];

const deathOversData = [
  { over: '16-17', runs: 35, balls: 12, sr: 291.7, boundaries: 5 },
  { over: '18-19', runs: 28, balls: 12, sr: 233.3, boundaries: 4 },
  { over: '20', runs: 22, balls: 6, sr: 366.7, boundaries: 3 },
];

const playerComparisonData = [
  { name: 'Virat Kohli', runs: 741, avg: 49.4, sr: 142.3, sixes: 28, fours: 89 },
  { name: 'Rohit Sharma', runs: 654, avg: 43.6, sr: 138.9, sixes: 35, fours: 76 },
  { name: 'KL Rahul', runs: 598, avg: 39.9, sr: 135.2, sixes: 22, fours: 82 },
  { name: 'Shubman Gill', runs: 612, avg: 40.8, sr: 141.1, sixes: 31, fours: 78 },
];

const matchTimelineData = [
  { over: 1, runs: 8, wickets: 0, required: 200 },
  { over: 5, runs: 45, wickets: 0, required: 155 },
  { over: 10, runs: 89, wickets: 1, required: 111 },
  { over: 15, runs: 134, wickets: 2, required: 66 },
  { over: 20, runs: 198, wickets: 3, required: 2 },
];

const heatmapData = [
  { zone: 'Off-side', runs: 45, balls: 120, sr: 37.5 },
  { zone: 'Leg-side', runs: 38, balls: 95, sr: 40.0 },
  { zone: 'Straight', runs: 42, balls: 110, sr: 38.2 },
  { zone: 'Square', runs: 28, balls: 80, sr: 35.0 },
];

const CricketDashboard = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: `Welcome! Ask me anything about ${players[0].name}'s performance.` }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredChart, setHoveredChart] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState('2024');
  const [chartAnimation, setChartAnimation] = useState(true);
  const chatRef = useRef(null);

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', key: 'dashboard' },
    { icon: BarChart3, label: 'Analytics', key: 'analytics' },
    { icon: Users, label: 'Player', key: 'player' },
    { icon: Trophy, label: 'Team', key: 'team' },
    { icon: MessageSquare, label: 'Messages', key: 'messages' },
    { icon: Settings, label: 'Settings', key: 'settings' },
  ];

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

  const PlayerAvatar = ({ player, size = 'md', showJersey = false }: { 
    player: string | { image: string; jersey?: number }; 
    size?: 'sm' | 'md' | 'lg' | 'xl'; 
    showJersey?: boolean 
  }) => {
    const sizeClasses: Record<string, string> = {
      sm: 'w-10 h-10 text-sm',
      md: 'w-12 h-12 text-base',
      lg: 'w-16 h-16 text-lg',
      xl: 'w-24 h-24 text-2xl'
    };

    return (
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center font-bold text-white shadow-lg`}>
          {typeof player === 'string' ? player : player.image}
        </div>
        {showJersey && typeof player === 'object' && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-black">
            {player.jersey}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-16 sm:w-20 bg-slate-800/50 backdrop-blur-xl border-r border-slate-700/50 flex flex-col items-center py-4 sm:py-6 space-y-4 sm:space-y-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
          <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
        
        <nav className="flex-1 flex flex-col space-y-3 sm:space-y-4">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group ${
                activeTab === item.key
                  ? 'bg-blue-600/80 shadow-lg shadow-blue-500/25 scale-110'
                  : 'hover:bg-slate-700/50 hover:scale-105'
              }`}
            >
              <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          ))}
        </nav>

        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-slate-600">
          <PlayerAvatar player="U" size="sm" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-14 sm:h-16 bg-slate-800/30 backdrop-blur-xl border-b border-slate-700/50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Dashboard</h1>
            <div className="hidden sm:flex space-x-4 lg:space-x-6">
              <button 
                onClick={() => setActiveTab('player')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm ${
                  activeTab === 'player' ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                Player
              </button>
              <button 
                onClick={() => setActiveTab('team')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm ${
                  activeTab === 'team' ? 'bg-blue-600/20 text-blue-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                Team
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Team Roster"
                className="bg-slate-700/50 border border-slate-600/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 w-32 lg:w-40"
              />
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-700/50 flex items-center justify-center hover:bg-slate-600/50 transition-all duration-300"
            >
              <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-full">
            {/* Player Profile Card - Large */}
            <div className="lg:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 w-full lg:w-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900" />
                </div>
                <div className="text-center sm:text-left w-full lg:w-auto">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{selectedPlayer.name}</h2>
                  <p className="text-blue-200 text-base sm:text-lg mb-4">{selectedPlayer.role}</p>
                  
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-center">
                    <div>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{selectedPlayer.matches}</p>
                      <p className="text-blue-200 text-xs sm:text-sm">Matches</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{selectedPlayer.runs.toLocaleString()}</p>
                      <p className="text-blue-200 text-xs sm:text-sm">Total Runs</p>
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{selectedPlayer.centuries}</p>
                      <p className="text-blue-200 text-xs sm:text-sm">Centuries</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                    <div>
                      <p className="text-blue-200">Highest</p>
                      <p className="text-white font-semibold">{selectedPlayer.highestScore}</p>
                    </div>
                    <div>
                      <p className="text-blue-200">Avg</p>
                      <p className="text-white font-semibold">{selectedPlayer.average}</p>
                    </div>
                    <div>
                      <p className="text-blue-200">M.O.M</p>
                      <p className="text-white font-semibold">57</p>
                    </div>
      <div>
                      <p className="text-blue-200">Jersey No.</p>
                      <p className="text-white font-semibold">{selectedPlayer.jersey}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right mt-4 lg:mt-0">
                <div className="w-32 h-40 sm:w-40 sm:h-48 lg:w-48 lg:h-64 bg-gradient-to-t from-blue-800/50 to-transparent rounded-2xl flex items-end justify-center p-4 mx-auto lg:mx-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-700/30 rounded-full flex items-center justify-center border-4 border-blue-400/30">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{selectedPlayer.image}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Roster */}
            <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Team Roster</h3>
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
              
              <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
                {teamRoster.map((player, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedPlayer(players.find(p => p.image === player.image) || players[0])}
                    className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-slate-700/50 transition-all duration-300 cursor-pointer group"
                  >
                    <PlayerAvatar player={player.image} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-white group-hover:text-blue-400 transition-colors text-sm sm:text-base truncate">
                        {player.name}
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm truncate">{player.role}</p>
                    </div>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 text-xs font-bold">{player.jersey}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Batting Form Trend */}
            <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Batting Form Trend</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={battingFormData}>
                    <defs>
                      <linearGradient id="runsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="srGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="runs"
                      stroke="#06B6D4"
                      fill="url(#runsGradient)"
                      strokeWidth={3}
                      animationDuration={2000}
                    />
                    <Area
                      type="monotone"
                      dataKey="strikeRate"
                      stroke="#10B981"
                      fill="url(#srGradient)"
                      strokeWidth={2}
                      animationDuration={2500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded mr-2"></div>
                    <span className="text-gray-400">Runs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
                    <span className="text-gray-400">Strike Rate</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-500 to-green-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
                  Form: Excellent
                </div>
              </div>
            </div>

            {/* Player Skills Radar */}
            <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Skills Radar</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Interactive</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={bowlingStatsData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis 
                      dataKey="name" 
                      tick={{ fontSize: 10, fill: '#9CA3AF' }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ fontSize: 8, fill: '#6B7280' }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="#8B5CF6"
                      fill="#8B5CF6"
                      fillOpacity={0.3}
                      strokeWidth={2}
                      animationDuration={3000}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                {bowlingStatsData.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="font-semibold text-white">{skill.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Player Comparison Scatter */}
            <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Player Comparison</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">2024 Season</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={playerComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      type="number" 
                      dataKey="avg" 
                      name="Average" 
                      stroke="#9CA3AF"
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="sr" 
                      name="Strike Rate" 
                      stroke="#9CA3AF"
                      tick={{ fontSize: 10 }}
                    />
                    <ZAxis type="number" dataKey="runs" range={[50, 400]} />
                    <Tooltip
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Scatter 
                      dataKey="runs" 
                      fill="#F59E0B" 
                      animationDuration={2000}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                {playerComparisonData.slice(0, 4).map((player, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30">
                    <span className="text-gray-400 truncate">{player.name.split(' ')[0]}</span>
                    <span className="font-semibold text-orange-400">{player.runs}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Season Performance Timeline */}
            <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Season Performance</h3>
                <div className="flex space-x-2">
                  {['2021', '2022', '2023', '2024'].map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedSeason(year)}
                      className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                        selectedSeason === year
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={seasonComparisonData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      yAxisId="runs"
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      yAxisId="avg"
                      orientation="right" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Bar 
                      yAxisId="runs"
                      dataKey="runs" 
                      fill="#3B82F6" 
                      radius={[4, 4, 0, 0]}
                      animationDuration={2000}
                    />
                    <Line 
                      yAxisId="avg"
                      type="monotone" 
                      dataKey="avg" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', r: 4 }}
                      animationDuration={2500}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Venue Performance Heatmap */}
            <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Venue Performance</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Heatmap</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={venuePerformanceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" stroke="#9CA3AF" tick={{ fontSize: 10 }} />
                    <YAxis 
                      dataKey="venue" 
                      type="category" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                      width={80}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Bar 
                      dataKey="runs" 
                      fill="#EF4444"
                      radius={[0, 4, 4, 0]}
                      animationDuration={2000}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                {venuePerformanceData.slice(0, 4).map((venue, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30">
                    <span className="text-gray-400 truncate">{venue.venue}</span>
                    <span className="font-semibold text-red-400">{venue.avg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Powerplay vs Death Overs */}
            <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Powerplay vs Death</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Phase Analysis</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[...powerplayData, ...deathOversData]}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="over" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Bar 
                      dataKey="runs" 
                      fill="#F59E0B" 
                      radius={[4, 4, 0, 0]}
                      animationDuration={2000}
                    />
                    <Bar 
                      dataKey="boundaries" 
                      fill="#EF4444" 
                      radius={[4, 4, 0, 0]}
                      animationDuration={2500}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <span className="text-yellow-400 font-semibold">Powerplay: 125 runs</span>
                </div>
                <div className="p-2 rounded-lg bg-red-500/20">
                  <span className="text-red-400 font-semibold">Death: 85 runs</span>
                </div>
              </div>
            </div>

            {/* Match Timeline */}
            <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Match Timeline</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">Live Match</span>
                </div>
              </div>
              
              <div className="h-48 sm:h-56 lg:h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={matchTimelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="over" 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <YAxis 
                      stroke="#9CA3AF" 
                      tick={{ fontSize: 10 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="runs" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', r: 5 }}
                      animationDuration={3000}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="required" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#EF4444', r: 4 }}
                      animationDuration={3500}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
                  <span className="text-gray-400">Current: 198</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
                  <span className="text-gray-400">Target: 200</span>
                </div>
                <div className="bg-green-600 px-2 py-1 rounded text-white font-semibold">
                  Won by 2 runs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Overlay */}
      {activeTab === 'messages' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-80 sm:h-96 bg-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold">AI Cricket Assistant</h3>
              <button
                onClick={() => setActiveTab('dashboard')}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors text-sm sm:text-base"
              >
                ×
              </button>
            </div>
            
            <div className="h-48 sm:h-64 overflow-y-auto mb-3 sm:mb-4 space-y-2 sm:space-y-3" ref={chatRef}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-2 sm:p-3 rounded-lg sm:rounded-xl text-sm ${
                    msg.type === 'user' ? 'bg-blue-600' : 'bg-slate-700'
                  }`}>
                    {msg.message}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 p-2 sm:p-3 rounded-lg sm:rounded-xl">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map(i => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about cricket stats..."
                className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CricketDashboard;