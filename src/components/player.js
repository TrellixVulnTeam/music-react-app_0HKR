import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
     faPlay,
     faPause,
     faAngleDoubleLeft,
    faAngleDoubleRight,
 } from '@fortawesome/free-solid-svg-icons'
const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo}) => {


 
    const playMediaHandler = () => {
     if(isPlaying){
         audioRef.current.pause();
         setIsPlaying(!isPlaying);
     }   else {
         audioRef.current.play();
         setIsPlaying(!isPlaying);
     }
    }

    const setInputValue = (time) => {
        return(
            Math.floor(time / 60) + ":" + ( "0" + Math.floor(time % 60) ).slice(-2)
        )
    }

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({ ...songInfo, currentTime:  e.target.value })

        
    }
    return (
        <div className="player-container">
            <div className="time-control">
                <span className="start-time">{setInputValue(songInfo.currentTime)}</span>
                <input type="range" name="" id="song-length" min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler}/>
                <span className="end-time">{setInputValue(songInfo.duration)}</span>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                size="2x"
                 className="skipBack"
                  icon={faAngleDoubleLeft}
                  />
                <FontAwesomeIcon 
                size="2x"
                 className="play"
                    icon={isPlaying ? faPause  :  faPlay}
                    onClick={playMediaHandler}
                  />
                <FontAwesomeIcon 
                size="2x"
                 className="skipForward"
                  icon={faAngleDoubleRight}
                  />
            </div>
        </div>
    )
}

export default Player 
