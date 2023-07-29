// LoginPage.js

import React from 'react';
import LoginForm from './LoginForm';

function LoginPage() {

  const handleLogin = () => {
    console.log('Logged in!'); 
  }
  
  const handleError = () => {
    console.log('Error logging in');
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      
      <LoginForm 
        onLogin={handleLogin}
        onError={handleError}
      />
    </div>
  );
}

export default LoginPage;
