import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  FaLinux,
  FaWindows,
  FaApple,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaChartLine,
} from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiAdobephotoshop, SiCoreldraw, SiCanva, SiCisco } from 'react-icons/si'
import { GrOracle } from 'react-icons/gr'
import { BsTools } from 'react-icons/bs'

export default function About() {
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
          <h1 className="text-4xl font-bold mb-8 text-center text-wine">About Me</h1>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-wine">Professional Summary</h2>
            <p className="text-lg text-gray-600">
              Dynamic IT professional with over 10 years of expertise in teaching, IT management, and multimedia design. Adept at implementing technological solutions, mentoring students, and developing innovative educational programs. Proven track record of success in database administration, programming, and preparing students for national academic competitions. Recognized for leadership, problem-solving, and technical skills that drive organizational and student success.
            </p>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-wine">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Operating Systems
                </h3>
                <ul className="text-gray-600">
                  <li className="flex items-center"><FaLinux className="mr-2" /> Linux</li>
                  <li className="flex items-center"><FaWindows className="mr-2" /> Windows OS</li>
                  <li className="flex items-center"><FaApple className="mr-2" /> macOS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Programming Languages
                </h3>
                <ul className="text-gray-600">
                  <li className="flex items-center"><FaPython className="mr-2" /> Python</li>
                  <li className="flex items-center"><FaHtml5 className="mr-2" /> HTML</li>
                  <li className="flex items-center"><FaCss3Alt className="mr-2" /> CSS</li>
                  <li className="flex items-center"><FaJs className="mr-2" /> JavaScript</li>
                  <li className="flex items-center"><FaPhp className="mr-2" /> PHP</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Database Management
                </h3>
                <ul className="text-gray-600">
                  <li className="flex items-center"><FaDatabase className="mr-2" /> SQL</li>
                  <li className="flex items-center"><GrOracle className="mr-2" /> Oracle</li>
                  <li className="flex items-center"><FaDatabase className="mr-2" /> MySQL</li>
                  <li className="flex items-center"><SiPostgresql className="mr-2" /> PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Frameworks & Libraries
                </h3>
                <ul className="text-gray-600">
                  <li className="flex items-center"><FaReact className="mr-2" /> React</li>
                  <li className="flex items-center"><SiDjango className="mr-2" /> Django</li>
                  <li className="flex items-center"><FaBootstrap className="mr-2" /> Bootstrap</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Software Tools
                </h3>
                <ul className="text-gray-600">
                  <li className="flex items-center">Microsoft Office Suite</li>
                  <li className="flex items-center"><SiAdobephotoshop className="mr-2" /> Adobe Photoshop</li>
                  <li className="flex items-center"><SiCoreldraw className="mr-2" /> CorelDRAW</li>
                  <li className="flex items-center"><SiCanva className="mr-2" /> Canva</li>
                  <li className="flex items-center"><FaChartLine className="mr-2" /> Power BI</li>
                  <li className="flex items-center"><SiCisco className="mr-2" /> Cisco Packet Tracer</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Networking
                </h3>
                <ul className="text-gray-600">
                  <li>Computer Communications</li>
                  <li>IT Support</li>
                  <li>System Maintenance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-wine flex items-center">
                  <BsTools className="mr-2" /> Multimedia Design
                </h3>
                <ul className="text-gray-600">
                  <li>Graphic Design </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
} 