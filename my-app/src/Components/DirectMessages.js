import React, { useState } from 'react';
import './DirectMessages.css';

function DirectMessages({ recipient, onBack }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      content: message,
      sender: 'You', // Replace with the current user's username if available
      recipient,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]); // Add the new message to the chat
    setMessage(''); // Clear the input field
  };

  return (
    <div className="dm-container">
      <h2>Chat with {recipient}</h2>
      <div className="messages-list">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}
            >
              <strong>{msg.sender}: </strong>
              <span>{msg.content}</span>
            </div>
          ))
        ) : (
          <p>No messages yet. Start the conversation!</p>
        )}
      </div>
      <div className="dm-input">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          rows="3" // Set a default height for the textarea
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <button onClick={onBack} className="back-button">Back to Forum</button>
    </div>
  );
}

export default DirectMessages;