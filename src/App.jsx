import { Navbar } from "./components"
import { Banner, AboutUs } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <AboutUs />
    </div>
  )
}

export default App
