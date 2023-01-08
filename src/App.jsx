import { useState } from 'react'
import Header from "./Header"
import Meme from "./Meme"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App
