import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { powerplayData, deathOversData } from '@/lib/constants';

export const PowerplayDeathChart = () => {
  return (
    <div className="lg:col-span-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Powerplay vs Death</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Phase Analysis</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={[...powerplayData, ...deathOversData]}>
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
            <Bar 
              dataKey="runs" 
              fill="#F59E0B" 
              radius={[4, 4, 0, 0]}
              animationDuration={2000}
            />
            <Bar 
              dataKey="boundaries" 
              fill="#EF4444" 
              radius={[4, 4, 0, 0]}
              animationDuration={2500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="p-2 rounded-lg bg-yellow-500/20">
          <span className="text-yellow-400 font-semibold">Powerplay: 125 runs</span>
        </div>
        <div className="p-2 rounded-lg bg-red-500/20">
          <span className="text-red-400 font-semibold">Death: 85 runs</span>
        </div>
      </div>
    </div>
  );
};
