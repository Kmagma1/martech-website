import React from 'react'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-wine flex flex-col items-center justify-center">
      <div className="text-center">
        <img
          src="/assets/images/your-photo.jpg"
          alt="Your Name"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Your Name</h1>
        <p className="text-lg mt-2">Tech Educator | Full-Stack Developer</p>
        <div className="mt-6 space-x-4">
          <button className="bg-wine text-white px-6 py-2 rounded-lg hover:bg-opacity-90">
            Chat with Me
          </button>
          <button className="border border-wine text-wine px-6 py-2 rounded-lg hover:bg-wine hover:text-white">
            View My Work
          </button>
        </div>
      </div>
      <Chat />
    </div>
  )
}