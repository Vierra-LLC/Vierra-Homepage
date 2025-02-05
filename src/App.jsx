import './App.css'
import NavBar from './components/navBar/NavBar'
import HeroOne from './components/heroOne/HeroOne'
import EfficiencyCard from './components/efficiencyCard/EfficiencyCard'
function App() {
  return (
    <>
      <NavBar />
      <HeroOne />
      {/* <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
      <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} /> */}
      <EfficiencyCard 
      stat="150%"
      description="Average of increase in profit for our partners" 
      type="purple" 
      w={350}
      h={230}
      />
    </>
  )
}

export default App
