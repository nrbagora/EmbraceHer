
import React, { useState } from 'react';
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

      {/* Button for switching between pages */}
      <div className="App-navigation">
        <button onClick={() => handleChangePage('forum')} className="page-button">
          Forum
        </button>
        <button onClick={() => handleChangePage('resources')} className="page-button">
          Resources
        </button>
      </div>

      {/* Main Content */}
      <main>
        {currentPage === 'forum' ? <Forum /> : <Resources />}
      </main>
    </div>
  );
}

export default App;




/*import React, { useState } from 'react';
import Forum from './Components/Forum';
import Resources from './Components/Resources';
import flowerImage from './flower.png';
import './App.css'


function App() {
  const [currentPage, setCurrentPage] = useState('forum');

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to EmbraceHer</h1>
      </header>

      
      <div className="App-navigation">
        <button 
          onClick={() => handleChangePage('forum')} 
          style={{ margin: '10px', padding: '10px' }}
        >
          Forum
        </button>
        <button 
          onClick={() => handleChangePage('resources')} 
          style={{ margin: '10px', padding: '10px' }}
        >
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

