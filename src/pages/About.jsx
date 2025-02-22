import React from 'react'
import { FaPython, FaNodeJs, FaDatabase, FaPhp, FaCss3Alt } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-white text-wine p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Background Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Background</h2>
        <p className="text-lg leading-relaxed">
          I'm a passionate tech educator and full-stack developer with over 5 years of experience in teaching and building innovative solutions. My journey in tech began with a love for problem-solving, and I've since dedicated myself to helping others learn and grow in this ever-evolving field.
        </p>
      </motion.section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaPython className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">Django</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaNodeJs className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">Express.js</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaDatabase className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">PostgreSQL</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaPhp className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">PHP</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaDatabase className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">MySQL</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <FaCss3Alt className="text-3xl mx-auto mb-2" />
            <h3 className="font-semibold">Tailwind CSS</h3>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Career Timeline</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-wine pl-4">
            <h3 className="font-semibold">Tech Educator</h3>
            <p className="text-gray-600">Rhomicom | 2020 - Present</p>
          </div>
          <div className="border-l-4 border-wine pl-4">
            <h3 className="font-semibold">Full-Stack Developer</h3>
            <p className="text-gray-600">Yes You Can Multimedia | 2018 - 2020</p>
          </div>
          <div className="border-l-4 border-wine pl-4">
            <h3 className="font-semibold">IT Instructor</h3>
            <p className="text-gray-600">Glorious Child School | 2016 - 2018</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Certifications</h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">Google IT Support Professional Certificate</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold">GIMPA IT Diploma</h3>
          </div>
        </div>
      </section>
    </div>
  )
} 