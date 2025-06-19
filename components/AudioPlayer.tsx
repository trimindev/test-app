// components/AudioPlayer.tsx
import { useEffect, useRef } from 'react';
import { getMusicTrackById } from '@/data/musicTracks';

interface AudioPlayerProps {
  trackId: string | null;
  isPlaying: boolean;
}

export function AudioPlayer({ trackId, isPlaying }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying && trackId) {
      const track = getMusicTrackById(trackId);
      if (track) {
        audio.src = track.src;
        audio.loop = true;
        audio.volume = 0.3; // Set to 30% volume
        audio.play().catch(error => {
          console.warn('Audio autoplay blocked:', error);
        });
      }
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [trackId, isPlaying]);

  // Change track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (trackId) {
      const track = getMusicTrackById(trackId);
      if (track && audio.src !== track.src) {
        audio.src = track.src;
        audio.loop = true;
        audio.volume = 0.3;
        
        if (isPlaying) {
          audio.play().catch(error => {
            console.warn('Audio play failed:', error);
          });
        }
      }
    } else {
      audio.pause();
      audio.src = '';
    }
  }, [trackId, isPlaying]);

  return <audio ref={audioRef} preload="none" />;
}