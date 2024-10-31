import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
        Contact Us
      </h1>
      <div className="w-20 h-1 bg-gray-800 mx-auto mb-8 rounded-full"></div>

      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-600 text-center text-lg">
          Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-[#2dcdd0] text-2xl" />
            <h3 className="text-xl font-semibold">Phone</h3>
          </div>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-[#2dcdd0] text-2xl" />
            <h3 className="text-xl font-semibold">Email</h3>
          </div>
          <p className="text-gray-600">support@store.com</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaClock className="text-[#2dcdd0] text-2xl" />
            <h3 className="text-xl font-semibold">Hours</h3>
          </div>
          <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2dcdd0]"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2dcdd0]"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2dcdd0]"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#2dcdd0] resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2dcdd0] text-white py-3 rounded-lg font-semibold hover:bg-[#25b5b8] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Our Location</h2>
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-[#2dcdd0] text-2xl" />
              <h3 className="text-xl font-semibold">Address</h3>
            </div>
            <p className="text-gray-600">
              123 Store Street<br />
              New York, NY 10001<br />
              United States
            </p>
          </div>
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <img 
              src="contact.jpg"
              alt="Store location"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact