import { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import StatsGrid from './components/StatsGrid';
import ContractsTable from './components/ContractsTable';
import ActivityFeed from './components/ActivityFeed';
import ClauseLibrary from './components/ClauseLibrary';
import MobileNav from './components/MobileNav';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#e8e6e1] relative overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Scanline effect */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.02]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Ambient glow */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#D4A853] opacity-[0.03] blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-[#D4A853] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="flex min-h-screen relative z-10">
        {/* Desktop Sidebar */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          className="hidden lg:flex"
        />

        {/* Mobile Navigation */}
        <MobileNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-4 md:p-6 lg:p-8 pb-24 lg:pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <header className="mb-6 md:mb-8 pt-14 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#e8e6e1] tracking-tight">
                    Command Center
                  </h1>
                  <p className="text-[#6b6860] font-mono text-xs md:text-sm mt-1 tracking-wide">
                    OPENCLAW // LEGAL OPS DASHBOARD
                  </p>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-[#141416] border border-[#2a2a2d] rounded">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-[#6b6860]">SYSTEM ACTIVE</span>
                  </div>
                  <button className="p-2 md:p-3 bg-[#D4A853] text-[#0a0a0b] rounded hover:bg-[#e8bc6a] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            </header>

            {/* Stats Grid */}
            <StatsGrid />

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
              {/* Contracts Table - Spans 2 columns on xl */}
              <div className="xl:col-span-2">
                <ContractsTable />
              </div>

              {/* Activity Feed */}
              <div className="xl:col-span-1">
                <ActivityFeed />
              </div>
            </div>

            {/* Clause Library */}
            <ClauseLibrary />

            {/* Footer */}
            <footer className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-[#1a1a1d]">
              <p className="text-center text-[#4a4843] font-mono text-[10px] md:text-xs tracking-wider">
                Requested by @T1000_V2 · Built by @clonkbot
              </p>
            </footer>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
