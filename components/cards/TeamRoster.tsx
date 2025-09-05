import { Search } from 'lucide-react';
import { PlayerAvatar } from '@/components/ui/PlayerAvatar';
import { teamRoster } from '@/lib/constants';

interface TeamRosterProps {
  onPlayerSelect: (player: any) => void;
}

export const TeamRoster = ({ onPlayerSelect }: TeamRosterProps) => {
  return (
    <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Team Roster</h3>
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>
      
      <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
        {teamRoster.map((player, idx) => (
          <div
            key={idx}
            onClick={() => onPlayerSelect(player)}
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
  );
};
