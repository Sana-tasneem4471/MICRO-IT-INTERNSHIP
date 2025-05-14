import React from 'react';
import { formatStopwatchTime } from '../utils/timeUtils';

interface LapListProps {
  laps: number[];
  isDarkMode: boolean;
}

const LapList: React.FC<LapListProps> = ({ laps, isDarkMode }) => {
  return (
    <div className="w-full">
      <h3 className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>Laps</h3>
      <div className={`max-h-60 overflow-y-auto rounded-lg border ${
        isDarkMode ? 'border-slate-700' : 'border-slate-200'
      }`}>
        <table className="w-full">
          <thead>
            <tr className={isDarkMode ? 'bg-slate-700' : 'bg-slate-100'}>
              <th className={`py-2 px-4 text-left text-sm font-medium ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Lap</th>
              <th className={`py-2 px-4 text-right text-sm font-medium ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Time</th>
              <th className={`py-2 px-4 text-right text-sm font-medium ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>Total</th>
            </tr>
          </thead>
          <tbody>
            {laps.map((lap, index) => {
              const lapTime = index === 0 
                ? lap 
                : lap - laps[index - 1];
              
              return (
                <tr key={index} className={`border-t ${
                  isDarkMode 
                    ? 'border-slate-700 hover:bg-slate-700/50' 
                    : 'border-slate-200 hover:bg-slate-50'
                } transition-colors`}>
                  <td className="py-2 px-4 text-left">{laps.length - index}</td>
                  <td className="py-2 px-4 text-right font-mono">{formatStopwatchTime(lapTime)}</td>
                  <td className="py-2 px-4 text-right font-mono">{formatStopwatchTime(lap)}</td>
                </tr>
              );
            }).reverse()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LapList;