import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Chat from '../components/Chat'
import { FaCommentDots } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  // Partners data
  const partners = [
    { name: 'Company A', logo: '/assets/images/techland.png' },
    { name: 'Company B', logo: '/assets/images/richman.png' },
    { name: 'Company C', logo: '/assets/images/zuzu.png' },
      ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-6 pb-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Personal Profile Picture */}
          <motion.img
            src="/assets/images/martin.jpg"
            alt="ANSAH MARTIN ADDI"
            className="w-64 h-64 rounded-full mx-auto mb-6 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Full Name and Welcome Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4"
          >
            ANSAH MARTIN ADDI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Welcome to my personal website! I'm here to help you with innovative tech solutions.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white py-12 my-12 rounded-lg shadow-lg"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-5xl font-bold text-wine">500+</h3>
              <p className="text-lg text-gray-600">Happy Clients</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-5xl font-bold text-wine">120+</h3>
              <p className="text-lg text-gray-600">Completed Projects</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-5xl font-bold text-wine">98%</h3>
              <p className="text-lg text-gray-600">Client Satisfaction</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-32 h-32 object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Chat Icon (Bottom-Right Corner) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="fixed bottom-20 right-6 z-50"
      >
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-wine text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300"
        >
          <FaCommentDots className="w-6 h-6" />
        </button>
        {isChatOpen && <Chat />}
      </motion.div>
    </div>
  )
}