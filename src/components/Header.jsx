import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/src/assets/header_img.png')"}} id='Header'>
      <Navbar />
      <motion.div initial={{opacity: 0, y: 100}} transition={{duration: 1.5}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} className='container text-center mx-auto px-6 py-4 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl text-semibold inline-block max-w-3xl pt-20'>Explore homes that fits your dreams</h2>
        <div className='space-x-6 mt-10'>
          <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
          <a href="#Contact" className='bg-purple-500 px-8 py-3 rounded'>Contact us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header