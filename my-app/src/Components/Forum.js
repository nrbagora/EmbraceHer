import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  // Generate anonymous user ID
  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      localStorage.setItem("userId", uuidv4());
    }
  }, []);

  const handlePost = () => {
    if (newPost.trim() === "") return;
    const userId = localStorage.getItem("userId");
    const post = { id: Date.now(), userId, content: newPost };
    setPosts([post, ...posts]);
    setNewPost(""); // Clear input field
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Anonymous Forum</h2>
      <textarea
        placeholder="Share your thoughts..."
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        rows="4"
        style={{ width: "100%", padding: "10px" }}
      ></textarea>
      <button onClick={handlePost} style={{ marginTop: "10px" }}>
        Post
      </button>

      <div style={{ marginTop: "20px" }}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <strong>Anonymous User {post.userId.slice(0, 8)}:</strong>
              <p>{post.content}</p>
            </div>
          ))
        ) : (
          <p>No posts yet. Be the first to share your thoughts!</p>
        )}
      </div>
    </div>
  );
};

export default Forum;
