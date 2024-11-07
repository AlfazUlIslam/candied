import { Navbar } from "./components"
import { Banner, AboutUs, OurMenu, Testimonials, ContactUs, GroupedImages, Footer } from "./sections"
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
      <Footer />
    </div>
  )
}

export default App
