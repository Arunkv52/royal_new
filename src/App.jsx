import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeadingText from './sections/HeadingText'
import About from './sections/About'
import Products from './sections/Products'
import Abtbanner from './sections/Abtbanner'
import Myaccordion from './components/Myaccordion'
import Colorbg from './components/Colorbg'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <Header />
      <HeadingText />
      <About />
      <Abtbanner />
      <Products />
      <Colorbg />
      <Myaccordion />
      <Contact />
      <Footer />
    </>
  )
}

export default App