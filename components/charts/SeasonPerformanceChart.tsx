import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { seasonComparisonData } from '@/lib/constants';

interface SeasonPerformanceChartProps {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
}

export const SeasonPerformanceChart = ({ selectedSeason, setSelectedSeason }: SeasonPerformanceChartProps) => {
  return (
    <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Season Performance</h3>
        <div className="flex space-x-2">
          {['2021', '2022', '2023', '2024'].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedSeason(year)}
              className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                selectedSeason === year
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-gray-400 hover:bg-slate-600'
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
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="year" 
              stroke="#9CA3AF" 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              yAxisId="runs"
              stroke="#9CA3AF" 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
              yAxisId="avg"
              orientation="right" 
              stroke="#9CA3AF" 
              tick={{ fontSize: 10 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            />
            <Bar 
              yAxisId="runs"
              dataKey="runs" 
              fill="#3B82F6" 
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
            />
            <Line 
              yAxisId="avg"
              type="monotone" 
              dataKey="avg" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', r: 4 }}
              animationDuration={2500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
