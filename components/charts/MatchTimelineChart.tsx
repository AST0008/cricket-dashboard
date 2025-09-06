import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { matchTimelineData } from '@/lib/constants';

interface MatchTimelineChartProps {
  isDark: boolean;
}

export const MatchTimelineChart = ({ isDark }: MatchTimelineChartProps) => {
  // Theme-based colors
  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const pulseDotColor = isDark ? 'bg-green-500' : 'bg-green-400';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#4B5563';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const runsLine = isDark ? '#10B981' : '#059669';
  const requiredLine = isDark ? '#EF4444' : '#DC2626';
  const currentBoxBg = isDark ? 'bg-green-600' : 'bg-green-400';
  const targetBoxBg = isDark ? 'bg-red-600' : 'bg-red-400';
  const currentText = isDark ? 'text-gray-400' : 'text-gray-700';
  const targetText = isDark ? 'text-gray-400' : 'text-gray-700';

  return (
    <div className={`lg:col-span-6 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Match Timeline</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${pulseDotColor} rounded-full animate-pulse`}></div>
          <span className="text-xs text-gray-400">Live Match</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={matchTimelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
            <XAxis 
              dataKey="over" 
              stroke={axisStroke} 
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <YAxis 
              stroke={axisStroke} 
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="runs" 
              stroke={runsLine} 
              strokeWidth={3}
              dot={{ fill: runsLine, r: 5 }}
              animationDuration={3000}
            />
            <Line 
              type="monotone" 
              dataKey="required" 
              stroke={requiredLine} 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: requiredLine, r: 4 }}
              animationDuration={3500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
          <span className={currentText}>Current: 198</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
          <span className={targetText}>Target: 200</span>
        </div>
        <div className={`${currentBoxBg} px-2 py-1 rounded text-white font-semibold`}>
          Won by 2 runs
        </div>
      </div>
    </div>
  );
};
