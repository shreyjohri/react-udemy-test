import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Let's learn React and Javascript</h1>
      <p>Now we've deployed this app on Vercel and it's running</p>
    </>
  )
}

export default App
