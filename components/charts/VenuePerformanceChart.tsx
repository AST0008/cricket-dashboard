import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { venuePerformanceData } from '@/lib/constants';

export const VenuePerformanceChart = () => {
  return (
    <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Venue Performance</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Heatmap</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={venuePerformanceData} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" tick={{ fontSize: 10 }} />
            <YAxis 
              dataKey="venue" 
              type="category" 
              stroke="#9CA3AF" 
              tick={{ fontSize: 10 }}
              width={80}
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
              dataKey="runs" 
              fill="#EF4444"
              radius={[0, 4, 4, 0]}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        {venuePerformanceData.slice(0, 4).map((venue, idx) => (
          <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30">
            <span className="text-gray-400 truncate">{venue.venue}</span>
            <span className="font-semibold text-red-400">{venue.avg}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
