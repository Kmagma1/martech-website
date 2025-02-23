import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone } from 'react-icons/fa'

export default function Header() {
  const handleCall = () => {
    // Implement Twilio API call functionality here
    alert('Call functionality will be implemented using Twilio API.')
  }

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Company Logo and Name */}
        <div className="flex items-center">
          <img
            src="/assets/images/martech.png" // Replace with your logo path
            alt="MARTECH Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-2xl font-bold text-wine">MARTECH</h1>
        </div>

        {/* Navbar Links */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-wine transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-wine transition duration-300"
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-600 hover:text-wine transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/blog"
            className="text-gray-600 hover:text-wine transition duration-300"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-wine transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Call Button */}
        <button
          onClick={handleCall}
          className="bg-wine text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition duration-300 flex items-center"
        >
          <FaPhone className="mr-2" /> Call Me
        </button>
      </div>
    </header>
  )
} 