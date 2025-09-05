import { Trophy } from 'lucide-react';

interface Player {
  id: number;
  name: string;
  country: string;
  role: string;
  matches: number;
  runs: number;
  average: number;
  centuries: number;
  highestScore: string;
  image: string;
  teamLogo: string;
  jersey: number;
  battingStyle: string;
}

interface PlayerProfileProps {
  selectedPlayer: Player;
}

export const PlayerProfile = ({ selectedPlayer }: PlayerProfileProps) => {
  return (
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
  );
};
