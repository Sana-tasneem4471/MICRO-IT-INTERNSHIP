import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils/timeUtils';

interface ClockProps {
  isDarkMode: boolean;
}

const Clock: React.FC<ClockProps> = ({ isDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  
  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`text-7xl md:text-8xl font-light tracking-tight flex items-baseline ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        <span>{formattedHours.toString().padStart(2, '0')}</span>
        <span className="mx-2 animate-pulse">:</span>
        <span>{minutes.toString().padStart(2, '0')}</span>
        <span className="mx-2 animate-pulse">:</span>
        <span>{seconds.toString().padStart(2, '0')}</span>
        <span className={`text-3xl ml-3 font-normal ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{ampm}</span>
      </div>
      <p className={`text-lg mt-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {formatTime(currentTime, { weekday: 'long', month: 'long', day: 'numeric' })}
      </p>
    </div>
  );
};

export default Clock;