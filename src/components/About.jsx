import React from 'react'
import { FaShippingFast, FaHeadset, FaShieldAlt, FaStar } from 'react-icons/fa'

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
        About Us
      </h1>
      <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full"></div>

      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Welcome to Store, your premier destination for quality products. Founded in 2015 with a passion for excellence, 
                we've been serving customers worldwide with carefully curated items that combine style, functionality, and value.
              </p>
              <p className="text-gray-600">
                Our mission is to provide an exceptional shopping experience by offering high-quality products, 
                outstanding customer service, and competitive prices. We believe in building lasting relationships 
                with our customers based on trust and satisfaction.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="about-1.jpg"
                alt="Modern storefront" 
                className="rounded-lg shadow-md w-full h-[300px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
              <span className="text-[#2dcdd0]">Our Values</span>
              <FaStar className="text-yellow-400" />
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#2dcdd0] rounded-full"></div>
                <span>Quality First - We never compromise on product quality</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#2dcdd0] rounded-full"></div>
                <span>Customer Focus - Your satisfaction is our top priority</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#2dcdd0] rounded-full"></div>
                <span>Integrity - We believe in honest and transparent business practices</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#2dcdd0] rounded-full"></div>
                <span>Innovation - Constantly evolving to serve you better</span>
              </li>
            </ul>
            <img 
              src="about-2.jpg"
              alt="Team meeting"
              className="mt-6 rounded-lg w-full h-[200px] object-cover hover:scale-105 transition duration-300"
            />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
                <FaShippingFast className="text-4xl text-[#2dcdd0] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fast Shipping</h3>
                <p className="text-sm text-gray-600">2-3 day delivery guaranteed</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
                <FaHeadset className="text-4xl text-[#2dcdd0] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here to help you</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
                <FaShieldAlt className="text-4xl text-[#2dcdd0] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Secure Shopping</h3>
                <p className="text-sm text-gray-600">100% secure payments</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300">
                <FaStar className="text-4xl text-[#2dcdd0] mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Top Quality</h3>
                <p className="text-sm text-gray-600">Premium products only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Global Presence</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src="about-3.jpg"
              alt="World map"
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <p className="text-gray-600 text-center mt-6">
            Serving customers in over 50 countries worldwide with dedication and excellence
          </p>
        </div>
      </div>
    </div>
  )
}

export default About