import { motion } from 'framer-motion';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  className?: string;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
  { id: 'contracts', label: 'Contracts', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'clauses', label: 'Clause Library', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'templates', label: 'Templates', icon: 'M4 5a2 2 0 012-2h8l4 4v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm8-1v4h4' },
  { id: 'workflows', label: 'Workflows', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { id: 'analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export default function Sidebar({ activeSection, setActiveSection, className = '' }: SidebarProps) {
  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 h-screen w-64 bg-[#0d0d0e] border-r border-[#1a1a1d] flex flex-col z-30 ${className}`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-[#1a1a1d]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D4A853] rounded flex items-center justify-center">
            <svg className="w-6 h-6 text-[#0a0a0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-lg text-[#e8e6e1] tracking-tight">OpenClaw</h2>
            <p className="font-mono text-[10px] text-[#D4A853] tracking-widest">LEGAL OPS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded transition-all duration-200 min-h-[44px] ${
                  activeSection === item.id
                    ? 'bg-[#D4A853]/10 text-[#D4A853] border-l-2 border-[#D4A853]'
                    : 'text-[#6b6860] hover:text-[#e8e6e1] hover:bg-[#141416]'
                }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="font-mono text-sm tracking-wide">{item.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-[#1a1a1d]">
        <div className="flex items-center gap-3 px-4 py-3 bg-[#141416] rounded">
          <div className="w-8 h-8 bg-[#2a2a2d] rounded-full flex items-center justify-center">
            <span className="font-mono text-xs text-[#D4A853]">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-mono text-sm text-[#e8e6e1] truncate">Jane Doe</p>
            <p className="font-mono text-[10px] text-[#6b6860] tracking-wide">ADMIN</p>
          </div>
          <button className="p-2 text-[#6b6860] hover:text-[#e8e6e1] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
