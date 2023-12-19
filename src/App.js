import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Hobbies from './components/Hobbies';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hobbies' element={<Hobbies/>}/>
      </Routes>

    </>
  )
}

export default App;
