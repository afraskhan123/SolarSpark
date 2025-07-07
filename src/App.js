import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Detect user location
    const detectLocation = async () => {
      try {
        // Try to get location from IP geolocation API
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setUserLocation(data.country_code);
      } catch (error) {
        console.log('Could not detect location, defaulting to international view');
        setUserLocation('INT'); // International
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  const isInPakistan = userLocation === 'PK';

  return (
    <Router>
      <div className="App">
        <Header isInPakistan={isInPakistan} />
        <main>
          <Routes>
            <Route path="/" element={<Home isInPakistan={isInPakistan} />} />
            <Route path="/about" element={<About isInPakistan={isInPakistan} />} />
            <Route path="/services" element={<Services isInPakistan={isInPakistan} />} />
            <Route path="/contact" element={<Contact isInPakistan={isInPakistan} />} />
          </Routes>
        </main>
        <Footer isInPakistan={isInPakistan} />
      </div>
    </Router>
  );
}

export default App; 