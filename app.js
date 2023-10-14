  // App.js
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter
  import 'bootstrap/dist/css/bootstrap.min.css';

  import HomePage from './HomePage';
  import LoginPage from './LoginPage';
  import RegistrationPage from './RegistrationPage';

  function App() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">Food Delivery</a>
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </div>
      </Router> // Wrap your routes with BrowserRouter
    );
  }

  export default App;
