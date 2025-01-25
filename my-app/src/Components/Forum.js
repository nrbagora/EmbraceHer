import React, { useState, useEffect } from 'react';
import './Forum.css';

function Forum() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  // Load posts from local storage when the component mounts
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('forumPosts')) || [];
    setPosts(savedPosts);
  }, []);

  // Function to handle form submission
  const handlePostSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Please fill in both the title and content.');
      return;
    }

    const newPost = { id: Date.now(), title, content };
    const updatedPosts = [newPost, ...posts];

    setPosts(updatedPosts);
    localStorage.setItem('forumPosts', JSON.stringify(updatedPosts));

    // Clear the form
    setTitle('');
    setContent('');
  };

  return (
    <div className="forum-container">
      <h2>Share Your Story</h2>
      
      <form onSubmit={handlePostSubmit} className="post-form">
        <input
          type="text"
          placeholder="Title of your story"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Share your experience here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit" className="submit-button">Post</button>
      </form>

      <div className="posts-section">
        <h3>Community Stories</h3>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post-card">
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No stories shared yet. Be the first to share!</p>
        )}
      </div>
    </div>
  );
}

export default Forum;

/*// src/components/Forum.js
import React from 'react';

function Forum() {
  return (
    <div>
      <h2>Welcome to the Forum</h2>
      <p>Here you can share your experiences and connect with other mothers.</p>
    </div>
  );
}

export default Forum;*/

