import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Contracts', value: '247', change: '+12', trend: 'up', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Pending Review', value: '34', change: '-8', trend: 'down', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { label: 'Clauses Used', value: '1,892', change: '+156', trend: 'up', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { label: 'Avg. Cycle Time', value: '4.2d', change: '-0.8d', trend: 'down', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-[#0d0d0e] border border-[#1a1a1d] rounded-lg p-4 md:p-5 relative overflow-hidden group hover:border-[#2a2a2d] transition-colors"
        >
          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-full h-full text-[#D4A853]" fill="currentColor" viewBox="0 0 24 24">
              <path d={stat.icon} />
            </svg>
          </div>

          <div className="flex items-start justify-between mb-2 md:mb-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#141416] rounded flex items-center justify-center">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
              </svg>
            </div>
            <span className={`font-mono text-[10px] md:text-xs px-2 py-1 rounded ${
              stat.trend === 'up' && stat.label !== 'Pending Review'
                ? 'bg-[#4ade80]/10 text-[#4ade80]'
                : stat.trend === 'down' && stat.label === 'Pending Review'
                ? 'bg-[#4ade80]/10 text-[#4ade80]'
                : stat.trend === 'down' && stat.label === 'Avg. Cycle Time'
                ? 'bg-[#4ade80]/10 text-[#4ade80]'
                : 'bg-[#f87171]/10 text-[#f87171]'
            }`}>
              {stat.change}
            </span>
          </div>

          <div className="relative z-10">
            <p className="font-mono text-2xl md:text-3xl text-[#e8e6e1] tracking-tight">{stat.value}</p>
            <p className="font-mono text-[10px] md:text-xs text-[#6b6860] mt-1 tracking-wide uppercase">{stat.label}</p>
          </div>

          {/* Bottom bar indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a1a1d]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className="h-full bg-[#D4A853]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
