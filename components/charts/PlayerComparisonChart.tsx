import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { playerComparisonData } from '@/lib/constants';

export const PlayerComparisonChart = () => {
  return (
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
  );
};
