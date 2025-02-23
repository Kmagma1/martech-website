import React from 'react'
import { FaYoutube, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Blog() {
  // Blog data
  const blogs = [
    {
      title: 'Introduction to React Hooks',
      date: '2024-01-15 10:00',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=example1',
    },
    {
      title: 'Mastering Python for Data Science',
      date: '2024-01-14 14:30',
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@example1',
    },
    {
      title: 'Building REST APIs with Django',
      date: '2024-01-13 09:15',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=example2',
    },
    {
      title: 'CSS Grid vs Flexbox: Which to Use?',
      date: '2024-01-12 16:45',
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@example2',
    },
    {
      title: 'Getting Started with Docker',
      date: '2024-01-11 11:20',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=example3',
    },
    {
      title: 'Top 5 JavaScript Frameworks in 2024',
      date: '2024-01-10 13:00',
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@example3',
    },
    {
      title: 'Introduction to Machine Learning',
      date: '2024-01-09 08:30',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=example4',
    },
    {
      title: 'How to Optimize Your Website for SEO',
      date: '2024-01-08 12:10',
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@example4',
    },
    {
      title: 'Building Scalable Web Applications',
      date: '2024-01-07 15:50',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=example5',
    },
    {
      title: 'The Future of AI in 2024',
      date: '2024-01-06 17:30',
      platform: 'TikTok',
      link: 'https://www.tiktok.com/@example5',
    },
  ]

  // Sort blogs by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date))

  // Tech trends
  const techTrends = [
    'AI and Machine Learning',
    'Blockchain Technology',
    'Edge Computing',
    'Quantum Computing',
    '5G Technology',
    'Cybersecurity',
    'Augmented Reality (AR) and Virtual Reality (VR)',
    'Internet of Things (IoT)',
    'Cloud Computing',
    'DevOps and Automation',
  ]

  // Tech quotes
  const techQuotes = [
    'The best way to predict the future is to invent it. - Alan Kay',
    'Technology is best when it brings people together. - Matt Mullenweg',
    'Innovation distinguishes between a leader and a follower. - Steve Jobs',
    'The only way to do great work is to love what you do. - Steve Jobs',
    'The computer was born to solve problems that did not exist before. - Bill Gates',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="pt-24 px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex"
        >
          {/* Left Side: Blog Posts */}
          <div className="w-full lg:w-2/3 pr-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
              {sortedBlogs.map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold mb-4 text-wine">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    Posted on {new Date(blog.date).toLocaleDateString()} at{' '}
                    {new Date(blog.date).toLocaleTimeString()}
                  </p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-wine hover:text-opacity-80 transition duration-300"
                  >
                    {blog.platform === 'YouTube' ? (
                      <FaYoutube className="w-6 h-6 mr-2" />
                    ) : (
                      <FaTiktok className="w-6 h-6 mr-2" />
                    )}
                    Watch on {blog.platform}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Fixed Tech Quotes and Top Tech Trends */}
          <div className="w-full lg:w-1/3 fixed right-0 top-24 h-[calc(100vh-6rem)] overflow-y-auto p-6">
            {/* Tech Quotes Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-wine">Tech Quotes</h2>
              <ul className="text-gray-600">
                {techQuotes.map((quote, index) => (
                  <li key={index} className="mb-4 italic">
                    "{quote}"
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Top Tech Trends Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-wine">Top Tech Trends in 2024</h2>
              <ul className="list-disc list-inside text-gray-600">
                {techTrends.map((trend, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={`https://www.google.com/search?q=${encodeURIComponent(trend)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-opacity-80 transition duration-300"
                    >
                      {trend}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 