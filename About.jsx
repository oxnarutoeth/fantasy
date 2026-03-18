import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Our Company</h1>
          <p>Transforming ideas into powerful digital experiences since 2024</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="story-content">
            <p>Founded in 2024, VishalSite started with a simple yet powerful mission: to create beautiful, functional, and high-performance websites that drive real business growth. What began as a one-person operation has evolved into a passionate, multidisciplinary team of designers, developers, and digital strategists.</p>
            <p>We believe that exceptional websites are more than just code and design – they are strategic tools that bridge the gap between businesses and their audiences. Every project we undertake is guided by our commitment to delivering solutions that drive measurable results and lasting impact.</p>
            <p>Today, we partner with businesses of all sizes to bring their digital vision to life, combining cutting-edge technology with thoughtful design to create experiences that resonate.</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Innovation</h3>
              <p>We stay ahead of industry trends and continuously explore new technologies to deliver cutting-edge solutions that give our clients a competitive edge.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality Excellence</h3>
              <p>We maintain the highest standards of craftsmanship in every project. Quality is embedded in our process, not a compromise.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Client-Centric Focus</h3>
              <p>Your success is our success. We prioritize understanding your goals and delivering solutions that exceed expectations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Transparent Partnership</h3>
              <p>We build long-term relationships based on honesty, clear communication, and integrity in all our dealings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-item">
              <h3>Expert Team</h3>
              <p>15+ years of combined experience in web design, development, and digital strategy</p>
            </div>
            <div className="why-item">
              <h3>Proven Results</h3>
              <p>100+ successful projects delivered with consistent client satisfaction rates above 98%</p>
            </div>
            <div className="why-item">
              <h3>Latest Technologies</h3>
              <p>We use modern, scalable tech stacks to ensure your website performs optimally</p>
            </div>
            <div className="why-item">
              <h3>24/7 Support</h3>
              <p>Dedicated support team ready to assist you whenever you need help</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help transform your digital presence</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </section>
    </div>
  );
}

export default About;