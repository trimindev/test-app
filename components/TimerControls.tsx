// components/TimerControls.tsx
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  timeLeft: number;
}

export function TimerControls({ 
  isRunning, 
  onStart, 
  onPause, 
  onReset, 
  timeLeft 
}: TimerControlsProps) {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Button
        onClick={isRunning ? onPause : onStart}
        size="lg"
        className="px-8 py-6 text-lg"
        disabled={timeLeft === 0}
      >
        {isRunning ? (
          <>
            <Pause className="w-5 h-5 mr-2" />
            Pause
          </>
        ) : (
          <>
            <Play className="w-5 h-5 mr-2" />
            Start
          </>
        )}
      </Button>
      
      <Button
        onClick={onReset}
        variant="outline"
        size="lg"
        className="p-6"
      >
        <RotateCcw className="w-5 h-5" />
      </Button>
    </div>
  );
}