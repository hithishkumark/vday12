import { useState } from 'react'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="page">
      <div className="hero">
        <h1>Welcome to React + Vite</h1>
        <p>
          A modern, fast, and production-ready React application built with Vite, 
          TypeScript, and React Router. Deploy anywhere with ease!
        </p>
        <button className="cta-button" onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>⚡ Lightning Fast</h3>
          <p>Powered by Vite for instant hot module replacement and blazing fast builds.</p>
        </div>
        <div className="feature-card">
          <h3>🎯 TypeScript</h3>
          <p>Full TypeScript support for type safety and better developer experience.</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Deploy Ready</h3>
          <p>Pre-configured for deployment on Vercel, Netlify, and other platforms.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Responsive</h3>
          <p>Mobile-first design that works beautifully on all devices.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
