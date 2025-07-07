import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = ({ isInPakistan }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_khdhf6v', // Service ID
      'template_2f9fu8e', // Template ID
      formData, // This object should match your template variables
      'Rmd90O3RP1s0Qs78X' // Replace with your EmailJS Public Key from dashboard
    )
    .then((result) => {
      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
      console.error('Email send failed:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>
              {isInPakistan 
                ? "Contact Solar Pakistan"
                : "Contact Us"
              }
            </h1>
            <p>
              {isInPakistan 
                ? "Get in touch with Pakistan's leading solar energy company. We're here to help you go solar."
                : "Get in touch with our global solar energy experts. We're here to help you with your solar needs."
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              
              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  ❌ Failed to send message. Please try again or contact us directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="contact-form" data-netlify="true" name="contact">
                <input type="hidden" name="form-name" value="contact" />
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={isInPakistan ? "+92 3xx-xxxxxxx" : "+92 3xx-xxxxxxx"}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Solar</option>
                    <option value="commercial">Commercial Solar</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="consultation">Energy Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your solar energy needs..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
            
            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              <p>
                {isInPakistan 
                  ? "Ready to start your solar journey? Contact us today for a free consultation."
                  : "Ready to explore solar solutions? Contact our international team today."
                }
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Address</h3>
                    <p>
                      {isInPakistan 
                        ? "Solar Pakistan Headquarters<br/>Lahore, Pakistan"
                        : "Nehr Park, Sharif Abad, Takht Bhai, District Mardan"
                      }
                    </p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+92 315-7757075</p>
                    {isInPakistan && <p>+92 3xx-xxxxxxx</p>}
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>solarsparkpvtltd@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {isInPakistan && (
                <div className="pakistan-specific">
                  <h3>🇵🇰 Pakistan-Specific Support</h3>
                  <ul>
                    <li>Urdu language support available</li>
                    <li>Local financing options</li>
                    <li>Free site assessment</li>
                    <li>24/7 emergency support</li>
                  </ul>
                </div>
              )}
              
              {!isInPakistan && (
                <div className="international-support">
                  <h3>🌍 International Support</h3>
                  <ul>
                    <li>Multi-language customer service</li>
                    <li>Global shipping available</li>
                    <li>International warranty</li>
                    <li>24/7 technical support</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much does a solar system cost?</h3>
              <p>
                {isInPakistan 
                  ? "Solar system costs in Pakistan start from PKR 150,000 for residential systems. The exact cost depends on your energy consumption and system size."
                  : "Solar system costs vary by location and system size. Our international packages start from $1,500. Contact us for a customized quote."
                }
              </p>
            </div>
            
            <div className="faq-item">
              <h3>How long does installation take?</h3>
              <p>
                {isInPakistan 
                  ? "Residential installations typically take 3-5 days in Pakistan. Commercial projects may take 1-2 weeks depending on size."
                  : "Installation time varies by project size and location. Residential projects typically take 3-7 days, commercial projects 1-3 weeks."
                }
              </p>
            </div>
            
            <div className="faq-item">
              <h3>What warranty do you provide?</h3>
              <p>
                {isInPakistan 
                  ? "We provide 5-10 year warranties on our solar systems in Pakistan, with 25-year panel warranties from manufacturers."
                  : "We provide comprehensive warranties ranging from 5-10 years on systems, with 25-year panel warranties from manufacturers."
                }
              </p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer financing options?</h3>
              <p>
                {isInPakistan 
                  ? "Yes, we partner with Pakistani banks to offer easy financing options and flexible payment plans for solar installations."
                  : "Yes, we offer various financing options for international customers, including leasing and payment plans."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Our Location</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>
                {isInPakistan 
                  ? "Solar Pakistan Headquarters"
                  : "Global Headquarters"
                }
              </h3>
              <p>Takht Bhai, District Mardan, Pakistan</p>
              <p>Visit our office for a personal consultation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 