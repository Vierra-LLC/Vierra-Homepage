import './App.css'
import NavBar from './components/navBar/NavBar'
import HeroOne from './components/heroOne/HeroOne'
import EfficiencyCard from './components/EfficiencyCard/EfficiencyCard'
import GraphCard from './components/GraphCard/GraphCard'
function App() {
  return (
    <>
      <NavBar />
      <HeroOne />
      {/* <DarkLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} />
      <LightLargeBtn text="Book a meeting" onClick={() => alert('Hello, world!')} /> */}
      <GraphCard title="Business Growth" w={687} h={283} />
    </>
  )
}

export default App
