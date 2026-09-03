import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Portafolio from './components/portafolio/Portafolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Portafolio />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}
export default App
