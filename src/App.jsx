import { Navbar } from "./components"
import { Banner, AboutUs, OurMenu, Testimonials, ContactUs } from "./sections"
import './App.css'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurMenu />
      <Testimonials />
      <ContactUs />
    </div>
  )
}

export default App
