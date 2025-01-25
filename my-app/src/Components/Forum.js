import React, { useState, useEffect } from 'react';
import './Forum.css';


function Forum() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [dmRecipient, setDmRecipient] = useState(null);


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


    const username = localStorage.getItem('username') || 'Anonymous';
    const newPost = {
      id: Date.now(),
      title,
      content,
      username,
      comments: [], // Add comments array to the post
    };


    const updatedPosts = [newPost, ...posts];


    setPosts(updatedPosts);
    localStorage.setItem('forumPosts', JSON.stringify(updatedPosts));


    // Clear the form
    setTitle('');
    setContent('');
  };


  // Function to add a comment to a post
  const addComment = (postId, commentText) => {
    if (!commentText.trim()) {
      alert('Comment cannot be empty.');
      return;
    }


    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? {
            ...post,
            comments: [...post.comments, { id: Date.now(), text: commentText }],
          }
        : post
    );


    setPosts(updatedPosts);
    localStorage.setItem('forumPosts', JSON.stringify(updatedPosts));
  };


  // Function to handle opening a direct message
  const openDM = (username) => {
    if (!username) {
      alert('This user has no username associated for messaging.');
      return;
    }
    setDmRecipient(username);
    alert(`Direct message started with ${username}`);
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
              <p className="post-author">Posted by: {post.username || 'Anonymous'}</p>
              <button
                onClick={() => openDM(post.username)}
                className="message-button"
              >
                Message {post.username || 'Anonymous'}
              </button>


              {/* Comments Section */}
              <div className="comments-section">
                <h5>Comments:</h5>
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <p key={comment.id} className="comment">{comment.text}</p>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        addComment(post.id, e.target.value);
                        e.target.value = '';
                      }
                    }}
                  />
                </div>
              </div>
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





