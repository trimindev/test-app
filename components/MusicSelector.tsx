// components/MusicSelector.tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { musicTracks } from '@/data/musicTracks';
import { Music } from 'lucide-react';

interface MusicSelectorProps {
  selectedTrack: string | null;
  onTrackChange: (trackId: string | null) => void;
}

export function MusicSelector({ selectedTrack, onTrackChange }: MusicSelectorProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <Music className="w-4 h-4 text-gray-600" />
        <span className="text-sm text-gray-600 font-medium">Background Audio</span>
      </div>
      
      <Select value={selectedTrack || ''} onValueChange={(value) => onTrackChange(value || null)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose ambient sounds (optional)" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">No audio</SelectItem>
          {musicTracks.map((track) => (
            <SelectItem key={track.id} value={track.id}>
              {track.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}