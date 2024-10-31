import React from 'react'
import { FaCalendar, FaUser, FaComments } from 'react-icons/fa'
import { Data } from '../context/DataProvider'

const Blog = () => {

  const {blogPosts} = Data()

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
        Our Blog
      </h1>
      <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full"></div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 text-center text-lg">
          Stay updated with our latest news, trends, and insights. Our blog covers everything from product reviews to industry updates.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-[#2dcdd0] transition duration-300">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-[#2dcdd0]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-[#2dcdd0]" />
                  <span>{post.author}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <button className="text-[#2dcdd0] font-semibold hover:text-gray-800 transition duration-300">
                  Read More
                </button>
                <div className="flex items-center gap-2 text-gray-500">
                  <FaComments className="text-[#2dcdd0]" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog