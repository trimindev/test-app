// components/SessionStats.tsx
import { formatMinutes } from '@/utils/formatTime';
import { Clock } from 'lucide-react';

interface SessionStatsProps {
  totalFocusedTime: number;
  currentTask: string | null;
}

export function SessionStats({ totalFocusedTime, currentTask }: SessionStatsProps) {
  if (totalFocusedTime === 0) return null;

  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
        <Clock className="w-4 h-4 text-green-600" />
        <span className="text-sm font-medium text-green-700">
          Focused for {formatMinutes(totalFocusedTime)}
        </span>
      </div>
      
      {currentTask && (
        <div className="mt-2 text-sm text-gray-600">
          Working on: <span className="font-medium">{currentTask}</span>
        </div>
      )}
    </div>
  );
}