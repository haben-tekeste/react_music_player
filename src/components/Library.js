import React from 'react';
import LibrarySong from './LibrarySong';
import Songs from './Song';

const Library = ({libraryStatus,currentSong, songs,setCurrentSong, audioRef, isPlaying}) => {
    return(
        <div className={`library ${libraryStatus ? 'active':''}`}>
            <h1>Library</h1>
            <div className="library-container">
                {songs.map(song => <LibrarySong currentSong={currentSong} song={song} key={song.id} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying}/>)}
            </div>
        </div>
    )
}

export default Library;