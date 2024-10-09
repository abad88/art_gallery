import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Navbar';
import ContactUs from './pages/Contact/ContactUs';
import { Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
