import { useState } from 'react'
import './MemeGallery.css'

interface MemeGalleryProps {
  onComplete: () => void
}

interface Meme {
  id: number
  quote: string
  emoji?: string
  image?: string
}

function MemeGallery({ onComplete }: MemeGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showWhyAnswer, setShowWhyAnswer] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // 8 meme slides with quotes
  const memes: Meme[] = [
    {
      id: 0,
      quote: "ఇది మన మొదటి సెల్ఫీ… ఈ ఫోటో వెనుక ఎన్నో జ్ఞాపకాలు, ఎంతో ప్రేమ ఉందో! 🌙❤️",
      image: "/Memes/first-selfie.jpg"
    },
    {
      id: 1,
      quote: "నిన్ను మొదటిసారి చీరలో చూసినప్పుడు, ఒక అమ్మాయి ఇంత అందంగా పుట్టడం తప్పు అనిపించింది… 💞✨",
      image: "./public/Memes/saree.jpg"
    },
    {
      id: 2,
      quote: "ఇలా దొంగగా వీడియో కాల్ మాట్లాడిన రోజులు తలచుకుంటే, ఏదో తెలియని ఒక ఫీలింగ్ వస్తుంది గుండెల్లో… 💞",
      image: "./public/Memes/vc.jpg"
    },
    {
      id: 3,
      quote: "నువ్వు నాతో ఉంటే, ఏదో తెలియని ఒక ఆనందం, ధైర్యం అన్నీ వస్తాయి.ఎన్ని గొడవలు పడినా, ఏమి చేసినా… you are my one and only soul",
      image: "./public/Memes/hand.jpg"
    },
    {
      id: 4,
      quote: "ఇది నువ్వు నాకు పంపిన మొదటి ఫోటో… ఆ రోజు నన్ను నేనే మరిచిపోయిన రోజు.",
      image: "./public/Memes/first.jpg"
    },
    {
      id: 5,
      quote: "ఇదిగో పువ్వు… నువ్వే నాకు లవ్వు… 🌸",
      emoji: "🌹"
    },
    {
      id: 6,
      quote: "Final ga, నీకు ఒకటి చెప్పాలి…",
      emoji: "😉"
    }
  ]
  
  const handleNext = () => {
    setShowWhyAnswer(false)
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentSlide < memes.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else {
        onComplete()
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handlePrevious = () => {
    setShowWhyAnswer(false)
    setIsTransitioning(true)
    setTimeout(() => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
      setIsTransitioning(false)
    }, 300)
  }

  const handleWhyClick = () => {
    setShowWhyAnswer(true)
  }

  return (
    <div className="meme-gallery" style={{
      background: `linear-gradient(135deg, ${[
        '#ffecd2 0%, #fcb69f 50%, #ff9a9e 100%',
        '#a8edea 0%, #fed6e3 100%',
        '#fbc2eb 0%, #a6c1ee 100%',
        '#fa709a 0%, #fee140 100%',
        '#30cfd0 0%, #330867 100%',
        '#a8ff78 0%, #78ffd6 100%',
        '#667eea 0%, #764ba2 100%',
        '#f093fb 0%, #f5576c 100%'
      ][currentSlide]})`
    }}>
      {/* Floating hearts background */}
      <div className="meme-hearts">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="meme-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 1 + 1}rem`
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className={`meme-container ${isTransitioning ? 'transitioning' : ''}`}>
        {/* Progress indicator */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${((currentSlide + 1) / memes.length) * 100}%` }} />
        </div>
        <div className="slide-counter">
          {/* <span className="counter-text">{currentSlide + 1} / {memes.length}</span> */}
          <div className="mini-hearts">
            {Array.from({ length: memes.length }).map((_, i) => (
              <span
                key={i}
                className={`mini-heart ${i === currentSlide ? 'active' : ''} ${i < currentSlide ? 'completed' : ''}`}
              >
                {i < currentSlide ? '💖' : i === currentSlide ? '💗' : '🤍'}
              </span>
            ))}
          </div>
        </div>

        {/* Meme content */}
        <div className="meme-content">
          {/* Left side - Image/Emoji */}
          <div className="meme-image-side">
            <div className="meme-emoji-container">
              {memes[currentSlide].image ? (
                <img 
                  src={memes[currentSlide].image} 
                  alt="meme" 
                  className="meme-image"
                />
              ) : (
                <div className="meme-emoji">{memes[currentSlide].emoji}</div>
              )}
              {!memes[currentSlide].image && <div className="emoji-shadow"></div>}
            </div>
          </div>

          {/* Right side - Quote */}
          <div className="meme-quote-side">
            <div className="quote-container">
              <div className="quote-mark">"</div>
              <p className="meme-quote">{memes[currentSlide].quote}</p>
              <div className="quote-mark bottom">"</div>
              
              {/* Special interactive element for slide 3 */}
              {/* {currentSlide === 3 && !showWhyAnswer && (
                <button className="why-button" onClick={handleWhyClick}>
                  🤔 Why?
                </button>
              )}
              
              {currentSlide === 3 && showWhyAnswer && (
                <div className="why-answer">
                  <p className="answer-text">Because I like <span className="highlight-u">U</span> ❤️</p>
                </div>
              )} */}

              {/* Special interactive element for slide 6 (7th slide) */}
              {currentSlide === 6 && !showWhyAnswer && (
                <button className="why-button" onClick={handleWhyClick}>
                  🤔 What?
                </button>
              )}
              
              {currentSlide === 6 && showWhyAnswer && (
                <div className="why-answer">
                  <p className="answer-text">Okati <span className="highlight-u"></span>😜</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="meme-navigation">
          <button
            className="nav-button prev-button"
            onClick={handlePrevious}
            disabled={currentSlide === 0}
            style={{ visibility: currentSlide === 0 ? 'hidden' : 'visible' }}
          >
            <span className="arrow">⬅️</span>
            <span className="button-text">Previous</span>
          </button>

          <button
            className="nav-button next-button"
            onClick={handleNext}
          >
            <span className="button-text">
              {currentSlide === memes.length - 1 ? '💝 Ready?' : 'Next'}
            </span>
            <span className="arrow">➡️</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MemeGallery
