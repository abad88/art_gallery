import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Navbar';
import ContactUs from './pages/Contact/ContactUs';
import { Link, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import AboutUs from './pages/AboutUs/AboutUs';
import ArtPage from './pages/Art/ArtPage';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Terms from './pages/Terms/Terms';
import Policy from './pages/Policy/Policy';
import Art from './pages/ArtCat/Art';
import Jewelery from './pages/Jewelery/Jewelery';
import HomeDecor from './pages/DecCat/HomeDecor';

function App() {
  const [loading, setLoading] = useState(false); // Loader state
  const [mobileNav, setMobileNav] = useState(false); // Loader state
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

  const handleMobileNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      {loading && <Loader />}
      {mobileNav &&
        <div className='n'>
          <RxCross1 onClick={handleMobileNav} />
          <Link to="/" onClick={handleMobileNav}>Home</Link>
          <Link to="/contact-us" onClick={handleMobileNav}>Contact Us</Link>
          <Link to="/about-us" onClick={handleMobileNav}>About Us</Link>
        </div>
      }
      <div className="App">
        <div className='hamOption'>
          <GiHamburgerMenu onClick={handleMobileNav} />
        </div>
        <nav className='navbar'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/category-art">Art</Link></li>
            <li><Link to="/category-jewelry">Jewelry</Link></li>
            <li><Link to="/category-home-decor">Home-Decoration</Link></li>
          </ul>
        </nav>
        {/* <Loader /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/art' element={<ArtPage />} />
          <Route path='/terms-and-conditions' element={<Terms />} />
          <Route path='/privacy-policy' element={<Policy />} />
          <Route path='/category-art' element={<Art />} />
          <Route path='/category-jewelry' element={<Jewelery />} />
          <Route path='/category-home-decor' element={<HomeDecor />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
