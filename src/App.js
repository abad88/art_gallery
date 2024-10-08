import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home';
import ContactUs from './pages/Contact/ContactUs';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Art Gallery</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
