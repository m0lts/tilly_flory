import React from 'react'
import TopBanner from './components/topBanner';
import Navbar from './components/navbar';
import About from './pages/about';
import Gallery from './pages/gallery.jsx'
import Press from './pages/press.jsx'
import Shop from './pages/shop.jsx'
import Contact from './pages/contact.jsx'
import TightlySoftly from './piece_pages/tightly-softly.jsx'
import BonesOfMine from './piece_pages/bones-of-mine.jsx'
import FoldsOfGrief from './piece_pages/folds-of-grief.jsx'
import HeavyIsTheHead from './piece_pages/heavy-is-the-head.jsx'
import HornsOfMine from './piece_pages/horns-of-mine.jsx'
import IOSYNWID_S2 from './piece_pages/iosynwid-s2.jsx'
import IOSYNWID_S1 from './piece_pages/iosynwid-s1.jsx'
import IOSYNWID_S3 from './piece_pages/iosynwid-s3.jsx'
import IOSYNWID_S4 from './piece_pages/iosynwid-s4.jsx'
import TheCloakBetween from './piece_pages/the-cloak-between.jsx'
import MyDreams from './piece_pages/my-dreams';
import Stable from './piece_pages/stable';
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
          <Route path="/tightly-softly" element={<TightlySoftly />} />
          <Route path="/bones-of-mine" element={<BonesOfMine />} />
          <Route path="/folds-of-grief" element={<FoldsOfGrief />} />
          <Route path="/heavy-is-the-head" element={<HeavyIsTheHead />} />
          <Route path="/horns-of-mine" element={<HornsOfMine />} />
          <Route path="/i-only-see-you-now-when-i-dream-series-1" element={<IOSYNWID_S1 />} />
          <Route path="/i-only-see-you-now-when-i-dream-series-2" element={<IOSYNWID_S2 />} />
          <Route path="/i-only-see-you-now-when-i-dream-series-3" element={<IOSYNWID_S3 />} />
          <Route path="/i-only-see-you-now-when-i-dream-series-4" element={<IOSYNWID_S4 />} />
          <Route path="/the-cloak-between" element={<TheCloakBetween />} />
          <Route path="/my-dreams" element={<MyDreams />} />
          <Route path="/stable" element={<Stable />} />
        </Routes>
      </main>
    </>
  )
}

export default App
