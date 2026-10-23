import React from 'react'
import "./dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {
    return (
        <footer className='dock' >
            <div
                onClick={() => { setWindowsState(state => ({ ...state, github: true })) }}
                className="icon github"><img src="/doc-icons/github.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, note: true })) }}
                className="icon note"><img src="/doc-icons/note.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, resume: true })) }}
                className="icon pdf"><img src="/doc-icons/pdf.svg" alt="" /></div>
            <div
                onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
            
             className="icon calender"><img src="/doc-icons/calender.svg" alt="" /></div>
            <div
                onClick={() => { setWindowsState(state => ({ ...state, spotify: true })) }}
                className="icon spotify"><img src="/doc-icons/spotify.svg" alt="" /></div>
            <div
            onClick={()=>{window.open("mailto:harshwardhanbhosale2307@gmail.com","_blank")}}
             className="icon mail"><img src="/doc-icons/mail.svg" alt="" /></div>
            <div 
            onClick={()=>{window.open("https://www.linkedin.com/in/harshwardhan-bhosale-785236301/","_blank")}}
            
            className="icon link"><img src="/doc-icons/link.svg" alt="" /></div>
        </footer>
    )
}

export default Dock