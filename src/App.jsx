import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeadingText from './sections/HeadingText'
import About from './sections/About'

const App = () => {
  return (
    <>
      <Header />
      <HeadingText />
      <About />
      <Footer />
    </>
  )
}

export default App