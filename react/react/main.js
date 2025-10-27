// react/main.js

// Simple React landing page script

const App = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1>Ticket Manager</h1>
        <p>Organize, track, and resolve tickets with ease.</p>
        <a href="#" className="btn">Get Started</a>
        <a href="#" className="btn" style={{ marginLeft: '10px' }}>Login</a>
      </div>

      {/* Decorative circle */}
      <svg className="deco-circle" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#3b82f6" />
      </svg>

      {/* Wavy SVG background */}
      <svg className="hero-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f9fafb" fillOpacity="1" d="M0,160L60,144C120,128,240,96,360,80C480,64,600,64,720,101.3C840,139,960,213,1080,245.3C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  );
};

// Render the app into the page
ReactDOM.render(<App />, document.getElementById('root'));
