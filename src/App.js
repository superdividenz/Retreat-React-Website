import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Retreats from './components/Retreats'
import Picnic from './components/Picnic'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Drawer from './components/Drawer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Retreats />
      <Picnic />
      <Contact />
      <Drawer />
      <Footer />
    </div>
  );
}

export default App;
