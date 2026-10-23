import React, { useState } from 'react'
import "./App.scss"
import Dock from './components/dock'
import Nav from './components/Nav'

import Github from './components/windows/Github'
import Notes from "./components/windows/Notes";
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'

const App = () => {

   const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState}  />

     { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Notes windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
     { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App