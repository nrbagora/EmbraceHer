import React, { useState } from 'react';
import './Login.css';

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (isSignup) {
      // In a real app, you'd send this to a backend to create an account
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      alert('Account created successfully! Please log in.');
      setIsSignup(false);
    } else {
      // Check against stored credentials
      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        onLoginSuccess();
      } else {
        setError('Invalid email or password.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <p onClick={() => setIsSignup(!isSignup)} className="toggle-link">
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
      </p>
    </div>
  );
}

export default Login;
