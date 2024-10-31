import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Store</h3>
            <p className="text-sm">
              Your one-stop shop for all your needs. Quality products, competitive prices, and excellent customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm hover:text-white transition duration-300 inline-block">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-sm hover:text-white transition duration-300 inline-block">Products</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm hover:text-white transition duration-300 inline-block">About</NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-sm hover:text-white transition duration-300 inline-block">Blog</NavLink>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/contact" className="text-sm hover:text-white transition duration-300 inline-block">Contact Us</NavLink>
              </li>
              <li>
                <a className="text-sm hover:text-white transition duration-300 inline-block">Shipping Policy</a>
              </li>
              <li>
                <a className="text-sm hover:text-white transition duration-300 inline-block">Returns & Exchanges</a>
              </li>
              <li>
                <a className="text-sm hover:text-white transition duration-300 inline-block">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#2dcdd0] w-full"
              />
              <button className="bg-[#2dcdd0] text-white px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-[#1cb3b6] transition duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-0 justify-between items-center">
            <p className="text-sm text-left">&copy; 2023 Store. All rights reserved.</p>
            <div className="flex space-x-6">
              <a className="hover:text-white transition duration-300 cursor-pointer">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer