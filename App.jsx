import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter/>
    </div>
  )
}

export default App
