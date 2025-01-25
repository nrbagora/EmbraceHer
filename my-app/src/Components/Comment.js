// src/Components/Comments.js
import React, { useState } from 'react';
import './Comment.css'; // Optional: Create a CSS file for styling

function Comments({ postId, onBack }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      content: comment,
      author: 'You', // Replace with the current user's username if available
    };

    setComments((prevComments) => [...prevComments, newComment]);
    setComment(''); // Clear the input field
  };

  return (
    <div className="comments-container">
      <h2>Comments for Post {postId}</h2>
      <div className="comments-list">
        {comments.length > 0 ? (
          comments.map((c) => (
            <div key={c.id} className="comment">
              <strong>{c.author}: </strong>
              <span>{c.content}</span>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
      <div className="comment-input">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment..."
          rows="3"
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <button onClick={onBack} className="back-button">Back to Forum</button>
    </div>
  );
}

export default Comments;