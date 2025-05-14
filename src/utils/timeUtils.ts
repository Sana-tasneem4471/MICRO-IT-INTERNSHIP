/**
 * Format a Date object into a readable date string
 */
export const formatTime = (date: Date, options?: Intl.DateTimeFormatOptions): string => {
  return new Intl.DateTimeFormat('en-US', options).format(date);
};

/**
 * Format milliseconds into a stopwatch time string (MM:SS.ms)
 */
export const formatStopwatchTime = (timeInMs: number): string => {
  const totalSeconds = Math.floor(timeInMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor((timeInMs % 1000) / 10);

  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
};