import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount(prevState => prevState + 1)}></button>
      <h1>{count}</h1>
    </>
  )
}

export default App
