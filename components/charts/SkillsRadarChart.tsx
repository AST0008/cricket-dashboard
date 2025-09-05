import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from 'recharts';
import { bowlingStatsData } from '@/lib/constants';

export const SkillsRadarChart = () => {
  return (
    <div className="lg:col-span-4 bg-slate-800/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Skills Radar</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-400">Interactive</span>
        </div>
      </div>
      
      <div className="h-48 sm:h-56 lg:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={bowlingStatsData}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fontSize: 10, fill: '#9CA3AF' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fontSize: 8, fill: '#6B7280' }}
            />
            <Radar
              name="Skills"
              dataKey="value"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
              strokeWidth={2}
              animationDuration={3000}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
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
          <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-700/30">
            <span className="text-gray-400">{skill.name}</span>
            <span className="font-semibold text-white">{skill.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
