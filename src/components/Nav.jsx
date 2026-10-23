import React from 'react'
import "./Nav.scss"
import Datetime from './Datetime'

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <div className="nav-icon">
                <img src="./nav-icons/apple.svg" alt="" />
            </div>
            <div className="nav-items">
                <p>Harshwardhan Bhosale</p>
            </div>
            <div className="nav-items">
                <p>File</p>
            </div>
            <div className="nav-items">
                <p>Window</p>
            </div>
            <div className="nav-items">
                <p>Terminal</p>
            </div>
        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="./nav-icons/wifi.svg" alt="" />
            </div>
            <div className="nav-items">
                <Datetime />
            </div>
        </div>
        
    </nav>
  )
}

export default Nav