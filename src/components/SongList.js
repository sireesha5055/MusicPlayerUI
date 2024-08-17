import React from "react";
import SongCard from "./SongCard";

function SongList({ songs, onSongSelect }) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongCard key={song.id} song={song} onSelect={onSongSelect} />
      ))}
    </div>
  );
}

export default SongList;
