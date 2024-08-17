import React from 'react';
import TabSwitcher from './TabSwitcher';
import SearchBar from './SearchBar';
import './Sidebar.css';

function Sidebar({ songs, onSongSelect, onSearch, currentTab, onTabSwitch }) {
  return (
    <div className="sidebar">
      <div className="tabs-container">
        <TabSwitcher currentTab={currentTab} onTabSwitch={onTabSwitch} />
      </div>
      <SearchBar onSearch={onSearch} />
      <div className="song-list">
        {songs.map(song => (
          <div 
            key={song.id} 
            className="song-item" 
            onClick={() => onSongSelect(song)}
          >
            <img src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.title} />
            <div className="song-details">
              <p>{song.name}</p>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
