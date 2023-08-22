import React from 'react'
import TopBanner from './components/topBanner';
import Navbar from './components/navbar';
import About from './pages/about';
import Gallery from './pages/gallery.jsx'
import Press from './pages/press.jsx'
import Shop from './pages/shop.jsx'
import Contact from './pages/contact.jsx'
import logo from '../public/logos/TILLY FLORY.svg'
import '../src/assets/global.css'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <header>
        <TopBanner />
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/press" element={<Press />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
