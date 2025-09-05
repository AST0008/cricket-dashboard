import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { battingFormData } from '@/lib/constants';

export const BattingFormChart = () => {
  return (
    <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Batting Form Trend</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Live</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={battingFormData}>
            <defs>
              <linearGradient id="runsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="srGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
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
            <Area
              type="monotone"
              dataKey="runs"
              stroke="#06B6D4"
              fill="url(#runsGradient)"
              strokeWidth={3}
              animationDuration={2000}
            />
            <Area
              type="monotone"
              dataKey="strikeRate"
              stroke="#10B981"
              fill="url(#srGradient)"
              strokeWidth={2}
              animationDuration={2500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-cyan-400 rounded mr-2"></div>
            <span className="text-gray-400">Runs</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-400 rounded mr-2"></div>
            <span className="text-gray-400">Strike Rate</span>
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-green-500 px-3 py-1 rounded-full text-xs font-semibold text-white">
          Form: Excellent
        </div>
      </div>
    </div>
  );
};
