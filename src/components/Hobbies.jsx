import React from 'react'
import Typed from 'react-typed';

const Hobbies = () => {
  return (
    <div className='text-white first-line:max-w-[800px] mt-[50px] h-screen mx-auto text-center flex flex-col justify-center'>
        <div className=''>
          <h1 className='text-4xl mt-[0px]'>This is what I like to do for</h1>
          <Typed className='text-4xl text-[#00df9a]' strings={['Fun', 'Enjoyment', 'Pleasure', 'other adj, I just wanted to use this effect.']} typeSpeed={30} backSpeed={30} loop/>
        </div>

        <div className='flex justify-center items-center'>
            <img src="./images/collage/basketball.jpeg" alt="" className='max-w-xs max-h-full rounded-full mx-[10px]'/>
            <div className='flex flex-col font-thin'>
              <h1>I am a big basketball fan. </h1>
              <h1>Particularly I like the Celtics</h1>
            </div>
            
        </div>
        <div className='flex justify-center items-center'>
            <img src="./images/collage/music.jpeg" alt="" className='max-w-xs max-h-full rounded-full mx-[10px]'/>
            <div className='flex flex-col font-thin'>
              <h1> I have been playing </h1>
              <h1> guitar and piano for many years. </h1>
            </div>
            
        </div>
        <div className='flex justify-center items-center'>
            <img src="./images/collage/netflix.jpeg" alt="" className='max-w-xs max-h-full rounded-full mx-[10px]'/>
            <div className='flex flex-col font-thin'>
              <h1>I love watching TV </h1>
              <h1>My favorite genre are crime shows. </h1>
            </div>
            
        </div>
    </div>
    
  )
}

export default Hobbies



