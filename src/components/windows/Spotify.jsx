import React from 'react'
import Macwindow from './Macwindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="spotify-content">
            <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/6YDfDHKKXCfxxPVZA7MkRO?utm_source=generator&theme=0&si=ec96fdc92867449b" width="100%" height="352" frameBorder="0" allowFullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </Macwindow>
  )
}

export default Spotify