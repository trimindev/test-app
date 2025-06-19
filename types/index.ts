// types/index.ts
export interface TaskSession {
    id: string;
    name: string | null;
    focusedMinutes: number;
    createdAt: number;
  }
  
  export interface MusicTrack {
    id: string;
    title: string;
    src: string;
    type: 'audio';
  }
  
  export interface TimerState {
    isRunning: boolean;
    timeLeft: number; // in seconds
    totalFocusedTime: number; // in seconds
    currentTask: string | null;
    selectedTrack: string | null;
  }
  
  export type TimerAction = 
    | { type: 'START_TIMER' }
    | { type: 'PAUSE_TIMER' }
    | { type: 'RESET_TIMER' }
    | { type: 'TICK' }
    | { type: 'SET_TASK'; payload: string | null }
    | { type: 'SET_TRACK'; payload: string | null }
    | { type: 'LOAD_STATE'; payload: Partial<TimerState> };
  
  export const INITIAL_TIMER_STATE: TimerState = {
    isRunning: false,
    timeLeft: 25 * 60, // 25 minutes in seconds
    totalFocusedTime: 0,
    currentTask: null,
    selectedTrack: null,
  };