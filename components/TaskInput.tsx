// components/TaskInput.tsx
import { useState, useEffect } from 'react';

interface TaskInputProps {
  currentTask: string | null;
  onTaskChange: (task: string | null) => void;
  disabled?: boolean;
}

export function TaskInput({ currentTask, onTaskChange, disabled }: TaskInputProps) {
  const [value, setValue] = useState(currentTask || '');

  useEffect(() => {
    setValue(currentTask || '');
  }, [currentTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onTaskChange(value.trim() || null);
  };

  const handleBlur = () => {
    onTaskChange(value.trim() || null);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        placeholder="What are you working on? (optional)"
        disabled={disabled}
        className="w-full px-4 py-3 text-center text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none disabled:bg-gray-50 disabled:text-gray-500"
      />
    </form>
  );
}