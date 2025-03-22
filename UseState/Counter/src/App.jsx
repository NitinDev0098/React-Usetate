import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const removeCounter = () => {
    setCount((prevCount) => {
      if(prevCount <= 0){
        alert("Count will not go below zero...");
        return prevCount;
      }
      else{
        return prevCount - 1;
      }
    })
  }

  return (
    <>
      <div className="counter-Wrapper">
        <div className="counter-text">
          <h1>{count}</h1>
        </div>

        <div className="counter-btn--wrapper">
          <div className="counter-increment">
            <button onClick={addCounter}>Add Counter</button>
          </div>
          <div className="counter-decrement">
             <button onClick={removeCounter}>Decrement Counter</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
