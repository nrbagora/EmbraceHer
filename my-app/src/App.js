import React, { useState } from 'react';
import Forum from './Components/Forum';
import Resources from './Components/Resources';
import TherapistsPage from './Components/Therapists';
import Login from './Components/Login';
import BreathingExercises from './Components/BreathingExercises';
import flowerImage from './flower.png';
import './App.css';

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
            <button onClick={() => setCurrentPage('therapists')} className="page-button">
              Therapists
            </button>
            <button onClick={() => setCurrentPage('breathingExercises')} className="page-button">
              Breathing Exercises
            </button>
          </div>

          <main>
            {currentPage === 'forum' && <Forum />}
            {currentPage === 'resources' && <Resources />}
            {currentPage === 'therapists' && <TherapistsPage />}
            {currentPage === 'breathingExercises' && <BreathingExercises />}
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
import TherapistsPage from './Components/Therapists';
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
            <button onClick={() => setCurrentPage('therapists')} className="page-button">
              Therapists
            </button>
          </div>

          <main>
            {currentPage === 'forum' && <Forum />}
            {currentPage === 'resources' && <Resources />}
            {currentPage === 'therapists' && <TherapistsPage />}
          </main>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;*/


