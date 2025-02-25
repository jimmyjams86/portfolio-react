import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import InteractiveSphere from './components/InteractiveSphere' // Import the new component

function App() {
  return (
    <Router>
      <div className="w-full">
        {/* Routes for Pages */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/interactive-sphere" element={<InteractiveSphere />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
