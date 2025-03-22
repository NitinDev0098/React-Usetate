import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import dark from '/dark.png'
import light from '/light.png'
import './App.css'

function App() {
  const [mode, setMode] = useState(false)

  const modeToggle = () => {
    setMode((prevMode) => !prevMode );
  }

  return (
    <>
      <div className={`page ${mode ? 'dark' : 'light'}`}>
        <div className="navigation">
          <div className="site-logo">
            <img src={viteLogo} alt="vite logo" />
          </div>
          <div className="mode">
            <button onClick={modeToggle}>
              <img src={mode ? dark : light} alt="mode icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
