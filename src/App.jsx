import { useState } from 'react'
import Navbar from './components/Navbar'
import Balance from './components/Balance'
import Shop from './components/Shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar />    
       <Balance />
       <Shop />
    </>
  )
}

export default App
