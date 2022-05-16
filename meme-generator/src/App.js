
import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import './App.css'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }

  return (
    <div>
      <Header darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      />
      <Meme darkMode={darkMode}/>
    </div>
  )
}

export default App;

