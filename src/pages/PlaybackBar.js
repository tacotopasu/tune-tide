import React from 'react';

function PlaybackBar({currentSong, isPlaying, volume, onPlay, onPause, onNext, onPrev, onVolumeChange}) {
  return (
    <div class="fixed inset-x-0 bottom-0 bg-black text-white flex items-center justify-between p-4">
      <div class="flex items-center">
        <button class="mr-4 text-blue-900" onClick={onPrev}>Prev</button>
        <button class="mr-4 text-blue-500" onClick={isPlaying ? onPause : onPlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button class="mr-4 text-blue-900" onClick={onNext}>Next</button>
      </div>
      <div>
        <span class="mr-4">{currentSong?.title}</span>
        <span class="mr-4">{currentSong?.artist}</span>
      </div>
      <div>
        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={e => onVolumeChange(e.target.value)}/>
      </div>
    </div>
  );
}

export default PlaybackBar;