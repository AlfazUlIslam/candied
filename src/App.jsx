import { Navbar } from "./components"
import { Banner, AboutUs, OurMenu, Testimonials } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurMenu />
      <Testimonials />
    </div>
  )
}

export default App
