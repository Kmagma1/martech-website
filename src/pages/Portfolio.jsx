import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  FaReact,
  FaJs,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'
import { SiPostgresql, SiMysql } from 'react-icons/si'

export default function Portfolio() {
  // Featured projects data
  const featuredProjects = [
    {
      title: 'EduMaterials Management System (EMMS)',
      description:
        'A comprehensive system for managing educational materials, built with PostgreSQL, React, and JavaScript.',
      technologies: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6" /> },
        { name: 'React', icon: <FaReact className="w-6 h-6" /> },
        { name: 'JavaScript', icon: <FaJs className="w-6 h-6" /> },
      ],
    },
    {
      title: 'E-Voting System',
      description:
        'A secure and efficient e-voting platform developed using PHP, MySQL, Bootstrap, HTML, and CSS.',
      technologies: [
        { name: 'PHP', icon: <FaPhp className="w-6 h-6" /> },
        { name: 'MySQL', icon: <SiMysql className="w-6 h-6" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-6 h-6" /> },
        { name: 'HTML', icon: <FaHtml5 className="w-6 h-6" /> },
        { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" /> },
      ],
    },
    {
      title: 'Student Target System',
      description:
        'A system designed to help students set and track academic goals, built with PHP, MySQL, Bootstrap, HTML, and CSS.',
      technologies: [
        { name: 'PHP', icon: <FaPhp className="w-6 h-6" /> },
        { name: 'MySQL', icon: <SiMysql className="w-6 h-6" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-6 h-6" /> },
        { name: 'HTML', icon: <FaHtml5 className="w-6 h-6" /> },
        { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" /> },
      ],
    },
  ]

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
          <h1 className="text-4xl font-bold mb-8 text-center text-wine">Portfolio</h1>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-wine">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {tech.icon}
                      <span className="ml-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-wine text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition duration-300">
                  View Project
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 