import React from 'react'
import { FaPython, FaNodeJs, FaDatabase, FaPhp, FaCss3Alt, FaReact } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Django and React.',
      technologies: ['Django', 'React', 'PostgreSQL', 'Tailwind CSS'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
    {
      title: 'Blog Website',
      description: 'A responsive blog website built with Express.js and MongoDB.',
      technologies: ['Express.js', 'MongoDB', 'Node.js', 'Bootstrap'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
    {
      title: 'Task Management App',
      description: 'A task management app built with PHP and MySQL.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/example',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-wine p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-100 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="bg-wine text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  {tech === 'Django' && <FaPython />}
                  {tech === 'React' && <FaReact />}
                  {tech === 'PostgreSQL' && <FaDatabase />}
                  {tech === 'PHP' && <FaPhp />}
                  {tech === 'Tailwind CSS' && <FaCss3Alt />}
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wine text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-wine text-wine px-4 py-2 rounded-lg hover:bg-wine hover:text-white"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 