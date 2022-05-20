import './App.css'
import useWordGame from './hooks/wordGame'
import { useState } from 'react'

function App() {

  const [gameTime, setGameTime] = useState("")

  const {
    handleChange, 
    isTimeRunning, 
    timeRemaining, 
    text, 
    wordCount, 
    textBoxRef, 
    startGame
  } = useWordGame(gameTime)

  

  function handleGameTime(e) {
    const {value} = e.target
    setGameTime(value)
}
  
  return (
    <div>
      <br />
      <h1>How Fast Can You Type?</h1>

      <textarea
        ref={textBoxRef}
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
      />

      <h4>Time Remaining: {timeRemaining ? timeRemaining : <span className='set-time'>Set time Below</span>} </h4>

      <input 
        label='Game Time'
        placeholder='Set Game Time Here'
        value={gameTime}
        onChange={handleGameTime}
      />
      <button onClick={startGame} disabled={isTimeRunning}>
        {wordCount > 0 ? "Play Again" : "Start Game"}
      </button>

      {/* Add an input to change time to spend manually 

      */}

      {wordCount > 0 && <h1>Word count: {wordCount}</h1>}
      
    </div>
  )
}

export default App;
