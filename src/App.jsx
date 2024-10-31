import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'


const App = () => {
  
  return (
    <div className='min-h-screen w-full flex flex-col justify-between'>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default App