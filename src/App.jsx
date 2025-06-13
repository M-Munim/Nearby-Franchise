import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Franchise from './pages/Franchise'
import HowItWorks from './pages/HowItWorks'
import Technology from './pages/Technology'
import MerchantBanking from './pages/MerchantBanking'
import Faq from './pages/Faq'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/franchise-opportunity" element={<Franchise />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/merchant-banking" element={<MerchantBanking />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App