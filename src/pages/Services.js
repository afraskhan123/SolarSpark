import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import emailjs from 'emailjs-com';

const Services = ({ isInPakistan }) => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>
              {isInPakistan 
                ? "Solar Services in Pakistan"
                : "Global Solar Services"
              }
            </h1>
            <p>
              {isInPakistan 
                ? "Comprehensive solar solutions tailored for Pakistani homes and businesses"
                : "World-class solar services available globally with Pakistani expertise"
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            {isInPakistan 
              ? "Complete solar solutions for every need in Pakistan"
              : "Complete solar solutions available worldwide"
            }
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Residential Solar</h3>
              <p>Complete solar solutions for homes, from small apartments to large villas.</p>
              <ul>
                <li>Solar panel installation</li>
                <li>Inverter systems</li>
                <li>Battery backup solutions</li>
                <li>Net metering setup</li>
              </ul>
              {/* <div className="service-price">
                {isInPakistan ? "Starting from PKR 150,000" : "Starting from $1,500"}
              </div> */}
              
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
            
            <div className="service-card featured">
              <div className="service-icon">🏢</div>
              <h3>Commercial Solar</h3>
              <p>Large-scale solar solutions for businesses, factories, and commercial buildings.</p>
              <ul>
                <li>Industrial solar systems</li>
                <li>Commercial installations</li>
                <li>Energy management systems</li>
                <li>Maintenance contracts</li>
              </ul>
              {/* <div className="service-price">
                {isInPakistan ? "Starting from PKR 500,000" : "Starting from $5,000"}
              </div> */}
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance & Repair</h3>
              <p>Professional maintenance and repair services to keep your system running efficiently.</p>
              <ul>
                <li>Regular maintenance</li>
                <li>System diagnostics</li>
                <li>Panel cleaning</li>
                <li>Emergency repairs</li>
              </ul>
              {/* <div className="service-price">
                {isInPakistan ? "Starting from PKR 5,000" : "Starting from $50"}
              </div> */}
              <Link to="/contact" className="btn btn-primary">Schedule Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section additional-services">
        <div className="container">
          <h2 className="section-title">Additional Services</h2>
          <div className="additional-services-grid">
            <div className="additional-service">
              <div className="service-icon">📊</div>
              <h3>Energy Audits</h3>
              <p>Comprehensive energy consumption analysis and optimization recommendations.</p>
            </div>
            
            <div className="additional-service">
              <div className="service-icon">💡</div>
              <h3>System Design</h3>
              <p>Custom solar system design optimized for your specific needs and location.</p>
            </div>
            
            <div className="additional-service">
              <div className="service-icon">📋</div>
              <h3>Permits & Documentation</h3>
              <p>Assistance with all necessary permits, approvals, and documentation.</p>
            </div>
            
            <div className="additional-service">
              <div className="service-icon">🎓</div>
              <h3>Training & Support</h3>
              <p>Comprehensive training for your staff on system operation and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Free initial consultation to understand your energy needs and requirements.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Site Assessment</h3>
              <p>Detailed site survey and energy consumption analysis.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>System Design</h3>
              <p>Custom solar system design optimized for your specific needs.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Installation</h3>
              <p>Professional installation by certified technicians.</p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3>Commissioning</h3>
              <p>System testing, commissioning, and handover with training.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Specific Services */}
      {isInPakistan ? (
        <section className="section pakistan-services">
          <div className="container">
            <h2 className="section-title">Pakistan-Specific Services</h2>
            <div className="pakistan-services-content">
              <div className="pakistan-service-item">
                <h3>🇵🇰 Net Metering Support</h3>
                <p>Complete assistance with DISCO net metering applications and approvals.</p>
              </div>
              
              <div className="pakistan-service-item">
                <h3>🏦 Local Financing</h3>
                <p>Partnerships with Pakistani banks for easy financing options and payment plans.</p>
              </div>
              
              <div className="pakistan-service-item">
                <h3>📞 Urdu Support</h3>
                <p>Customer service and technical support available in Urdu and English.</p>
              </div>
              
              <div className="pakistan-service-item">
                <h3>🏛️ Regulatory Compliance</h3>
                <p>Expert knowledge of Pakistani energy regulations and compliance requirements.</p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="section international-services">
          <div className="container">
            <h2 className="section-title">International Services</h2>
            <div className="international-services-content">
              <div className="international-service-item">
                <h3>🌍 Global Shipping</h3>
                <p>Efficient international shipping and logistics for solar products worldwide.</p>
              </div>
              
              <div className="international-service-item">
                <h3>🌐 Multi-language Support</h3>
                <p>Customer service available in multiple languages for global clients.</p>
              </div>
              
              <div className="international-service-item">
                <h3>📋 International Compliance</h3>
                <p>Products and services compliant with international standards and certifications.</p>
              </div>
              
              <div className="international-service-item">
                <h3>💱 Multi-currency Support</h3>
                <p>Flexible payment options in multiple currencies for international customers.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">
            {isInPakistan ? "Pakistani Pricing" : "International Pricing"}
          </h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic Package</h3>
              <div className="price">
                {isInPakistan ? "PKR 150,000" : "$1,500"}
              </div>
              <ul>
                <li>3kW Solar System</li>
                <li>6 Solar Panels</li>
                <li>1 Inverter</li>
                <li>Basic Installation</li>
                <li>1 Year Warranty</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
            </div>
            
            <div className="pricing-card featured">
              <h3>Standard Package</h3>
              <div className="price">
                {isInPakistan ? "PKR 300,000" : "$3,000"}
              </div>
              <ul>
                <li>5kW Solar System</li>
                <li>10 Solar Panels</li>
                <li>1 Inverter</li>
                <li>Professional Installation</li>
                <li>5 Year Warranty</li>
                <li>Maintenance Included</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
            
            <div className="pricing-card">
              <h3>Premium Package</h3>
              <div className="price">
                {isInPakistan ? "PKR 500,000" : "$5,000"}
              </div>
              <ul>
                <li>10kW Solar System</li>
                <li>20 Solar Panels</li>
                <li>2 Inverters</li>
                <li>Premium Installation</li>
                <li>10 Year Warranty</li>
                <li>24/7 Support</li>
                <li>Battery Backup</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Get Quote</Link>
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
                ? "Get your free consultation and quote today. Join thousands of Pakistani families who have already switched to solar."
                : "Get your free consultation and quote today. Experience world-class solar solutions from Pakistan."
              }
            </p>
            <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 