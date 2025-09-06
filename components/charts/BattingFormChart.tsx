import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { battingFormData } from '@/lib/constants';

export const BattingFormChart = ({ isDark }: { isDark: boolean }) => {

  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const gridStroke = isDark ? '#374151' : '#D1D5DB';
  const axisStroke = isDark ? '#9CA3AF' : '#374151';
  const tooltipBg = isDark ? '#1F2937' : '#F3F4F6';
  const legendBoxRuns = isDark ? 'bg-cyan-400' : 'bg-cyan-500';
  const legendBoxSR = isDark ? 'bg-green-400' : 'bg-green-500';
  const formBadgeBg = isDark ? 'from-cyan-500 to-green-500' : 'from-cyan-500 to-green-500';
  const formBadgeText = 'text-white';

  return (
    <div className={`lg:col-span-4 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Batting Form Trend</h3>
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
            <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
            <XAxis 
              dataKey="month" 
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
            <div className={`w-3 h-3 ${legendBoxRuns} rounded mr-2`}></div>
            <span>Runs</span>
          </div>
          <div className="flex items-center">
            <div className={`w-3 h-3 ${legendBoxSR} rounded mr-2`}></div>
            <span>Strike Rate</span>
          </div>
        </div>
        <div className={`bg-gradient-to-r ${formBadgeBg} px-3 py-1 rounded-full text-xs font-semibold ${formBadgeText}`}>
          Form: Excellent
        </div>
      </div>
    </div>
  );
};
