import { useState, useRef, useEffect } from "react";
import "./Proposal.css";

function Proposal() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noAttempts, setNoAttempts] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "Are you sure? 🥺",
    "Really? But why not? 💔",
    "Please reconsider! 🙏",

    "Are you really sure? 😢",
    "I'll be sad forever! 😭",
    "Think about it again! 🤔",
    "Come on, say yes! 💕",
    "You're breaking my heart! 💔",
    "Last chance... please? 🥹",
  ];

  const handleNoHover = () => {
    // Move the No button to a random position
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
    setYesButtonSize((prev) => prev + 0.2); // Make Yes button bigger
    setNoAttempts((prev) => prev + 1);
  };

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleNoHover();
  };

  const handleYesClick = () => {
    setAccepted(true);
    // Create confetti effect
    createConfetti();
  };

  const createConfetti = () => {
    const confettiCount = 100;
    const container = document.querySelector(".confetti-container");
    if (!container) return;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.backgroundColor = [
        "#ff6b9d",
        "#c06c84",
        "#f093fb",
        "#f5576c",
        "#ffd700",
      ][Math.floor(Math.random() * 5)];
      container.appendChild(confetti);
    }
  };

  useEffect(() => {
    // Set initial random position for No button (off center)
    setNoButtonPosition({
      x: window.innerWidth / 2 + 100,
      y: window.innerHeight / 2,
    });
  }, []);

  if (accepted) {
    return (
      <div className="proposal-page accepted">
        <div className="confetti-container"></div>
        <div className="success-content">
          <div className="success-emoji">🎉💕🎊</div>
          <h1 className="success-title">YAAAY! 🥳</h1>
          <p className="success-message">
            I'm so blessed to have you in my Life! You just made me the happiest
            person alive! 💖
          </p>

          <video
            width="30%"
            height="30%"
            controls
            autoPlay
            style={{ marginTop: "2rem", borderRadius: "10px" }}
          >
            <source src="/Memes/final.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="heart-explosion">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="heart-burst"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  left: `${
                    50 + Math.cos((((i * 360) / 20) * Math.PI) / 180) * 40
                  }%`,
                  top: `${
                    50 + Math.sin((((i * 360) / 20) * Math.PI) / 180) * 40
                  }%`,
                }}
              >
                ❤️
              </div>
            ))}
          </div>
          <div className="celebration-text">
            {/* <p className="love-quote">
              "You + Me = Forever 💕"
            </p> */}
            <p className="date-reminder">Happy Valentine's Day 🌹</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="proposal-page">
      {/* Background hearts */}
      <div className="proposal-hearts">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="proposal-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 1.5 + 1}rem`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="proposal-container">
        {/* Main Question */}
        <div className="proposal-content">
          <div className="big-emoji">💝</div>
          <h1 className="proposal-title">Will You Be My Valentine? 💕</h1>
          <p className="proposal-subtitle">
            {noAttempts > 0
              ? messages[Math.min(noAttempts - 1, messages.length - 1)]
              : "Please say yes! 🥺"}
          </p>

          {/* Buttons Container */}
          <div className="buttons-container">
            {/* Yes Button - Gets bigger with each No attempt */}
            <button
              className="yes-button"
              onClick={handleYesClick}
              style={{
                transform: `scale(${yesButtonSize})`,
                transition: "transform 0.3s ease",
              }}
            >
              <span className="button-emoji">✨</span>
              YES! 💕
              <span className="button-emoji">✨</span>
            </button>

            {/* No Button - Moves away on hover/click */}
            <button
              ref={noButtonRef}
              className="no-button"
              onMouseEnter={handleNoHover}
              onClick={handleNoClick}
              onTouchStart={handleNoHover}
              style={{
                position: "fixed",
                left: `${noButtonPosition.x}px`,
                top: `${noButtonPosition.y}px`,
                transition: "all 0.3s ease",
              }}
            >
              No 😢
            </button>
          </div>

          {noAttempts > 0 && (
            <p className="attempts-counter">
              Failed attempts to click "No": {noAttempts} 😏
            </p>
          )}
        </div>

        {/* Floating hearts around */}
        <div className="decorative-hearts">
          <span className="deco-heart" style={{ top: "10%", left: "10%" }}>
            💕
          </span>
          <span className="deco-heart" style={{ top: "15%", right: "15%" }}>
            💖
          </span>
          <span className="deco-heart" style={{ bottom: "20%", left: "5%" }}>
            💗
          </span>
          <span className="deco-heart" style={{ bottom: "15%", right: "10%" }}>
            💓
          </span>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
