import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-wine p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
              />
            </div>
            <button
              type="submit"
              className="bg-wine text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Media Links and Map */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine hover:text-opacity-80 flex items-center gap-1"
              >
                <FaLinkedin className="text-xl" /> LinkedIn
              </a>
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine hover:text-opacity-80 flex items-center gap-1"
              >
                <FaGithub className="text-xl" /> GitHub
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-wine hover:text-opacity-80 flex items-center gap-1"
              >
                <FaTwitter className="text-xl" /> Twitter
              </a>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Location</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755123202174!2d-0.196548684734143!3d5.603034995963111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnMTAuOSJTIDDCsDExJzM3LjgiVw!5e0!3m2!1sen!2sgh!4v1633021234567!5m2!1sen!2sgh"
                className="w-full h-full rounded-lg"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}