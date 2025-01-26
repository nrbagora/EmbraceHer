import React, { useState, useEffect } from 'react';
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
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [selectedPostId, setSelectedPostId] = useState(null); // Track the selected post for comments

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setCurrentPage('forum');
  };

  const handleViewComments = (postId) => {
    setSelectedPostId(postId);
    setCurrentPage('comments'); // Navigate to the comments page
  };

  const quotes = [
    "You are doing an amazing job, even on the tough days!",
    "Your body is incredible, and it just brought a life into the world!",
    "Take it one moment at a time, you don’t have to have it all figured out!",
    "Rest when you can, your well-being matters just as much as your baby’s!",
    "It’s okay to ask for help, you don’t have to do it alone!"
  ];

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000); // Change quote every 10 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <header className="App-header">
            <img src={flowerImage} alt="Cute flower" className="cute-image" />
            <h1>Welcome to EmbraceHer</h1>
          </header>

           {/* Quote Section */}
          <section className="quote-section">
            <h2>Daily Reminder: </h2>
            <p className="quote">{quotes[quoteIndex]}</p>
          </section>

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