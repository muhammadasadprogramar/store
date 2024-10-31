import React, { useState } from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import Search from './Search'
import { Data } from '../context/DataProvider'

const Navbar = () => {
  const {searchIcon, setSearchIcon, cards} = Data()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    {searchIcon && <Search setSearchIcon={setSearchIcon}></Search>}
    <nav className="bg-gray-800 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-2xl transition duration-300 hover:text-gray-300">
              Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
              Home
            </NavLink>
            <NavLink to="/products" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
              Products
            </NavLink>
            <NavLink to="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
              About
            </NavLink>
            <NavLink to="/blog" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
              Blog
            </NavLink>
            <NavLink to="/contact" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition duration-300">
              Contact
            </NavLink>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            
            <button onClick={() => setSearchIcon(true)} className="text-gray-300 hover:text-white p-2 transition duration-300">
              <FaSearch className="h-5 w-5" />
            </button>
         
         <div className='relative'>
            <NavLink to="/cart">
            {cards.length === 0 ? "" : <div className='w-[0.60rem] h-[0.60rem] bg-green-400 rounded-full absolute right-0 top-0 shadow shadow-emerald-300'></div>}
            <button className="text-gray-300 hover:text-white p-2 transition duration-300">
              <FaShoppingCart className="h-5 w-5" />
            </button>
            </NavLink>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition duration-300"
            >
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <NavLink to="/" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition duration-300 w-full text-center">
            Home
          </NavLink>
          <NavLink to="/products" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition duration-300 w-full text-center">
            Products
          </NavLink>
          <NavLink to="/about" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition duration-300 w-full text-center">
            About
          </NavLink>
          <NavLink to="/blog" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition duration-300 w-full text-center">
            Blog
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition duration-300 w-full text-center">
            Contact
          </NavLink>

          <div className="flex justify-center space-x-4 px-3 py-2 w-full">
       
            <button onClick={() => setSearchIcon(true)} className="text-gray-300 hover:text-white transition duration-300">
              <FaSearch className="h-5 w-5" />
            </button> 
     
            <NavLink to="cart">
            <button className="text-gray-300 hover:text-white transition duration-300">
              <FaShoppingCart className="h-5 w-5" />
            </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar