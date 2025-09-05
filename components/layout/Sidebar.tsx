import { 
  Home, Users, MessageSquare, Settings, BarChart3, Trophy
} from 'lucide-react';
import { PlayerAvatar } from '@/components/ui/PlayerAvatar';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const sidebarItems = [
    { icon: Home, label: 'Dashboard', key: 'dashboard' },
    { icon: BarChart3, label: 'Analytics', key: 'analytics' },
    { icon: Users, label: 'Player', key: 'player' },
    { icon: Trophy, label: 'Team', key: 'team' },
    { icon: MessageSquare, label: 'Messages', key: 'messages' },
    { icon: Settings, label: 'Settings', key: 'settings' },
  ];

  return (
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
  );
};
