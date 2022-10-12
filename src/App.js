import React, { useRef, useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav"
import "./styles/app.scss";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  // refs
  const audioRef = useRef(null);
  return (
    <div className={`App ${libraryStatus ?'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songs={songs}
      />
      <Library libraryStatus={libraryStatus} songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} />
    </div>
  );
}

export default App;
