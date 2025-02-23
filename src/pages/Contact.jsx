import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 text-center text-wine">Contact Me</h1>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-wine">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 mr-2 text-wine" />
                <a
                  href="mailto:kbempah360@gmail.com"
                  className="hover:text-wine transition duration-300"
                >
                  kbempah360@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 mr-2 text-wine" />
                <a
                  href="tel:+233598841235"
                  className="hover:text-wine transition duration-300"
                >
                  +233 59 884 1235
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center">
                <FaWhatsapp className="w-6 h-6 mr-2 text-wine" />
                <a
                  href="https://wa.me/233598841235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wine transition duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* GitHub */}
              <div className="flex items-center">
                <FaGithub className="w-6 h-6 mr-2 text-wine" />
                <a
                  href="https://github.com/your-github-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wine transition duration-300"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Send Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-wine">Send Me a Message</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine"
                  placeholder="Your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wine"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-wine text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

async function handleSubmit(event) {
  event.preventDefault()

  const form = event.target
  const data = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value,
  }

  const response = await fetch('http://localhost:5002/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (response.ok) {
    // Handle successful submission
    console.log('Message sent successfully')
  } else {
    // Handle error
    console.error('Failed to send message')
  }
}