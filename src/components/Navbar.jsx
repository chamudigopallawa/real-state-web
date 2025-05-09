import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [showMobileMenu,setMobileMenu] = useState(false)

    useEffect(() =>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden'
        }else{
            document.body.style.overflow = 'auto'
        }
        return () =>{
            document.body.style.overflow = 'auto'
        }
    },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent lin'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Header" className=' hover:text-gray-400 text-decoration-none'>Home</a>
                <a href="#About" className=' hover:text-gray-400 text-decoration-none'>About</a>
                <a href="#Projects" className=' hover:text-gray-400 text-decoration-none'>Project</a>
                <a href="#Testamonials" className=' hover:text-gray-400 text-decoration-none'>Testamonial</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign in</button>
            <img onClick={() => setMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7' alt="" />
        </div>
        {/*--------------mobile menu------------------*/}
        <div className={`md:hidden top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${showMobileMenu?'fixed w-full':'h-0 w-0'}`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img onClick={() => setMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#Header" className='px-4 py-2 inline-block rounded-full'>Home</a>
                <a href="#About" className='px-4 py-2 inline-block rounded-full'>About</a>
                <a href="#Project" className='px-4 py-2 inline-block rounded-full'>Project</a>
                <a href="#Testamoni" className='px-4 py-2 inline-block rounded-full'>Testamonial</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar





