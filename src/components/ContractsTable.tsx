import { motion } from 'framer-motion';

const contracts = [
  { id: 'CTR-0847', name: 'Series A Investment Agreement', party: 'Sequoia Capital', status: 'pending', date: '2024-01-15', value: '$12.5M' },
  { id: 'CTR-0846', name: 'Master Services Agreement', party: 'Acme Corp', status: 'active', date: '2024-01-14', value: '$240K' },
  { id: 'CTR-0845', name: 'Software License Agreement', party: 'TechStart Inc', status: 'review', date: '2024-01-13', value: '$85K' },
  { id: 'CTR-0844', name: 'NDA - Mutual', party: 'Innovation Labs', status: 'active', date: '2024-01-12', value: '-' },
  { id: 'CTR-0843', name: 'Employment Agreement', party: 'Sarah Chen', status: 'active', date: '2024-01-11', value: '$180K' },
  { id: 'CTR-0842', name: 'Vendor Agreement', party: 'CloudServe Ltd', status: 'expired', date: '2024-01-10', value: '$45K' },
];

const statusStyles: Record<string, string> = {
  active: 'bg-[#4ade80]/10 text-[#4ade80] border-[#4ade80]/20',
  pending: 'bg-[#D4A853]/10 text-[#D4A853] border-[#D4A853]/20',
  review: 'bg-[#60a5fa]/10 text-[#60a5fa] border-[#60a5fa]/20',
  expired: 'bg-[#6b6860]/10 text-[#6b6860] border-[#6b6860]/20',
};

export default function ContractsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-[#0d0d0e] border border-[#1a1a1d] rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 md:px-6 py-4 border-b border-[#1a1a1d] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg text-[#e8e6e1]">Recent Contracts</h3>
          <p className="font-mono text-[10px] text-[#6b6860] tracking-wide mt-0.5">LAST 30 DAYS</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-auto bg-[#141416] border border-[#2a2a2d] rounded px-3 py-2 pl-9 font-mono text-xs text-[#e8e6e1] placeholder-[#4a4843] focus:outline-none focus:border-[#D4A853] transition-colors min-h-[44px]"
            />
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#4a4843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button className="p-2 bg-[#141416] border border-[#2a2a2d] rounded text-[#6b6860] hover:text-[#e8e6e1] hover:border-[#D4A853] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-[#1a1a1d]">
        {contracts.map((contract, index) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            className="p-4 hover:bg-[#141416]/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-[#D4A853] mb-1">{contract.id}</p>
                <p className="font-mono text-sm text-[#e8e6e1] truncate">{contract.name}</p>
              </div>
              <span className={`font-mono text-[10px] px-2 py-1 rounded border ${statusStyles[contract.status]} uppercase shrink-0 ml-2`}>
                {contract.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-[#6b6860] font-mono text-xs">
              <span>{contract.party}</span>
              <span>{contract.value}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1a1a1d]">
              <th className="text-left px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Contract ID</th>
              <th className="text-left px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Name</th>
              <th className="text-left px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Counterparty</th>
              <th className="text-left px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Status</th>
              <th className="text-left px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Value</th>
              <th className="text-right px-6 py-3 font-mono text-[10px] text-[#6b6860] tracking-wider uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1d]">
            {contracts.map((contract, index) => (
              <motion.tr
                key={contract.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="hover:bg-[#141416]/50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <span className="font-mono text-xs text-[#D4A853]">{contract.id}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-[#e8e6e1]">{contract.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-[#6b6860]">{contract.party}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`font-mono text-[10px] px-2 py-1 rounded border ${statusStyles[contract.status]} uppercase`}>
                    {contract.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm text-[#e8e6e1]">{contract.value}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-[#6b6860] hover:text-[#D4A853] transition-colors opacity-0 group-hover:opacity-100 min-w-[44px] min-h-[44px] inline-flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-6 py-4 border-t border-[#1a1a1d] flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[#6b6860]">Showing 6 of 247 contracts</p>
        <div className="flex items-center gap-2">
          <button className="p-2 bg-[#141416] border border-[#2a2a2d] rounded text-[#6b6860] hover:text-[#e8e6e1] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="font-mono text-xs text-[#e8e6e1] px-3">1 / 42</span>
          <button className="p-2 bg-[#141416] border border-[#2a2a2d] rounded text-[#6b6860] hover:text-[#e8e6e1] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
