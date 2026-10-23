import React from 'react'
import "./Macwindow.scss"
import { Rnd } from 'react-rnd'

const Macwindow = ({ children, width = "40vw", height = "50vh", windowName, setWindowsState }) => {
  return (
    <Rnd
      default={{
                width: width,
                height: height,
                x: 300,
                y: 200
            }}
            >
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>
                <div className="left"><p>harshwardhanbhosale - zsh</p></div>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    </Rnd>
  )
}

export default Macwindow