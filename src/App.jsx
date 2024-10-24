import { Navbar } from "./components"
import { Banner, AboutUs, OurMenu } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurMenu />
    </div>
  )
}

export default App
