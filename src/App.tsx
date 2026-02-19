import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  ChevronRight, 
  Search, 
  Cpu, 
  AlertTriangle,
  Zap,
  Menu,
  X,
  Info
} from 'lucide-react';
import { CATEGORIES, DATA, DataCategory } from './data';

const CRT_OVERLAY = "after:content-[''] after:fixed after:inset-0 after:pointer-events-none after:bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] after:bg-[length:100%_2px,3px_100%] after:z-50";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [booting, setBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      "INITIALIZING HEADMASTER PROTOCOLS...",
      "SYNCING WITH GRAND ARCHITECT DE MONICO...",
      "CALIBRATING TACTICAL OVERLAY...",
      "ESTABLISHING SECURE LINK TO IACON DATABASE...",
      "ACCESS GRANTED. GUNNER ONLINE."
    ];
    
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setBootLines(prev => [...prev, lines[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
        setTimeout(() => setBooting(false), 1000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const currentData = (DATA as any)[selectedCategory] || [];
  const filteredData = currentData.filter((item: any) => 
    Object.values(item).some(val => 
      String(val).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  if (booting) {
    return (
      <div className={`min-h-screen bg-[#050505] text-[#00FF41] font-mono p-8 flex flex-col items-start justify-center overflow-hidden ${CRT_OVERLAY}`}>
        <div className="max-w-2xl w-full space-y-2">
          {bootLines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <ChevronRight size={16} />
              <span>{line}</span>
            </motion.div>
          ))}
          <motion.div 
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-[#00FF41] inline-block ml-1"
          />
        </div>
      </div>
    );
  }

  const accentColor = '#FF4400';
  const accentBg = 'bg-[#FF4400]';
  const accentBorder = 'border-[#FF4400]';
  const accentText = 'text-[#FF4400]';

  return (
    <div className={`min-h-screen bg-[#050505] text-[#E0E0E0] font-mono flex flex-col lg:flex-row overflow-hidden ${CRT_OVERLAY}`}>
      {/* Sidebar Navigation */}
      <aside className={`
        fixed lg:relative z-40 w-72 h-full bg-[#0A0A0A] border-r border-[#333] transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-[#333] flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 bg-[#FF4400]/10 border-[#FF4400]/30 rounded border`}>
              <Cpu className={accentText} size={24} />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tighter text-white uppercase">Cybertronian</h1>
              <p className="text-[10px] text-[#666] uppercase tracking-widest">Tactical Archive v5.0</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-120px)] custom-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setIsMenuOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded text-xs transition-all group
                ${selectedCategory === cat.id 
                  ? `${accentBg} text-black font-bold` 
                  : 'text-[#888] hover:bg-[#1A1A1A] hover:text-white'}
              `}
            >
              <cat.icon size={16} className={selectedCategory === cat.id ? 'text-black' : `text-[#555] group-hover:${accentText}`} />
              <span className="uppercase tracking-wider">{cat.title}</span>
              {selectedCategory === cat.id && <motion.div layoutId="active" className="ml-auto"><ChevronRight size={14} /></motion.div>}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-[#333] bg-[#0A0A0A]/80 backdrop-blur-md flex items-center justify-between px-6 z-30">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#888] hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555]" size={16} />
              <input 
                type="text"
                placeholder={`SEARCH TACTICAL DATABASE...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full bg-[#151515] border border-[#333] rounded px-10 py-1.5 text-xs focus:outline-none focus:${accentBorder} transition-colors uppercase tracking-tight`}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-[10px] text-[#666] uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
              <span>Gunner Online</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={12} className={accentText} />
              <span>Energon: 100%</span>
            </div>
          </div>
        </header>

        {/* Content View */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar bg-[radial-gradient(circle_at_50%_50%,#111_0%,#050505_100%)]">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[10px] ${accentText} font-bold uppercase tracking-[0.3em]`}>
                  Tactical Operations Manual
                </span>
                <div className="h-[1px] flex-1 bg-[#333]" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                {CATEGORIES.find(c => c.id === selectedCategory)?.title}
              </h2>
              <p className="text-[#888] text-sm max-w-2xl leading-relaxed">
                {CATEGORIES.find(c => c.id === selectedCategory)?.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="wait">
                {filteredData.length > 0 ? (
                  filteredData.map((item: any, idx: number) => (
                    <motion.div
                      key={`${selectedCategory}-${idx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`group bg-[#0D0D0D] border border-[#222] hover:${accentBorder}/50 p-6 rounded-lg transition-all relative overflow-hidden`}
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Terminal size={40} />
                      </div>
                      <div className={`absolute bottom-0 left-0 w-full h-[2px] ${accentBg} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />

                      <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-lg font-bold text-white uppercase tracking-tight group-hover:${accentText} transition-colors`}>
                          {item.name || item.term || item.title || item.class || item.type || `Entry #${idx + 1}`}
                        </h3>
                        {item.level && (
                          <span className={`text-[10px] ${accentBg} text-black px-2 py-0.5 rounded font-bold`}>LVL {item.level}</span>
                        )}
                      </div>

                      <div className="space-y-3">
                        {Object.entries(item).map(([key, value]) => {
                          if (['name', 'term', 'title', 'class', 'type', 'level', 'id'].includes(key)) return null;
                          return (
                            <div key={key} className="flex flex-col gap-1">
                              <span className="text-[9px] text-[#555] uppercase font-bold tracking-widest">{key.replace('_', ' ')}</span>
                              <span className={`text-sm text-[#AAA] leading-snug`}>
                                {String(value)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 flex flex-col items-center justify-center text-[#444] border-2 border-dashed border-[#222] rounded-xl">
                    <AlertTriangle size={48} className="mb-4 opacity-20" />
                    <p className="uppercase tracking-widest text-sm">No data found in this sector</p>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Technical Footer */}
            <div className="mt-20 pt-10 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
              <div className="flex items-center gap-4">
                <Info size={16} />
                <span className="text-[10px] uppercase tracking-widest">
                  Data Subject to Spark-Sync Latency
                </span>
              </div>
              <div className="flex gap-8 text-[10px] uppercase tracking-widest">
                <span>Ref: CYB-772-X</span>
                <span>Auth: ARCHITECT-LEVEL</span>
                <span>© 2026 IACON ARCHIVES</span>
                <span className="font-bold text-white">#trueomnism</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${accentColor};
        }
      `}} />
    </div>
  );
}
