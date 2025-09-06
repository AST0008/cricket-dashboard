import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { powerplayData, deathOversData } from '@/lib/constants';

interface PowerplayDeathChartProps {
  isDark: boolean;
}

export const PowerplayDeathChart = ({ isDark }: PowerplayDeathChartProps) => {

  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const pulseDotColor = isDark ? 'bg-yellow-500' : 'bg-yellow-400';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#4B5563';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const barRunsFill = isDark ? '#F59E0B' : '#D97706';
  const barBoundariesFill = isDark ? '#EF4444' : '#DC2626';
  const powerplayBoxBg = isDark ? 'bg-yellow-500/20' : 'bg-yellow-300/20';
  const deathBoxBg = isDark ? 'bg-red-500/20' : 'bg-red-400/20';
  const powerplayText = isDark ? 'text-yellow-400' : 'text-yellow-700';
  const deathText = isDark ? 'text-red-400' : 'text-red-700';

  return (
    <div className={`lg:col-span-6 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Powerplay vs Death</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${pulseDotColor} rounded-full animate-pulse`}></div>
          <span className="text-xs text-gray-400">Phase Analysis</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...powerplayData, ...deathOversData]}>
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
            <Bar 
              dataKey="runs" 
              fill={barRunsFill} 
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
            />
            <Bar 
              dataKey="boundaries" 
              fill={barBoundariesFill} 
              radius={[4, 4, 0, 0]}
              animationDuration={2500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className={`p-2 rounded-lg ${powerplayBoxBg}`}>
          <span className={`font-semibold ${powerplayText}`}>Powerplay: 125 runs</span>
        </div>
        <div className={`p-2 rounded-lg ${deathBoxBg}`}>
          <span className={`font-semibold ${deathText}`}>Death: 85 runs</span>
        </div>
      </div>
    </div>
  );
};
