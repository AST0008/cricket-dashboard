'use client';
import { useEffect, useState } from "react";
import { Search, Sun, Moon } from "lucide-react";
import { players } from "@/lib/constants"; // Import player list

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  selectedPlayer: any;
  setSelectedPlayer: (player: any) => void;
}

export const Header = ({
  activeTab,
  setActiveTab,
  isDark,
  setIsDark,
  selectedPlayer,
  setSelectedPlayer,
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlayers, setFilteredPlayers] = useState<any[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const matches = players.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPlayers(matches);
    } else {
      setFilteredPlayers([]);
    }
  }, [searchQuery]);

  const handleSelectPlayer = (player: any) => {
    setSelectedPlayer(player);
    setSearchQuery("");
    setShowDropdown(false);
  };

  return (
    <div className="h-14 sm:h-16 bg-slate-200/30 dark:bg-slate-800/30 backdrop-blur-xl border-b border-slate-300/50 dark:border-slate-700/50 flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
      
      <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Dashboard</h1>
        {/* <div className="hidden sm:flex space-x-4 lg:space-x-6">
          <button
            onClick={() => setActiveTab("player")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm ${
              activeTab === "player"
                ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Player
          </button>
          <button
            onClick={() => setActiveTab("team")}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 text-sm ${
              activeTab === "team"
                ? "bg-blue-600/20 text-blue-600 dark:text-blue-400"
                : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
            }`}
          >
            Team
          </button>
        </div> */}
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            placeholder="Search Player..."
            className="bg-slate-100/50 dark:bg-slate-700/50 border border-slate-300/50 dark:border-slate-600/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300 w-32 lg:w-40"
          />
          {showDropdown && filteredPlayers.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-700 shadow-lg rounded-b-md max-h-60 overflow-y-auto z-10">
              {filteredPlayers.map((player) => (
                <div
                  key={player.name}
                  className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                  onClick={() => handleSelectPlayer(player)}
                >
                  {player.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-slate-300/50 dark:bg-slate-700/50 flex items-center justify-center hover:bg-slate-400/50 dark:hover:bg-slate-600/50 transition-all duration-300"
        >
          {isDark ? (
            <Sun className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
          ) : (
            <Moon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800" />
          )}
        </button>
      </div>
    </div>
  );
};
