import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ isInPakistan }) => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>
              {isInPakistan 
                ? "Pakistan's Leading Solar Energy Company"
                : "Global Solar Energy Solutions"
              }
            </h1>
            <p>
              {isInPakistan 
                ? "Transform your energy future with Pakistan's most trusted solar panel installation and maintenance services. Save money while saving the planet."
                : "Discover innovative solar solutions from our Pakistan-based company expanding globally. Quality solar panels and expert installation worldwide."
              }
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                {isInPakistan ? "Get Free Quote" : "Explore Services"}
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            {isInPakistan ? "Why Choose Solar Pakistan?" : "Why Choose Our Solar Solutions?"}
          </h2>
          <p className="section-subtitle">
            {isInPakistan 
              ? "We're your local experts with global standards"
              : "International quality with local expertise"
            }
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">☀️</div>
              <h3>High-Quality Panels</h3>
              <p>Premium solar panels with 25+ year warranty and maximum efficiency ratings.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Expert Installation</h3>
              <p>Certified technicians with years of experience in solar system installation.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Cost Savings</h3>
              <p>Reduce your electricity bills by up to 90% with our solar solutions.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Reduce your carbon footprint and contribute to a sustainable future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Specific Section */}
      {isInPakistan ? (
        <section className="section pakistan-section">
          <div className="container">
            <div className="pakistan-content">
              <div className="pakistan-text">
                <h2>Your Local Solar Partner in Pakistan</h2>
                <p>As Pakistan's premier solar energy company, we understand the unique energy challenges and opportunities in our country. Our local presence means:</p>
                <ul>
                  <li>Quick response times and local support</li>
                  <li>Understanding of Pakistani regulations and incentives</li>
                  <li>Local financing options and payment plans</li>
                  <li>After-sales service and maintenance</li>
                </ul>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
              <div className="pakistan-image">
                <div className="image-placeholder">🇵🇰</div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section international-section">
          <div className="container">
            <div className="international-content">
              <div className="international-text">
                <h2>Global Solar Solutions from Pakistan</h2>
                <p>While we're headquartered in Pakistan, our solar expertise and quality standards are recognized worldwide. We offer:</p>
                <ul>
                  <li>International shipping and logistics</li>
                  <li>Global warranty and support</li>
                  <li>Multi-language customer service</li>
                  <li>Compliance with international standards</li>
                </ul>
                <Link to="/services" className="btn btn-primary">View Our Services</Link>
              </div>
              <div className="international-image">
                <div className="image-placeholder">🌍</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Installations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Go Solar?</h2>
            <p>
              {isInPakistan 
                ? "Join thousands of Pakistani families who have already switched to solar energy."
                : "Join our global community of solar energy adopters."
              }
            </p>
            <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 