import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Placeholder components for testing
function Forum() {
  return <h2>Forum Page</h2>;
}

function Resources() {
  return <h2>Resources Page</h2>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to EmbraceHer</h1>
        <nav>
          <ul>
            <li><Link to="/">Forum</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;




