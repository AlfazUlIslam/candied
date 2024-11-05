import { Navbar } from "./components"
import { Banner, AboutUs, OurMenu, Testimonials, ContactUs, GroupedImages } from "./sections"
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
      <GroupedImages />
    </div>
  )
}

export default App
