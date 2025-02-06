import './App.css'
import NavBar from './components/navBar/NavBar'
import HeroOne from './components/heroOne/HeroOne'
import BenefitSelection from './components/BenefitSelection/BenefitSelection'
function App() {
  return (
    <>
      <NavBar />
      <HeroOne />
      {/* <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
      <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} /> */}
      <BenefitSelection />
    </>
  )
}

export default App
