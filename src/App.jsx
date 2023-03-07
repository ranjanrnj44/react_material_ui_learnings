import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//component
import BoxComponent from './components/BoxComponent/BoxComponent'
//mui
import { Container } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BoxComponent />
    </>
  )
}

export default App
