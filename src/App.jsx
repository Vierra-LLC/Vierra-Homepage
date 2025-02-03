import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkLargeBtn from './components/dark-large-btn/DarkLargeBtn'

function App() {
  return (
    <>
      <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
    </>
  )
}

export default App
