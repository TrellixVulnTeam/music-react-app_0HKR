import React from 'react'
import LibrarySong from './librarySong';

const Library = ({
        songs,
        isPlaying, 
        setSongs,
        libraryStatus,
        setCurrentSong,
        audioRef
    }) => {
    return (
        <div className = {
            `library ${libraryStatus ? "opened-library" : '' }`
        } >
            <div div className = {`songList ${libraryStatus ? "opened-library" : '' }`} >
                <h2 className="librarySongTitle">Library</h2>
                {songs.map(song =>
                    <LibrarySong
                     setCurrentSong = {setCurrentSong}
                    song = {song}
                    setSongs={setSongs}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    id={song.id}
                    key={song.id}
                    songs={
                        songs
                    }
                    />
                )}
            </div>
        </div>
    )
}
export default Library