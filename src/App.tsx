import { useState } from 'react'
import { BeakerIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline'

function App() {
  const [active, setActive] = useState(false)

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-grid">
      {/* Decorative Blur Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      <main className="relative z-10 w-full max-w-4xl px-6">
        <div className="glass p-8 md:p-12 rounded-3xl space-y-8 animate-float">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <BeakerIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <h1 className="text-xl font-bold tracking-tighter glow-text">AXON_GENESIS</h1>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">VIRTUAL_DATA</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">NEURAL_LINK</a>
            </div>
          </header>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-8">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-white/5 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                SYSTEM STATUS: OPTIMAL
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                UPGRADE YOUR <br />
                <span className="text-cyan-400">REALITY_</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                Experience the next generation of digital interface design. Built with React 19, Vite, and Tailwind 4.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                <button 
                  onClick={() => setActive(!active)}
                  className="btn-cyber flex items-center gap-2"
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                  INITIALIZE_
                </button>
                <button className="px-6 py-3 font-bold text-slate-300 hover:text-white transition-colors">
                  VIEW_DOCS
                </button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative aspect-square flex items-center justify-center">
              <div className={`w-64 h-64 rounded-2xl border-2 border-dashed border-cyan-500/30 transition-all duration-700 ${active ? 'rotate-180 scale-110 border-fuchsia-500/50' : ''}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <SparklesIcon className={`w-32 h-32 text-cyan-500/20 transition-all duration-700 ${active ? 'text-fuchsia-500/40 scale-125 rotate-12' : ''}`} />
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute top-4 right-4 p-4 glass rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="w-8 h-1 bg-cyan-500 mb-2" />
                <div className="w-12 h-1 bg-slate-700" />
              </div>
              <div className="absolute bottom-10 left-4 p-4 glass rounded-xl animate-float" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-1 bg-fuchsia-500 mb-2" />
                <div className="w-8 h-1 bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Footer Stats */}
          <footer className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-white">1.2ms</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Latency</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Uptime</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-white">4.0.0</div>
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Version</div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}

export default App
