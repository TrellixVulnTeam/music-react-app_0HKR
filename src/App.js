import React, {
  useState,
  useRef
} from 'react';
import Player from "./components/player";
import Music from "./components/song";
import Library from "./components/library";
import Nav from "./components/nav";
import data from './utils'
import "./style/app.scss";

function App() {

  const [ songs , setSongs ] = useState(data())
  const [ currentSong , setCurrentSong ] = useState(songs[2])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
      const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
      })
          const songInfoHandler = (e) => {
            const current = e.target.currentTime
            const duration = e.target.duration
            setSongInfo({
              ...songInfo,
              currentTime: current,
              duration
            })
          }

    const audioRef = useRef(null)

  return (
    <div className="App">
        <Nav setLibraryStatus = {
          setLibraryStatus
        }
        libraryStatus = {
          libraryStatus
        }
        currentSong = {
          currentSong
        }
        />
        <Music currentSong={currentSong}     
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying}/>
        <Player
        audioRef={audioRef}
         currentSong = {currentSong}
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        />
        <Library songs = {songs}
        setSongs={setSongs}
        isPlaying={isPlaying}
        libraryStatus = {
          libraryStatus
        }
        audioRef={audioRef}
        setCurrentSong = {setCurrentSong}
        />
            <audio 
                onTimeUpdate={songInfoHandler}
                onLoadedMetadata={songInfoHandler}
                src={currentSong.audio} 
                ref={audioRef}>
            </audio>
    </div>
  );
}
export default App;