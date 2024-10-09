import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Navbar';
import ContactUs from './pages/Contact/ContactUs';
import { Link, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(false); // Loader state
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 5 seconds
    }, 2000);
    // Cleanup timeout when component unmounts or location changes
    return () => clearTimeout(timer);
  }, [location]); // Effect runs when route (location) changes

  return (
    <>
      {loading && <Loader />}
      <div className="App">
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        {/* <Loader /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
