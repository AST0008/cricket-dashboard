import Image from "next/image";
import { motion } from "framer-motion";

type Player = {
  name: string;
  role: string;
  matches: number;
  jersey: number;
  image?: string;
  logo?: string;
  highestScore: string;
  average: number;
  centuries: number;
  stats: {
    batting: {
      runs: number;
      highestScore: string;
      average: number;
      centuries: number;
      mom: number;
    };
  };
};

interface PlayerProfileProps {
  selectedPlayer: Player;
}

export const PlayerProfile = ({ selectedPlayer }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative p-6 sm:p-8 overflow-hidden text-white rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 shadow-lg"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
        {/* Left Section: Logo, Name, Role, Stats */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex items-center gap-4">
            {selectedPlayer.logo && (
              <Image
                src={selectedPlayer.logo}
                alt="Team Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{selectedPlayer.name}</h2>
              <p className="text-md sm:text-lg text-blue-200">{selectedPlayer.role}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <StatItem value={selectedPlayer.matches} label="Matches" />
            <StatItem value={selectedPlayer.stats.batting.runs.toLocaleString()} label="Total Runs" />
            <StatItem value={selectedPlayer.centuries || 0} label="Centuries" />
            <StatItem value={selectedPlayer.highestScore || 0} label="Highest Score" />
            <StatItem value={selectedPlayer.average || 0} label="Average" />
            <StatItem value={selectedPlayer.jersey} label="Jersey No." />
          </div>
        </div>

        {/* Right Section: Player Image */}
        {selectedPlayer.image && (
          <div className="relative w-full sm:w-1/2 lg:w-1/3 h-[250px] min-w-[200px]">
            <Image
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const StatItem = ({ value, label }: { value: string | number; label: string }) => (
  <div className="bg-blue-700 rounded-lg p-4 text-center">
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs sm:text-sm text-blue-300 uppercase">{label}</p>
  </div>
);
