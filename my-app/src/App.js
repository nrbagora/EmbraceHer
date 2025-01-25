import React, { useState } from 'react';
import Forum from './Components/Forum';
import Resources from './Components/Resources';
import flowerImage from './flower.png';
import './App.css';
import Login from './Components/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('forum');
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <header className="App-header">
            <img src={flowerImage} alt="Cute flower" className="cute-image" />
            <h1>Welcome to EmbraceHer</h1>
          </header>

          <div className="App-navigation">
            <button onClick={() => setCurrentPage('forum')} className="page-button">
              Forum
            </button>
            <button onClick={() => setCurrentPage('resources')} className="page-button">
              Resources
            </button>
          </div>

          <main>
            {currentPage === 'forum' ? <Forum /> : <Resources />}
          </main>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;

/*import React, { useState } from 'react';
import Forum from './Components/Forum';
import Resources from './Components/Resources';
import flowerImage from './flower.png'; // Your image from src folder
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('forum');

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={flowerImage} alt="Cute flower" className="cute-image" />
        <h1>Welcome to EmbraceHer</h1>
      </header>
      <div className="App-navigation">
        <button onClick={() => handleChangePage('forum')} className="page-button">
          Forum
        </button>
        <button onClick={() => handleChangePage('resources')} className="page-button">
          Resources
        </button>
      </div>

      <main>
        {currentPage === 'forum' ? <Forum /> : <Resources />}
      </main>
    </div>
  );
}

export default App;*/
