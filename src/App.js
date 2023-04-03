import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Home/Hero'
import About from './components/Home/About'
import Retreats from './components/Home/Retreats'
import Picnic from './components/Home/Picnic'
import Contact from './components/Home/Contact'
import Footer from './components/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Retreats />
      <Picnic />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
