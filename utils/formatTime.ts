// utils/formatTime.ts
export function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
  
  export function formatMinutes(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    return `${minutes}m`;
  }