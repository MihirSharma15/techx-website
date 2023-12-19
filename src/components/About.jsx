import React, {useState} from 'react'

const About = () => {
  const [favClass, showClass] = useState(true)
  const handleClass = () => {
    showClass(!favClass)
  }
  return (
    // Hi! I'm Mihir Header
    <div className='first-line:max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        
        <div className='h-32 w-32 mx-auto rounded-full object-cover object-center shadow-md overflow-hidden hover:scale-90 ease-in-out duration-100'>
            <img src="./images/AboutImage.jpg" alt="Mihir Sharma" className='scale-150 rounded-full w-full h-auto w-auto'/>
        </div>
        
        
        <div className='text-white flex flex-row justify-center'>
            <h1 className='text-4xl font-bold px-2 transition-all'>Hi! I'm</h1>
            <h1 className='text-4xl font-bold text-[#00CB8C] hover:text-[#DB5461] hover:scale-110 hover:ml-2 ease-in-out duration-150 transition-all'>Mihir Sharma</h1>
        </div>
        
        
        <p className='text-white'>
            I'm a freshman at UNC Chapel Hill Studying Computer Science and Math. 
        </p>
        <button class="block w-[200px] mx-auto bg-[#DB5461] rounded-md font-medium my-6 py-3 text-black text-center hover:scale-110 ease-in-out duration-300" onClick={handleClass}>My Favorite Classes ⬇️</button>
        <div className={!favClass ? 'text-white ease-in-out duration-300' : 'text-black mt-[px] ease-in-out duration-300'}>
          <h1>My Favorite Class is Hindi Urdu 101</h1>

        </div>

        
    </div>

  )
}

export default About