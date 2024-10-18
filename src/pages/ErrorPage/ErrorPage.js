// src/pages/ErrorPage/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; // Add styles if necessary

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
