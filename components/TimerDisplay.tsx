// components/TimerDisplay.tsx
import { formatTime } from '@/utils/formatTime';

interface TimerDisplayProps {
  timeLeft: number;
  isRunning: boolean;
}

export function TimerDisplay({ timeLeft, isRunning }: TimerDisplayProps) {
  return (
    <div className="text-center">
      <div className="text-8xl md:text-9xl font-mono font-light text-gray-800 mb-4">
        {formatTime(timeLeft)}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">
        {isRunning ? 'Focus Time' : 'Paused'}
      </div>
    </div>
  );
}