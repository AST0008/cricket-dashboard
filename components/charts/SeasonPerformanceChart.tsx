import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { seasonComparisonData } from '@/lib/constants';

interface SeasonPerformanceChartProps {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
  isDark: boolean;
}

export const SeasonPerformanceChart = ({ selectedSeason, setSelectedSeason, isDark }: SeasonPerformanceChartProps) => {
  // Theme-based colors
  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#4B5563';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const buttonSelectedBg = isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white';
  const buttonUnselectedBg = isDark ? 'bg-slate-700 text-gray-400 hover:bg-slate-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  return (
    <div className={`lg:col-span-6 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Season Performance</h3>
        <div className="flex space-x-2">
          {['2021', '2022', '2023', '2024'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedSeason(year)}
              className={`px-2 py-1 rounded text-xs font-semibold transition-all ${selectedSeason === year ? buttonSelectedBg : buttonUnselectedBg
                }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={seasonComparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
            <XAxis
              dataKey="year"
              stroke={axisStroke}
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <YAxis
              yAxisId="runs"
              stroke={axisStroke}
              tick={{ fontSize: 10, fill: axisStroke }}
            />
            <YAxis
              yAxisId="avg"
              orientation="right"
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
              yAxisId="runs"
              dataKey="runs"
              fill={isDark ? '#3B82F6' : '#2563EB'}
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
            />
            <Line
              yAxisId="avg"
              type="monotone"
              dataKey="avg"
              stroke={isDark ? '#10B981' : '#059669'}
              strokeWidth={3}
              dot={{ fill: isDark ? '#10B981' : '#059669', r: 4 }}
              animationDuration={2500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
