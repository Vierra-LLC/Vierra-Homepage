import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkLargeBtn from './components/darkLargeBtn/DarkLargeBtn'
import LightLargeBtn from './components/lightLargeBtn/LightLargeBtn'
import NavBar from './components/navBar/NavBar'
import HeroOne from './components/heroOne/HeroOne'
function App() {
  return (
    <>
      <NavBar />
      <HeroOne />
      {/* <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
      <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} /> */}
    </>
  )
}

export default App
