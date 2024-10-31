import React from 'react'
import { Data } from '../context/DataProvider'
import { FaTrash, FaShoppingBasket } from 'react-icons/fa'

const Cart = () => {
  const { cards, setCards } = Data()

  const removeFromCart = (id) => {
    const updatedCards = cards.filter(card => card.id !== id)
    setCards(updatedCards)
  }

  const calculateTotal = () => {
    return cards.reduce((total, item) => total + item.price, 0).toFixed(2)
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
        Shopping Cart
      </h1>
      <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full"></div>
      
      {cards.length === 0 ? (
        <div className="text-center text-gray-600 bg-white rounded-xl shadow-lg p-12 max-w-2xl mx-auto">
          <FaShoppingBasket className="w-20 h-20 mx-auto mb-6 text-gray-400" />
          <p className="text-2xl font-semibold mb-4">Your cart is empty</p>
          <p className="text-gray-500">Add some amazing products to your cart to get started!</p>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cards.map((item) => (
              <div 
                key={item.id} 
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-6 gap-6 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-gray-900 md:hidden mb-4">
                    ${item.price}
                  </div>
                </div>
                <div className="hidden md:block text-2xl font-bold text-gray-900">
                  ${item.price}
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-700 transition duration-300"
                  aria-label="Remove item"
                >
                  <FaTrash className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-2xl font-bold text-gray-800 mb-6">
              <span>Total Amount:</span>
              <span className="text-3xl">${calculateTotal()}</span>
            </div>
            <div className="h-px bg-gray-200 mb-6"></div>
            <button 
              className="w-full bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-700 active:bg-gray-900 transition duration-300 text-lg font-semibold shadow-md hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-gray-500 text-sm mt-4">
              Secure checkout powered by Stripe
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart

