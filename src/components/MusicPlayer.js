import React, { useState, useEffect } from 'react';
import ReactHowler from 'react-howler';
import PlaybackBar from '../pages/PlaybackBar';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


function MusicPlayer() {

  let player = null;

  const playingButton = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  const next = () => {
    const autoPlay = isPlaying;
    if(isPlaying){ setIsPlaying(false); }
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextSongIndex);
    setCurrentSong(songs[nextSongIndex]);
    setIsPlaying(autoPlay);
  };

  const prev = () => {
    const autoPlay = isPlaying;
    if(isPlaying){ setIsPlaying(false); }
    const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevSongIndex);
    setCurrentSong(songs[prevSongIndex]);
    setIsPlaying(autoPlay);
  };
  
  const changeVolume = (newVolume) => setVolume(newVolume);

  const songs = [
    {
      artist: 'SEGA Sound Team',
      title: 'Cool Edge',
      file: require('../assets/songs/cool_edge.mp3'),
    },
    {
      artist: 'El Huervo',
      title: 'Daisuke',
      file: require('../assets/songs/daisuke.mp3'),
    },
    {
      artist: 'SEGA Sound Team',
      title: 'Money Makes Money',
      file: require('../assets/songs/money_makes_money.mp3'),
    },
    {
      artist: 'Seven Goblins',
      title: 'Masayoshi Takanaka',
      file: require('../assets/songs/seven_goblins.mp3'),
    },
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[currentSongIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  return (
    <div>
      <ReactHowler src={currentSong.file} playing={isPlaying} volume={volume} ref={(ref) => (player = ref)} />
      <PlaybackBar
      currentSong={currentSong}
      isPlaying={isPlaying}
      volume={volume}
      onPlay={playingButton}
      onPause={playingButton}
      onNext={next}
      onPrev={prev}
      onVolumeChange={changeVolume}
      />
    </div>
  );
}

export default MusicPlayer;