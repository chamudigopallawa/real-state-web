import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='undeline underline-offset-4 decoration under font-light'>Our brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about properties, dedicate to your vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg' alt="" />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
              <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                  <p className='text-4xl font-medium text-gray-800'>10+</p>
                  <p>Years of excellence</p>
                </div>
                <div>
                  <p className='text-4xl font-medium text-gray-800'>12+</p>
                  <p>Completed projects</p>
                </div>
                <div>
                  <p className='text-4xl font-medium text-gray-800'>20+</p>
                  <p>Mn.Sq.Fe. delivered</p>
                </div>
                <div>
                  <p className='text-4xl font-medium text-gray-800'>25+</p>
                  <p>Ongoing projects</p>
                </div>
              </div>
              <p className='my-10 max-w-lg'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <button className='bg-purple-500 text-white rounded px-6 py-3'>Read more</button>
            </div>
        </div>
    </div>
  )
}

export default About