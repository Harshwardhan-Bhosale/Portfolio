
import React, { useState, useEffect } from 'react'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Macwindow from './Macwindow';
import "./note.scss"


const Notes = ({ windowName, setWindowsState }) => {

    const [ markdown, setMarkdown ] = useState(null)

    useEffect(() => {
        fetch("/notes.txt")
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, [])

  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
        <div className="note-window">
                { markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark} >{markdown}</SyntaxHighlighter> : <p>Loading...</p> }
            </div>
    </Macwindow>
  )
}

export default Notes

