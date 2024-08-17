// src/components/MainView.js
import React, { useEffect } from 'react';
import './MainView.css';

function MainView({ song }) {
  useEffect(() => {
    if (song) {
      document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(https://cms.samespace.com/assets/${song.cover})`;
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }, [song]);

  if (!song) return <div className="main-view">Select a song to play</div>;

  return (
    <div className="main-view">
      <img
        src={`https://cms.samespace.com/assets/${song.cover}`}
        alt={song.title}
        className="cover-image"
      />
      <h2>{song.name}</h2>
      <p>{song.artist}</p>
    </div>
  );
}

export default MainView;
