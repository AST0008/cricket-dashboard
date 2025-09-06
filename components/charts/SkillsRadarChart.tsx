import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from 'recharts';
import { bowlingStatsData } from '@/lib/constants';

export const SkillsRadarChart = ({ isDark }: { isDark: boolean }) => {
 
  const bgColor = isDark ? 'bg-slate-800/50' : 'bg-white/50';
  const borderColor = isDark ? 'border-slate-700/50' : 'border-gray-300/50';
  const headingColor = isDark ? 'text-yellow-400' : 'text-indigo-600';
  const radarStroke = isDark ? '#8B5CF6' : '#6366F1';
  const radarFill = isDark ? '#8B5CF6' : '#6366F1';
  const polarGridStroke = isDark ? '#374151' : '#D1D5DB';
  const angleAxisTick = isDark ? '#9CA3AF' : '#4B5563';
  const radiusAxisTick = isDark ? '#6B7280' : '#9CA3AF';
  const tooltipBg = isDark ? '#1F2937' : '#F9FAFB';
  const skillBoxBg = isDark ? 'bg-slate-700/30' : 'bg-gray-200/30';
  const skillNameColor = isDark ? 'text-gray-400' : 'text-gray-600';
  const skillValueColor = isDark ? 'text-white' : 'text-gray-900';

  return (
    <div className={`lg:col-span-4 ${bgColor} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className={`text-lg sm:text-xl font-bold ${headingColor}`}>Skills Radar</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Interactive</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={bowlingStatsData}>
            <PolarGrid stroke={polarGridStroke} />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fontSize: 10, fill: angleAxisTick }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fontSize: 8, fill: radiusAxisTick }}
            />
            <Radar
              name="Skills"
              dataKey="value"
              stroke={radarStroke}
              fill={radarFill}
              fillOpacity={0.3}
              strokeWidth={2}
              animationDuration={3000}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: tooltipBg,
                border: 'none',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
        {bowlingStatsData.map((skill, idx) => (
          <div key={idx} className={`flex items-center justify-between p-2 rounded-lg ${skillBoxBg}`}>
            <span className={skillNameColor}>{skill.name}</span>
            <span className={`font-semibold ${skillValueColor}`}>{skill.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
