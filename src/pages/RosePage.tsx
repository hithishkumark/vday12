import { useState } from 'react'
import './RosePage.css'

interface RosePageProps {
  onAccept: () => void
}

function RosePage({ onAccept }: RosePageProps) {
  const [roseAccepted, setRoseAccepted] = useState(false)

  const handleAcceptRose = () => {
    setRoseAccepted(true)
    setTimeout(() => {
      onAccept()
    }, 2000)
  }

  return (
    <div className="rose-page">
      {/* Floating petals */}
      <div className="petals-container">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="petal"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Sparkle effects */}
      <div className="rose-sparkles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="rose-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className={`rose-content ${roseAccepted ? 'accepted' : ''}`}>
        <div className="rose-container">
          <div className="rose-stem">
            <div className="rose-flower">🌹</div>
            <div className="rose-leaf left">🍃</div>
            <div className="rose-leaf right">🍃</div>
          </div>
        </div>

        <div className="rose-message">
          <h1 className="rose-title">A Rose For You 🌹</h1>
          
          
          {!roseAccepted && (
            <button className="accept-rose-button" onClick={handleAcceptRose}>
              <span className="button-icon">💝</span>
              Accept the Rose
              <span className="button-icon">💝</span>
            </button>
          )}

          {roseAccepted && (
            <div className="acceptance-message">
              <div className="hearts-burst">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className="burst-heart"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    ❤️
                  </span>
                ))}
              </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RosePage
