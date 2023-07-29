// SignInForm.js

import React, { useState  } from 'react';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const loginUser = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = { user: { /* User data if login successful */ } };
    
    setLoading(false);
    return response;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      const response = await loginUser();
      if (response.user) {
        alert('Login successful!');
      } else {
        setErrors({ form: 'Invalid credentials' });
      }
    }
  };

  return (
    <form className="signin-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      {errors.form && <span className="error">{errors.form}</span>}

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default SignInForm;
