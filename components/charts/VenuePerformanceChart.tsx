import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { venuePerformanceData } from '@/lib/constants';

interface VenuePerformanceChartProps {
  isDark: boolean;
}

export const VenuePerformanceChart = ({ isDark }: VenuePerformanceChartProps) => {
  // Theme-based colors
  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const pulseDotColor = isDark ? 'bg-red-500' : 'bg-red-400';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#4B5563';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const barFill = isDark ? '#EF4444' : '#DC2626';
  const skillBoxBg = isDark ? 'bg-slate-700/30' : 'bg-gray-200/30';
  const skillNameColor = isDark ? 'text-gray-400' : 'text-gray-700';
  const skillValueColor = isDark ? 'text-red-400' : 'text-red-600';

  return (
    <div className={`lg:col-span-6 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Venue Performance</h3>
        <div className="flex items-center space-x-2">
          <div className={`w-2 h-2 ${pulseDotColor} rounded-full animate-pulse`}></div>
          <span className="text-xs text-gray-400">Heatmap</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={venuePerformanceData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
            <XAxis type="number" stroke={axisStroke} tick={{ fontSize: 10, fill: axisStroke }} />
            <YAxis 
              dataKey="venue" 
              type="category" 
              stroke={axisStroke} 
              tick={{ fontSize: 10, fill: axisStroke }}
              width={80}
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
              fill={barFill}
              radius={[0, 4, 4, 0]}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        {venuePerformanceData.slice(0, 4).map((venue, idx) => (
          <div key={idx} className={`flex items-center justify-between p-2 rounded-lg ${skillBoxBg}`}>
            <span className={`${skillNameColor} truncate`}>{venue.venue}</span>
            <span className={`font-semibold ${skillValueColor}`}>{venue.avg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
