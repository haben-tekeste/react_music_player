import React from 'react'
const LibrarySong = ({currentSong,song,setCurrentSong, audioRef,isPlaying}) => {
    // event handlers
    const selectedSongHandler = async () => {
       await setCurrentSong(song);
       if (isPlaying) audioRef.current.play();
    }

    return (
        <div className={`library-song ${currentSong === song ? 'selected' : ''}`} onClick={selectedSongHandler}>
            <img src={song.cover} alt="" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;