import React, { useState, useEffect } from 'react';
import Clock from './components/Clock';
import Stopwatch from './components/Stopwatch';
import TabNav from './components/TabNav';
import ThemeToggle from './components/ThemeToggle';
import { Clock as ClockIcon } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<'clock' | 'stopwatch'>('clock');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <div className="container mx-auto px-4 py-12 flex flex-col items-center">
        <header className="mb-8 flex items-center">
          <ClockIcon size={32} className="mr-3 text-blue-500" />
          <h1 className="text-3xl font-bold">Chronos</h1>
        </header>
        
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className={`w-full max-w-lg mx-auto rounded-2xl shadow-lg p-8 transition-all duration-300 ${
          isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
        }`}>
          {activeTab === 'clock' ? <Clock isDarkMode={isDarkMode} /> : <Stopwatch isDarkMode={isDarkMode} />}
        </div>
        
        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Chronos - Elegant time tracking</p>
        </footer>
      </div>
    </div>
  );
}

export default App;