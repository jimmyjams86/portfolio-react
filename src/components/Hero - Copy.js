import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import profileImage from './about1.jpg'
import '../GridBackground.css'
import p1Image from './p1.png'
import { debounce } from 'lodash' // Keep only one import

// Crystal Component
function Crystal() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.005
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.8, 2.8, 1.8]}>
      <octahedronGeometry args={[0.7, 0]} />
      <meshStandardMaterial color="coral" roughness={0.2} metalness={0.7} />
    </mesh>
  )
}

// Hero Component
const triggerHeight = window.innerHeight * 0.8

function Hero() {
  const [addLines, setAddLines] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollY = window.scrollY
      if (scrollY >= triggerHeight) {
        setAddLines(true)
      } else {
        setAddLines(false)
      }
    }, 100) // Adjust debounce delay as needed

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      handleScroll.cancel() // Cancel the debounced function
    }
  }, [])

  const handleProjectClick = (id) => {
    setSelectedProject(selectedProject === id ? null : id)
  }

  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1' },
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3' },
    { id: 4, title: 'Project 4', description: 'Description for Project 4' },
    { id: 5, title: 'Project 5', description: 'Description for Project 5' },
    { id: 6, title: 'Project 6', description: 'Description for Project 6' },
  ]

  const selectedItem = projects.find(
    (project) => project.id === selectedProject
  )
  const remainingItems = projects.filter(
    (project) => project.id !== selectedProject
  )

  return (
    <div className="relative w-screen overflow-y-auto">
      {/* Fixed Background Layer */}
      <div
        className={`fixed inset-0 -z-20 bg-gradient-to-b from-gray-800 to-gray-900`}
      >
        <div className={`grid-background ${addLines ? 'grid-with-lines' : ''}`}>
          <Canvas className="h-full w-full">
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 3, 5]} intensity={0.6} />
            <spotLight
              position={[15, 15, 10]}
              angle={0.4}
              penumbra={1}
              intensity={0.8}
            />
            <Crystal />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
      </div>

      {/* About Me Section */}
      <motion.div
        className="h-screen flex flex-col items-center justify-center space-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={profileImage}
          alt="Your Name"
          className="w-32 h-32 rounded-full border-4 border-cyan-400"
        />
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          James Spyrou
        </h1>
        <div className="text-cyan-300 text-lg md:text-2xl space-y-1">
          <p>UI/UX Explorer</p>
          <p>Web Developer</p>
          <p>React Enthusiast</p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          <span className="text-white text-lg sm:text-xl md:text-2xl">
            HTML
          </span>
          <span className="text-white text-lg sm:text-xl md:text-2xl">CSS</span>
          <span className="text-white text-lg sm:text-xl md:text-2xl">
            JavaScript
          </span>
          <span className="text-white text-lg sm:text-xl md:text-2xl">
            React
          </span>
          <span className="text-white text-lg sm:text-xl md:text-2xl">PHP</span>
          <span className="text-white text-lg sm:text-xl md:text-2xl">
            Tailwind
          </span>
        </div>
      </motion.div>

      {/* Work Grid Section */}
      <motion.div
        className={`h-screen p-8 grid gap-6 transition-all duration-500 ${
          selectedProject
            ? 'grid-cols-[.6fr_.4fr]'
            : 'grid-cols-1 md:grid-cols-3'
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Display all projects when no project is selected */}
        {!selectedProject &&
          projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition flex flex-col items-center"
            >
              <img
                src={p1Image}
                alt={project.title}
                className="w-full max-w-lg rounded-lg mb-4"
              />
              <h2 className="text-white text-xl text-center">
                {project.title}
              </h2>
            </div>
          ))}

        {/* Display selected project UI when a project is selected */}
        {selectedProject && (
          <>
            {/* Left Column (Selected Project) */}
            <div className="bg-gray-700 rounded-lg p-6 flex flex-col justify-between ring-4 ring-cyan-500 h-full">
              <img
                src={p1Image}
                alt={selectedItem.title}
                className="w-full rounded-lg mb-4"
              />
              <h2 className="text-white text-2xl font-bold text-center">
                {selectedItem.title}
              </h2>
              <p className="text-gray-300 mt-4 text-center">
                {selectedItem.description}
              </p>
            </div>

            {/* Right Column (Remaining Projects) */}
            <div className="flex flex-col space-y-3 overflow-y-auto h-full">
              {remainingItems.map((project) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition flex flex-col items-center"
                >
                  <img
                    src={p1Image}
                    alt={project.title}
                    className="w-full max-w-[150px] rounded-lg mb-2"
                  />
                  <h2 className="text-white text-sm text-center">
                    {project.title}
                  </h2>
                </div>
              ))}
            </div>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default Hero
