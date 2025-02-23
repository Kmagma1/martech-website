import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-wine">
            Your Name
          </Link>
          <div className="space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  )
} 