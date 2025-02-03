import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkLargeBtn from './components/darkLargeBtn/DarkLargeBtn'
import LightLargeBtn from './components/lightLargeBtn/LightLargeBtn'

function App() {
  return (
    <>
      <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
      <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
    </>
  )
}

export default App
