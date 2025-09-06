import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { playerComparisonData } from '@/lib/constants';

interface PlayerComparisonChartProps {
  isDark: boolean;
}

export const PlayerComparisonChart = ({ isDark }: PlayerComparisonChartProps) => {

  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const pulseDotColor = isDark ? 'bg-orange-500' : 'bg-orange-400';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#4B5563';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const skillBoxBg = isDark ? 'bg-slate-700/30' : 'bg-gray-200/30';
  const skillNameColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const skillValueColor = isDark ? 'text-orange-400' : 'text-orange-500';
  const scatterFill = isDark ? '#F59E0B' : '#D97706';

  return (
    <div className={`lg:col-span-4 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Player Comparison</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${pulseDotColor} rounded-full animate-pulse`}></div>
          <span className="text-xs text-gray-400">2024 Season</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart data={playerComparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
            <XAxis 
              type="number" 
              dataKey="avg" 
              name="Average" 
              stroke={axisStroke}
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <YAxis 
              type="number" 
              dataKey="sr" 
              name="Strike Rate" 
              stroke={axisStroke}
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <ZAxis type="number" dataKey="runs" range={[50, 400]} />
            <Tooltip
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: tooltipBg,
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            />
            <Scatter 
              dataKey="runs" 
              fill={scatterFill} 
              animationDuration={2000}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        {playerComparisonData.slice(0, 4).map((player, idx) => (
          <div key={idx} className={`flex items-center justify-between p-2 rounded-lg ${skillBoxBg}`}>
            <span className={`${skillNameColor} truncate`}>{player.name.split(' ')[0]}</span>
            <span className={`font-semibold ${skillValueColor}`}>{player.runs}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
