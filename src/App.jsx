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
      stat="120+"
      description="Social media marketing campaigns created and launched by Vierra. " 
      type="dark" 
      w={410}
      h={340}
      />
    </>
  )
}

export default App
