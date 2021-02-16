import React from 'react'

const Song = ({ currentSong, isPlaying}) => {

    return (
        <div className="song-wrapper">
            <img src={currentSong.cover} alt={currentSong.name} className={`musicCover ${isPlaying ? "animate" : "" }`}/>
            <h2 className="songName">{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song
