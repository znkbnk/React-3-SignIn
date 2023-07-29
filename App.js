// App.js

import React from 'react';
import './App.css';
import SignInForm from './SignInForm';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Login Form</h1>
      </header>
      <main className="app-main">
        <SignInForm />
      </main>
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
}

export default App;
