import React from 'react'
import '../style/_library.scss'
const LibrarySong = ({isPlaying, song, songs, setCurrentSong, setSongs, audioRef, id}) => {
    const SelectSongHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return{
                    ...song,
                    active:true
                }
            } else {
                return{
                    ...songs,
                    active: false
                }
            }
        })
        setCurrentSong(selectedSong[0])
        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play()
                })
            }
        }
        audioRef.current.play()
    }
    return (
            <div onClick={SelectSongHandler} className={`song-holder ${song.active ? 'selected' : ''}`}>
                <img src={song.cover} alt={song.name} className="library-img" />
                <div className="song-info">
                    <h3 className="songName" > {song.name} </h3>
                    <h4>{song.artist}</h4>
                </div>
            </div>
    )
}

export default LibrarySong
