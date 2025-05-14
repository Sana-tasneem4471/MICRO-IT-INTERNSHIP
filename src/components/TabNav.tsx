import React from 'react';
import { Clock, Timer } from 'lucide-react';

interface TabNavProps {
  activeTab: 'clock' | 'stopwatch';
  onTabChange: (tab: 'clock' | 'stopwatch') => void;
}

const TabNav: React.FC<TabNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex rounded-lg bg-slate-100 p-1">
        <button
          onClick={() => onTabChange('clock')}
          className={`
            flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium
            transition-all duration-200
            ${activeTab === 'clock' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
            }
          `}
        >
          <Clock size={18} className="mr-2" />
          Clock
        </button>
        
        <button
          onClick={() => onTabChange('stopwatch')}
          className={`
            flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium
            transition-all duration-200
            ${activeTab === 'stopwatch' 
              ? 'bg-white text-slate-900 shadow-sm' 
              : 'text-slate-600 hover:text-slate-900'
            }
          `}
        >
          <Timer size={18} className="mr-2" />
          Stopwatch
        </button>
      </div>
    </div>
  );
};

export default TabNav;