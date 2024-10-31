import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="hero.jpg" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl">
              Discover our amazing collection of products with unbeatable prices and quality that you can trust.
            </p>
            <Link 
              to="/products" 
              className="bg-[#2dcdd0] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1cb3b6] transition duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src="feature-one.jpg"
              alt="Electronics"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Electronics</h3>
            </div>
          </div>

          {/* Category 2 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src="feature-two.jpg"
              alt="Fashion"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Fashion</h3>
            </div>
          </div>

          {/* Category 3 */}
          <div className="relative rounded-lg overflow-hidden group">
            <img 
              src="feature-three.jpg"
              alt="Accessories"
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">Accessories</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
              <p className="text-gray-600 mb-6">
                Get up to 50% off on selected items. Limited time offer!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#2dcdd0] rounded-full mr-3"></span>
                  Free shipping on orders over $50
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#2dcdd0] rounded-full mr-3"></span>
                  30-day money-back guarantee
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#2dcdd0] rounded-full mr-3"></span>
                  24/7 customer support
                </li>
              </ul>
              <button className="bg-[#2dcdd0] text-white px-8 py-3 rounded-md hover:bg-[#1cb3b6] transition duration-300">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img 
                src="sale.jpg"
                alt="Special Offer"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home