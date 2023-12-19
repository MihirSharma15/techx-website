import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className = "max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
       
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Hi, I'm Mihir.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold'>I'm a</p>
            <Typed className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-[#DB5461]' strings={['Student.', 'Freshman.', 'Coder.', 'Musician.']} typeSpeed={100} backSpeed={120} loop/>
        </div>
        <p className='text-2xl text-gray-500'> Learn more about me below.</p>
        <a href="/about" class="block w-[200px] mx-auto bg-[#00df9a] rounded-md font-medium my-6 py-3 text-black text-center hover:scale-110 ease-in-out duration-300">Learn More
        </a>
        </div>
    </div>
  )
}

export default Hero