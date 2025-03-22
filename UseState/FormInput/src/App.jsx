import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
      <div className="form-wrapper">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        
        <p>Your Name is: {name}</p>
      </div>
    </>
  )
}

export default App
