import { useState } from 'react'
import type { TrackItem } from '@/types/AlbumTracks'

interface UsePlayerSpinnerProps {
  trackCount: number
  trackList: Array<TrackItem>
}

export default function usePlayerSpinner(props: UsePlayerSpinnerProps) {
  const { trackCount, trackList } = props
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const currentTrack = trackList[currentTrackIndex].name

  const handleTrackBack = () => {
    if (trackCount === 0) return
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === 0 ? trackCount - 1 : prevIndex - 1,
    )
  }

  const handleTrackForward = () => {
    if (trackCount === 0) return
    setCurrentTrackIndex((prevIndex) =>
      prevIndex === trackCount - 1 ? 0 : prevIndex + 1,
    )
  }

  return {
    currentTrackIndex,
    handleTrackBack,
    handleTrackForward,
    currentTrack,
  }
}
