import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = ({ isInPakistan }) => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>
              {isInPakistan 
                ? "About SolarSpark"
                : "About Our Company"
              }
            </h1>
            <p>
              {isInPakistan 
                ? "Leading the solar revolution in Pakistan with innovative solutions and unwavering commitment to quality."
                : "A Pakistan-based solar energy company making waves in the global renewable energy market."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, SolarSpark began with a simple mission: to make solar energy accessible 
                to every Pakistani household and business. What started as a small team of passionate engineers 
                has grown into one of Pakistan's most trusted solar energy companies.
              </p>
              <p>
                {isInPakistan 
                  ? "Today, we're proud to serve communities across Pakistan, from the bustling cities of Lahore and Karachi to the remote villages in the mountains. Our commitment to quality, innovation, and customer satisfaction has made us the preferred choice for solar solutions in Pakistan."
                  : "Today, we're expanding our reach globally while maintaining our strong roots in Pakistan. Our expertise in solar technology and commitment to quality has earned us recognition in international markets."
                }
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="SolarSpark Team and Operations"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To accelerate the adoption of solar energy in Pakistan and beyond, making clean, 
                affordable energy accessible to everyone while contributing to a sustainable future.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading solar energy company in Pakistan and a recognized global player 
                in renewable energy solutions, driving the transition to a clean energy future.
              </p>
            </div>
            
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality, Innovation, Sustainability, Customer Focus, and Integrity guide everything 
                we do, from product selection to customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <p className="section-subtitle">
            {isInPakistan 
              ? "Meet the experts behind Pakistan's solar revolution"
              : "Meet our international team of solar experts"
            }
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src={require('./images/ceo.jpeg')} alt="Ahmed Khan" style={{width: '50%', height: '30%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <h3>Sulaiman Khan</h3>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">
                {isInPakistan 
                  ? "A Pakistani engineer with 5+ years of experience in renewable energy, leading our mission to bring solar power to every home in Pakistan."
                  : "A Pakistani engineer with 5+ years of experience in renewable energy, leading our global expansion while maintaining our commitment to quality."
                }
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
              <img src={require('./images/td.png')} alt="Ahmed Khan" style={{width: '50%', height: '30%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <h3>Afrasiyab</h3>
              <p className="member-role">Technical Director</p>
              <p className="member-bio">
                Expert in solar system design and optimization, ensuring every installation meets the highest standards of efficiency and reliability.
              </p>
            </div>
            
            <div className="team-member">
              <div className="member-avatar">
              <img src={require('./images/dir.png')} alt="Ahmed Khan" style={{width: '50%', height: '30%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <h3>Uzair Khan</h3>
              <p className="member-role">Operations Manager</p>
              <p className="member-bio">
                Oversees all installation and maintenance operations, ensuring smooth project delivery and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section achievements-section">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">500+</div>
              <div className="achievement-label">Successful Installations</div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-number">5+</div>
              <div className="achievement-label">Years of Excellence</div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-number">98%</div>
              <div className="achievement-label">Customer Satisfaction</div>
            </div>
            
            <div className="achievement-item">
              <div className="achievement-number">15+</div>
              <div className="achievement-label">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Specific Content */}
      {isInPakistan ? (
        <section className="section pakistan-about">
          <div className="container">
            <div className="pakistan-about-content">
              <h2>Why Choose SolarSpark?</h2>
              <div className="reasons-grid">
                <div className="reason-item">
                  <h3>🇵🇰 Local Expertise</h3>
                  <p>Deep understanding of Pakistani energy regulations, climate conditions, and market dynamics.</p>
                </div>
                <div className="reason-item">
                  <h3>🏠 Local Presence</h3>
                  <p>Offices and service centers across major Pakistani cities for quick response and support.</p>
                </div>
                <div className="reason-item">
                  <h3>💰 Local Financing</h3>
                  <p>Partnerships with Pakistani banks for easy financing options and payment plans.</p>
                </div>
                <div className="reason-item">
                  <h3>🔧 Local Support</h3>
                  <p>24/7 local customer support and maintenance services in Urdu and English.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section international-about">
          <div className="container">
            <div className="international-about-content">
              <h2>Global Reach, Pakistani Quality</h2>
              <div className="global-features">
                <div className="global-feature">
                  <h3>🌍 International Standards</h3>
                  <p>All our products meet international quality standards and certifications.</p>
                </div>
                <div className="global-feature">
                  <h3>🚢 Global Shipping</h3>
                  <p>Efficient logistics network for worldwide delivery of solar products.</p>
                </div>
                <div className="global-feature">
                  <h3>🌐 Multi-language Support</h3>
                  <p>Customer service available in multiple languages for global clients.</p>
                </div>
                <div className="global-feature">
                  <h3>📞 24/7 Global Support</h3>
                  <p>Round-the-clock technical support for international customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>
              {isInPakistan 
                ? "Join thousands of satisfied customers who have chosen SolarSpark for their energy needs."
                : "Experience the quality and expertise that has made us a trusted name in solar energy."
              }
            </p>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 