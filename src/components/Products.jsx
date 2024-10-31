import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Data } from '../context/DataProvider'

const Products = () => {
  const {handleProductBooking, products} = Data()
const [popup, setPopup] = useState(false)

const handlePopup = () => {
  setPopup(true)
  setTimeout(() => setPopup(false), 900)
}

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">

      {popup && <div className='rounded-full fixed top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%] popup size'></div>}
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <p className="text-gray-600 text-center mb-8">Discover our curated collection of premium products. From fashion essentials to cutting-edge electronics, we offer high-quality items at competitive prices. Browse our selection and find exactly what you're looking for.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">${product.price}</span>
                <button onClick={() => {
                  handleProductBooking(product.id)
                  handlePopup()
                }} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
                  <FaShoppingCart className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products