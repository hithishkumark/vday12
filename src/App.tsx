import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import RosePage from './pages/RosePage'
import MemeGallery from './pages/MemeGallery'
import Proposal from './pages/Proposal'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'rose' | 'gallery' | 'proposal'>('landing')

  return (
    <div className="app valentine-app">
      {currentPage === 'landing' && (
        <LandingPage onStart={() => setCurrentPage('rose')} />
      )}
      {currentPage === 'rose' && (
        <RosePage onAccept={() => setCurrentPage('gallery')} />
      )}
      {currentPage === 'gallery' && (
        <MemeGallery onComplete={() => setCurrentPage('proposal')} />
      )}
      {currentPage === 'proposal' && (
        <Proposal />
      )}
    </div>
  )
}

export default App
