import "./App.css";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import JewelryPage from "./pages/JewelryDetail/JewelryPage";
import HomeDecPage from "./pages/HomeDec/HomeDecPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"; // Import the error page
import logo from "../../art_gallery/src/assets/images/logo.jpg";

// Lazy load the components
const Home = lazy(() => import("./pages/Home/Home"));
const ContactUs = lazy(() => import("./pages/Contact/ContactUs"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ArtPage = lazy(() => import("./pages/Art/ArtPage"));
const Terms = lazy(() => import("./pages/Terms/Terms"));
const Policy = lazy(() => import("./pages/Policy/Policy"));
const Art = lazy(() => import("./pages/ArtCat/Art"));
const Jewelery = lazy(() => import("./pages/Jewelery/Jewelery"));
const HomeDecor = lazy(() => import("./pages/DecCat/HomeDecor"));

function App() {
  const [loading, setLoading] = useState(false); // Loader state
  const [mobileNav, setMobileNav] = useState(false); // Mobile Nav state
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Show loader on route change
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2500);
    return () => clearTimeout(timer); // Cleanup timeout
  }, [location]);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {loading && <Loader />}
      {mobileNav && (
        <div className="n">
          <RxCross1 onClick={handleMobileNav} />
          <img src={logo} alt="logo" className="pic" />
          <Link to="/" onClick={handleMobileNav}>
            Home
          </Link>
          <Link to="/about-us" onClick={handleMobileNav}>
            About Us
          </Link>
          <Link to="/category-art" onClick={handleMobileNav}>
            Art
          </Link>
          <Link to="/category-jewelry" onClick={handleMobileNav}>
            Jewelry
          </Link>
          <Link to="/category-home-decor" onClick={handleMobileNav}>
            Home Decoration
          </Link>
          <Link to="/contact-us" onClick={handleMobileNav}>
            Contact Us
          </Link>
        </div>
      )}
      <div className="App">
        <div className="hamOption">
          <GiHamburgerMenu onClick={handleMobileNav} />
        </div>
        <nav className="navbar">
          <img alt="logo" src={logo} className="navLogo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/category-art">Art</Link>
            </li>
            <li>
              <Link to="/category-jewelry">Jewelry</Link>
            </li>
            <li>
              <Link to="/category-home-decor">Home-Decoration</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/art/:title" element={<ArtPage />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/privacy-policy" element={<Policy />} />
            <Route path="/category-art" element={<Art />} />
            <Route path="/category-jewelry" element={<Jewelery />} />
            <Route path="/jewelry/:title" element={<JewelryPage />} />
            <Route path="/category-home-decor" element={<HomeDecor />} />
            <Route path="/home-decor/:title" element={<HomeDecPage />} />
            <Route path="*" element={<ErrorPage />} />{" "}
            {/* Catch-all route for unmatched paths */}
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
