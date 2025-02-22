import React from 'react'
import { FaBook, FaCode, FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Blog() {
  const posts = [
    {
      title: 'Getting Started with Django',
      description: "A beginner's guide to setting up and building your first Django project.",
      date: 'October 15, 2023',
      link: 'https://example.com',
    },
    {
      title: 'Mastering Tailwind CSS',
      description: 'Learn how to use Tailwind CSS to build responsive and modern UIs.',
      date: 'September 28, 2023',
      link: 'https://example.com',
    },
    {
      title: 'Introduction to React Hooks',
      description: 'A comprehensive guide to understanding and using React Hooks effectively.',
      date: 'August 10, 2023',
      link: 'https://example.com',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-wine p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-2 mb-4">
              {post.title.includes('Django') && <FaCode className="text-2xl text-wine" />}
              {post.title.includes('Tailwind') && <FaBook className="text-2xl text-wine" />}
              {post.title.includes('React') && <FaReact className="text-2xl text-wine" />}
              <h2 className="text-2xl font-bold">{post.title}</h2>
            </div>
            <p className="text-lg mb-4">{post.description}</p>
            <p className="text-sm text-gray-600 mb-4">Published: {post.date}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wine text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 