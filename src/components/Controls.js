// src/components/Controls.js
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import './Controls.css';

function Controls({ playing, onPlayPause, onPrevious, onNext, currentSong }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.play().catch(error => console.error('Error playing audio:', error));
      } else {
        audioRef.current.pause();
      }

      const updateTime = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
      };

      audioRef.current.addEventListener('timeupdate', updateTime);

      return () => {
        audioRef.current.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [playing, currentSong]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong?.url || '';
    }
  }, [currentSong]);

  const handleSeek = (e) => {
    const newTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="controls">
      <div className="progress-bar" onClick={handleSeek}>
        <div
          className="progress"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <div className="controls-buttons">
        <button onClick={onPrevious} aria-label="Previous">
          <FontAwesomeIcon icon={faStepBackward} />
        </button>
        <button onClick={onPlayPause} aria-label={playing ? 'Pause' : 'Play'}>
          <FontAwesomeIcon icon={playing ? faPause : faPlay} />
        </button>
        <button onClick={onNext} aria-label="Next">
          <FontAwesomeIcon icon={faStepForward} />
        </button>
      </div>
      <audio
        ref={audioRef}
        autoPlay={playing}
        key={currentSong?.id} // Ensures the audio element re-renders on song change
        onError={() => {
          console.error('Failed to load audio source');
        }}
      >
        <source
          src={currentSong?.url}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Controls;
