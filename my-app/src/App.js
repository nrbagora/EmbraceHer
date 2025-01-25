import React, { useState } from 'react';
import Forum from './Components/Forum';
import Resources from './Components/Resources';
import TherapistsPage from './Components/Therapists';
import Login from './Components/Login';
import BreathingExercises from './Components/BreathingExercises';
import Comments from './Components/Comment'; // Import the new Comments component
import flowerImage from './flower.png';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null); // Track the selected post for comments

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('forum');
  };

  const handleViewComments = (postId) => {
    setSelectedPostId(postId);
    setCurrentPage('comments'); // Navigate to the comments page
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
            {currentPage === 'forum' && <Forum onViewComments={handleViewComments} />}
            {currentPage === 'resources' && <Resources />}
            {currentPage === 'therapists' && <TherapistsPage />}
            {currentPage === 'breathingExercises' && <BreathingExercises />}
            {currentPage === 'comments' && (
              <Comments postId={selectedPostId} onBack={() => setCurrentPage('forum')} />
            )}
          </main>
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;