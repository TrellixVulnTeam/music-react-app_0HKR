import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'
const Nav = ({
        libraryStatus,
        setLibraryStatus,
        currentSong
    }) => {
    return (
        <nav className="nav">
            <h1 className="title">{currentSong.name}</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)} className="library-toggler">
                Library
                <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
        )
}
export default Nav