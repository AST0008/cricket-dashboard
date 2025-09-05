import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { matchTimelineData } from '@/lib/constants';

export const MatchTimelineChart = () => {
  return (
    <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Match Timeline</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live Match</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={matchTimelineData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="over" 
              stroke="#9CA3AF" 
              tick={{ fontSize: 10 }}
            />
            <YAxis 
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
            <Line 
              type="monotone" 
              dataKey="runs" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', r: 5 }}
              animationDuration={3000}
            />
            <Line 
              type="monotone" 
              dataKey="required" 
              stroke="#EF4444" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#EF4444', r: 4 }}
              animationDuration={3500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 flex items-center justify-between text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
          <span className="text-gray-400">Current: 198</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
          <span className="text-gray-400">Target: 200</span>
        </div>
        <div className="bg-green-600 px-2 py-1 rounded text-white font-semibold">
          Won by 2 runs
        </div>
      </div>
    </div>
  );
};
