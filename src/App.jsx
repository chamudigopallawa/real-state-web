import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testamonials from './components/Testamonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testamonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App