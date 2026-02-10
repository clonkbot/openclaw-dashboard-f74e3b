import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
  { id: 'contracts', label: 'Contracts', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { id: 'clauses', label: 'Clauses', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { id: 'analytics', label: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export default function MobileNav({ activeSection, setActiveSection, isOpen, setIsOpen }: MobileNavProps) {
  return (
    <>
      {/* Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#0d0d0e]/95 backdrop-blur-sm border-b border-[#1a1a1d] z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D4A853] rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-[#0a0a0b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <span className="font-serif text-base text-[#e8e6e1]">OpenClaw</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#6b6860] hover:text-[#e8e6e1] min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-[#0a0a0b]/95 backdrop-blur-sm z-30 pt-14"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded transition-all min-h-[52px] ${
                        activeSection === item.id
                          ? 'bg-[#D4A853]/10 text-[#D4A853] border-l-2 border-[#D4A853]'
                          : 'text-[#6b6860] hover:text-[#e8e6e1] hover:bg-[#141416]'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                      <span className="font-mono text-sm tracking-wide">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Tab Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0d0d0e]/95 backdrop-blur-sm border-t border-[#1a1a1d] z-40 flex items-center justify-around px-2 pb-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex flex-col items-center gap-1 p-2 min-w-[60px] min-h-[48px] rounded transition-colors ${
              activeSection === item.id ? 'text-[#D4A853]' : 'text-[#6b6860]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
            </svg>
            <span className="font-mono text-[10px] tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
