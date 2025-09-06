import { Search } from 'lucide-react';
import { PlayerAvatar } from '@/components/ui/PlayerAvatar';
import { teamRoster } from '@/lib/constants';

interface TeamRosterProps {
  onPlayerSelect: (player: any) => void;
  isDark: boolean;
}

export const TeamRoster = ({ onPlayerSelect, isDark }: TeamRosterProps) => {
  // Theme-based colors
  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const searchIconColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const playerHoverBg = isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-200/40';
  const playerNameColor = isDark ? 'text-white' : 'text-gray-900';
  const playerNameHoverColor = isDark ? 'group-hover:text-blue-400' : 'group-hover:text-indigo-600';
  const playerRoleColor = isDark ? 'text-gray-300' : 'text-gray-700';
  const jerseyBg = isDark ? 'bg-yellow-500/20' : 'bg-yellow-300/20';
  const jerseyText = isDark ? 'text-yellow-400' : 'text-yellow-600';

  return (
    <div className={`lg:col-span-4 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Team Roster</h3>
        <Search className={`w-4 h-4 sm:w-5 sm:h-5 ${searchIconColor}`} />
      </div>
      
      <div className="space-y-3 sm:space-y-4 max-h-80 sm:max-h-96 overflow-y-auto">
        {teamRoster.map((player, idx) => (
          <div
            key={idx}
            onClick={() => onPlayerSelect(player)}
            className={`flex items-center space-x-3 p-2 sm:p-3 rounded-lg sm:rounded-xl ${playerHoverBg} transition-all duration-300 cursor-pointer group`}
          >
            <PlayerAvatar player={player.image} size="sm" />
            <div className="flex-1 min-w-0">
              <p className={`font-semibold ${playerNameColor} ${playerNameHoverColor} transition-colors text-sm sm:text-base truncate`}>
                {player.name}
              </p>
              <p className={`text-xs sm:text-sm truncate ${playerRoleColor}`}>{player.role}</p>
            </div>
            <div className={`w-6 h-6 sm:w-8 sm:h-8 ${jerseyBg} rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className={`text-xs font-bold ${jerseyText}`}>{player.jersey}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
