import { motion } from 'framer-motion';

const clauses = [
  { id: 1, name: 'Force Majeure', version: 'v2.1', category: 'Risk', uses: 847, lastUpdated: '3d ago' },
  { id: 2, name: 'Limitation of Liability', version: 'v3.0', category: 'Liability', uses: 1203, lastUpdated: '1w ago' },
  { id: 3, name: 'Indemnification', version: 'v2.4', category: 'Liability', uses: 956, lastUpdated: '2w ago' },
  { id: 4, name: 'Confidentiality', version: 'v4.1', category: 'Privacy', uses: 2341, lastUpdated: '5d ago' },
  { id: 5, name: 'Termination for Convenience', version: 'v1.8', category: 'Exit', uses: 678, lastUpdated: '1m ago' },
  { id: 6, name: 'IP Assignment', version: 'v2.0', category: 'IP', uses: 512, lastUpdated: '3w ago' },
];

const categoryColors: Record<string, string> = {
  Risk: 'border-[#f87171] text-[#f87171]',
  Liability: 'border-[#D4A853] text-[#D4A853]',
  Privacy: 'border-[#60a5fa] text-[#60a5fa]',
  Exit: 'border-[#a78bfa] text-[#a78bfa]',
  IP: 'border-[#4ade80] text-[#4ade80]',
};

export default function ClauseLibrary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-6 md:mt-8"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 md:mb-6">
        <div>
          <h3 className="font-serif text-lg md:text-xl text-[#e8e6e1]">Clause Library</h3>
          <p className="font-mono text-[10px] md:text-xs text-[#6b6860] tracking-wide mt-0.5">STANDARD CONTRACT PROVISIONS</p>
        </div>
        <button className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 bg-[#D4A853] text-[#0a0a0b] rounded font-mono text-xs hover:bg-[#e8bc6a] transition-colors min-h-[44px]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Clause
        </button>
      </div>

      {/* Clause Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
        {clauses.map((clause, index) => (
          <motion.div
            key={clause.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
            className="bg-[#0d0d0e] border border-[#1a1a1d] rounded-lg p-4 md:p-5 hover:border-[#D4A853]/30 transition-all duration-300 group cursor-pointer"
          >
            {/* Top Row */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded border ${categoryColors[clause.category]}`}>
                  {clause.category}
                </span>
                <span className="font-mono text-[10px] text-[#4a4843]">{clause.version}</span>
              </div>
              <button className="p-1.5 text-[#4a4843] hover:text-[#D4A853] transition-colors opacity-0 group-hover:opacity-100 min-w-[36px] min-h-[36px] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            {/* Name */}
            <h4 className="font-serif text-base md:text-lg text-[#e8e6e1] mb-3 group-hover:text-[#D4A853] transition-colors">
              {clause.name}
            </h4>

            {/* Stats */}
            <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1d]">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#4a4843]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="font-mono text-xs text-[#6b6860]">{clause.uses.toLocaleString()} uses</span>
              </div>
              <span className="font-mono text-[10px] text-[#4a4843]">{clause.lastUpdated}</span>
            </div>

            {/* Hover indicator */}
            <div className="h-0.5 bg-[#1a1a1d] mt-4 -mb-1 rounded overflow-hidden">
              <div className="h-full w-0 group-hover:w-full bg-[#D4A853] transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
