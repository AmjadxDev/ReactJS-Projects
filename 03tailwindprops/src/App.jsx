import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello</h1>
    <Card userName='Muhammad' btnText="Visit Here!"/>
    <Card />
    </>
  )
}

export default App
