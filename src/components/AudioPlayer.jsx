import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css'; // Importa o CSS separado

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = 0.5;

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handlePlayPauseClick = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} loop>
        <source src="src/components/musica.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button className="play-pause-button" onClick={handlePlayPauseClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;
