// hooks/useTimer.ts
import { useReducer, useEffect, useCallback } from 'react';
import { TimerState, TimerAction, INITIAL_TIMER_STATE } from '@/types';

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'START_TIMER':
      return { ...state, isRunning: true };
    
    case 'PAUSE_TIMER':
      return { ...state, isRunning: false };
    
    case 'RESET_TIMER':
      return {
        ...state,
        isRunning: false,
        timeLeft: 25 * 60,
        totalFocusedTime: 0,
      };
    
    case 'TICK':
      const newTimeLeft = Math.max(0, state.timeLeft - 1);
      const newTotalFocusedTime = state.totalFocusedTime + 1;
      
      return {
        ...state,
        timeLeft: newTimeLeft,
        totalFocusedTime: newTotalFocusedTime,
        isRunning: newTimeLeft > 0 ? state.isRunning : false,
      };
    
    case 'SET_TASK':
      return { ...state, currentTask: action.payload };
    
    case 'SET_TRACK':
      return { ...state, selectedTrack: action.payload };
    
    case 'LOAD_STATE':
      return { ...state, ...action.payload };
    
    default:
      return state;
  }
}

export function useTimer() {
  const [state, dispatch] = useReducer(timerReducer, INITIAL_TIMER_STATE);

  // Load state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('pomotune-state');
    if (saved) {
      try {
        const parsedState = JSON.parse(saved);
        dispatch({ type: 'LOAD_STATE', payload: parsedState });
      } catch (error) {
        console.error('Failed to load saved state:', error);
      }
    }
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('pomotune-state', JSON.stringify(state));
  }, [state]);

  // Timer tick effect
  useEffect(() => {
    if (state.isRunning && state.timeLeft > 0) {
      const interval = setInterval(() => {
        dispatch({ type: 'TICK' });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [state.isRunning, state.timeLeft]);

  const startTimer = useCallback(() => dispatch({ type: 'START_TIMER' }), []);
  const pauseTimer = useCallback(() => dispatch({ type: 'PAUSE_TIMER' }), []);
  const resetTimer = useCallback(() => dispatch({ type: 'RESET_TIMER' }), []);
  const setTask = useCallback((task: string | null) => 
    dispatch({ type: 'SET_TASK', payload: task }), []);
  const setTrack = useCallback((track: string | null) => 
    dispatch({ type: 'SET_TRACK', payload: track }), []);

  return {
    state,
    startTimer,
    pauseTimer,
    resetTimer,
    setTask,
    setTrack,
  };
}