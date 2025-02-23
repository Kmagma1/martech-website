import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} MARTECH. All rights reserved.
        </p>
        <p className="text-gray-600 mt-2">
          Empowering businesses with innovative tech solutions.
        </p>
      </div>
    </footer>
  )
} 