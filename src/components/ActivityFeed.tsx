import { motion } from 'framer-motion';

const activities = [
  { id: 1, action: 'Contract signed', subject: 'MSA - Acme Corp', user: 'JD', time: '2m ago', type: 'success' },
  { id: 2, action: 'Review requested', subject: 'License Agreement', user: 'MK', time: '15m ago', type: 'warning' },
  { id: 3, action: 'Clause updated', subject: 'Force Majeure v2.1', user: 'AL', time: '1h ago', type: 'info' },
  { id: 4, action: 'Contract created', subject: 'Vendor Agreement', user: 'JD', time: '2h ago', type: 'default' },
  { id: 5, action: 'Approval granted', subject: 'NDA - Innovation Labs', user: 'SR', time: '3h ago', type: 'success' },
  { id: 6, action: 'Comment added', subject: 'Employment Terms', user: 'MK', time: '4h ago', type: 'info' },
];

const typeStyles: Record<string, string> = {
  success: 'bg-[#4ade80]',
  warning: 'bg-[#D4A853]',
  info: 'bg-[#60a5fa]',
  default: 'bg-[#6b6860]',
};

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#0d0d0e] border border-[#1a1a1d] rounded-lg overflow-hidden h-full"
    >
      {/* Header */}
      <div className="px-4 md:px-6 py-4 border-b border-[#1a1a1d] flex items-center justify-between">
        <div>
          <h3 className="font-serif text-lg text-[#e8e6e1]">Activity Feed</h3>
          <p className="font-mono text-[10px] text-[#6b6860] tracking-wide mt-0.5">REAL-TIME UPDATES</p>
        </div>
        <button className="p-2 text-[#6b6860] hover:text-[#D4A853] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {/* Activity List */}
      <div className="divide-y divide-[#1a1a1d] max-h-[400px] overflow-y-auto">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            className="px-4 md:px-6 py-4 hover:bg-[#141416]/50 transition-colors group"
          >
            <div className="flex items-start gap-3">
              {/* User Avatar */}
              <div className="w-8 h-8 bg-[#141416] rounded-full flex items-center justify-center flex-shrink-0 border border-[#2a2a2d]">
                <span className="font-mono text-[10px] text-[#D4A853]">{activity.user}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${typeStyles[activity.type]}`} />
                  <span className="font-mono text-xs text-[#e8e6e1]">{activity.action}</span>
                </div>
                <p className="font-mono text-xs text-[#6b6860] truncate">{activity.subject}</p>
              </div>

              {/* Time */}
              <span className="font-mono text-[10px] text-[#4a4843] flex-shrink-0">{activity.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 md:px-6 py-4 border-t border-[#1a1a1d]">
        <button className="w-full py-3 font-mono text-xs text-[#6b6860] hover:text-[#D4A853] transition-colors flex items-center justify-center gap-2 min-h-[44px]">
          View all activity
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
