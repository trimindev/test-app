// data/musicTracks.ts
import { MusicTrack } from '@/types';

export const musicTracks: MusicTrack[] = [
  {
    id: 'rain',
    title: 'Gentle Rain',
    src: 'https://www.soundjay.com/misc/sounds/rain-01.wav',
    type: 'audio',
  },
  {
    id: 'forest',
    title: 'Forest Ambience',
    src: 'https://www.soundjay.com/misc/sounds/forest-01.wav',
    type: 'audio',
  },
  {
    id: 'ocean',
    title: 'Ocean Waves',
    src: 'https://www.soundjay.com/misc/sounds/ocean-01.wav',
    type: 'audio',
  },
  {
    id: 'cafe',
    title: 'Coffee Shop',
    src: 'https://www.soundjay.com/misc/sounds/cafe-01.wav',
    type: 'audio',
  },
  {
    id: 'white-noise',
    title: 'White Noise',
    src: 'https://www.soundjay.com/misc/sounds/white-noise-01.wav',
    type: 'audio',
  },
];

export const getMusicTrackById = (id: string): MusicTrack | undefined => {
  return musicTracks.find(track => track.id === id);
};