import { useEffect, useState } from 'react'
import './LandingPage.css'

interface LandingPageProps {
  onStart: () => void
}

function LandingPage({ onStart }: LandingPageProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Generate floating hearts
    const heartArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setHearts(heartArray)
  }, [])

  return (
    <div className="landing-page">
      {/* Floating Hearts */}
      <div className="hearts-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="floating-heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Twinkling Lights */}
      <div className="lights-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="landing-content">
        <h1 className="main-title">
          💕 Happy Valentine's Day Puppy! 💕
        </h1>
        <p className="subtitle">
          I made something special for you...
        </p>
        <div className="heart-emoji-group">
          <span className="pulse-heart">💖</span>
          <span className="pulse-heart" style={{ animationDelay: '0.2s' }}>💗</span>
          <span className="pulse-heart" style={{ animationDelay: '0.4s' }}>💓</span>
        </div>
        <button className="start-button" onClick={onStart}>
          ✨ Click Here to Start ✨
        </button>
       
      </div>
    </div>
  )
}

export default LandingPage
