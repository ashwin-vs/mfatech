import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Home/Home'
import Footer from './component/Footer'
import AboutUs from './Aboutus/AboutUs'
import ServicesPage from './Servicespage'
import ContactUs from './Contactus'
import ScrollToTop from './ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} />

        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
