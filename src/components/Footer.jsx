import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px=4 md:px-20 lg:px=32 bg-gray-900 overflow-hidden w-full'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#About" className='hover:text-white'>About</a>
                    <a href="#Projects" className='hover:text-white'>Projects</a>
                    <a href="#Testamoni" className='hover:text-white'>Testamonials</a>
                    <a href="#Contact" className='hover:text-white'>Contact</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our news letter</h3>
                <p className='text-gray-400 mb-4 mx-w-880'>fvfevrb frtbtrbt rgbtrbrtwvfl btwlgwlr,bt tgtwgfgrgthe wfrg4tgt5hy6jfs wdfr4gtgbnukuil erfecwdxwwefrf</p>
            </div>
        </div>
    </div>
  )
}

export default Footer