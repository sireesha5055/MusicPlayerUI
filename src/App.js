import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import MainView from './components/MainView';
import Controls from './components/Controls';
import LoadingSpinner from './components/LoadingSpinner';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('For You');
  const [currentSong, setCurrentSong] = useState(null);
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true); // Manage visibility of sidebar

  useEffect(() => {
    fetch('https://cms.samespace.com/items/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching songs:', error);
        setLoading(false);
      });
  }, []);

  const handleTabSwitch = (tab) => setCurrentTab(tab);

  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setPlaying(true);
  };

  const handlePlayPause = () => setPlaying(!playing);

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchQuery) ||
    song.artist.toLowerCase().includes(searchQuery)
  );

  const toggleSidebar = () => setShowSidebar(prev => !prev);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app-container">
      {showSidebar && (
        <Sidebar
          songs={filteredSongs}
          onSongSelect={handleSongSelect}
          onSearch={handleSearch}
          currentTab={currentTab}
          onTabSwitch={handleTabSwitch}
        />
      )}
      <div className="main-content">
        <button className="menu-button" onClick={toggleSidebar}>
          {showSidebar ? 'Hide Songs' : 'Show Songs'}
        </button>

        <MainView song={currentSong} />
        <Controls
          playing={playing}
          onPlayPause={handlePlayPause}
          onNext={handleNext}
          onPrevious={handlePrevious}
          currentSong={currentSong}
        />
      </div>
    </div>
  );
}

export default App;
