// SignInForm.js

import React, { useState, useEffect } from 'react';
import './SignInForm.css'; // Import the CSS file for styling

const SignInForm = () => {
  // Step 3: Set up component state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Step 7: Validate function
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

  // Step 8: Login user function
  const loginUser = async () => {
    // Simulate a delay for demonstration purposes
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Replace this with actual API call to /login endpoint
    const response = { user: { /* User data if login successful */ } };
    
    setLoading(false);
    return response;
  };

  // Step 6: Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      const response = await loginUser();
      if (response.user) {
        // Redirect user here (e.g., using React Router)
        alert('Login successful!');
      } else {
        setErrors({ form: 'Invalid credentials' });
      }
    }
  };

  // Step 5: Create input fields
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
