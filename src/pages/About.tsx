function About() {
  return (
    <div className="page">
      <div className="content-section">
        <h2>About This Application</h2>
        <p>
          This is a full-featured React application built with modern web technologies 
          to demonstrate best practices in frontend development.
        </p>
        
        <h3>Technology Stack</h3>
        <ul>
          <li><strong>React 18:</strong> The latest version of React with concurrent features</li>
          <li><strong>TypeScript:</strong> For type-safe code and better IDE support</li>
          <li><strong>Vite:</strong> Next-generation frontend tooling for faster builds</li>
          <li><strong>React Router:</strong> For client-side routing and navigation</li>
          <li><strong>ESLint:</strong> For code quality and consistency</li>
        </ul>

        <h3>Features</h3>
        <ul>
          <li>Fast development with Hot Module Replacement (HMR)</li>
          <li>Optimized production builds with code splitting</li>
          <li>TypeScript support out of the box</li>
          <li>Responsive design for all screen sizes</li>
          <li>Easy deployment to popular hosting platforms</li>
          <li>Clean and maintainable code structure</li>
        </ul>

        <h3>Getting Started</h3>
        <p>
          To get started with this application, install dependencies with npm install, 
          then run npm run dev to start the development server. For production builds, 
          use npm run build.
        </p>
      </div>
    </div>
  )
}

export default About
