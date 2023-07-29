// LoginForm.js

import { useState } from 'react';

function LoginForm({ onLogin, onError }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await login(email, password);
      onLogin();
    } catch (err) {
      onError();
    } finally {
      setLoading(false); 
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <button 
        className="submit-btn"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Log In'}
      </button>
    </form>
  );
}

// Login logic
async function login(email, password) {
  // API call  
  return { user: { id: '123' } }; 
}

export default LoginForm;
