import React, { ReactNode } from 'react';

interface ControlButtonProps {
  onClick: () => void;
  disabled?: boolean;
  color: 'green' | 'red' | 'blue' | 'slate';
  icon: ReactNode;
  label: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  onClick,
  disabled = false,
  color,
  icon,
  label
}) => {
  const colorClasses = {
    green: 'bg-green-500 hover:bg-green-600 text-white',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    slate: 'bg-slate-700 hover:bg-slate-800 text-white'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex flex-col items-center justify-center p-3 rounded-full
        ${colorClasses[color]}
        transition-all duration-200 transform hover:scale-105
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color === 'slate' ? 'slate-500' : `${color}-500`}
      `}
      aria-label={label}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </button>
  );
};

export default ControlButton;