import React, { useState, useEffect, useRef } from 'react';
import { formatStopwatchTime } from '../utils/timeUtils';
import ControlButton from './ControlButton';
import LapList from './LapList';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

interface StopwatchProps {
  isDarkMode: boolean;
}

const Stopwatch: React.FC<StopwatchProps> = ({ isDarkMode }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleStartStop = () => {
    if (isRunning) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
    } else {
      const startTime = Date.now() - elapsedTime;
      startTimeRef.current = startTime;
      
      intervalRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 10);
      
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps(prevLaps => [...prevLaps, elapsedTime]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div className={`text-7xl md:text-8xl font-light tracking-tight mb-8 ${
        isDarkMode ? 'text-white' : 'text-slate-900'
      }`}>
        {formatStopwatchTime(elapsedTime)}
      </div>
      
      <div className="flex space-x-4 mb-8">
        <ControlButton 
          onClick={handleStartStop}
          color={isRunning ? 'red' : 'green'}
          icon={isRunning ? <Pause size={24} /> : <Play size={24} />}
          label={isRunning ? 'Pause' : 'Start'}
        />
        
        <ControlButton 
          onClick={handleLap}
          disabled={!isRunning}
          color="blue"
          icon={<Timer size={24} />}
          label="Lap"
        />
        
        <ControlButton 
          onClick={handleReset}
          disabled={elapsedTime === 0}
          color="slate"
          icon={<RotateCcw size={24} />}
          label="Reset"
        />
      </div>
      
      {laps.length > 0 && <LapList laps={laps} isDarkMode={isDarkMode} />}
    </div>
  );
};

export default Stopwatch