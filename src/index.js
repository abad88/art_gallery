import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <HelmetProvider> {/* Wrap App with HelmetProvider */}
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </BrowserRouter>
);
