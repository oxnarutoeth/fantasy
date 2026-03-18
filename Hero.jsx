import { useState, useEffect } from "react";
import './Hero.css';
import "./PremiumClients.css";
import "./ClientsSection.css"; 
import "./MatchForm.css";


function Hero() {
  const images = [
    "https://img.sanishtech.com/u/04ee0554f84032905f3c06241c94bde9.jpg",
    "https://img.sanishtech.com/u/95a90e2ce754087afde650a801af69f0.jpg",
    "https://img.sanishtech.com/u/95a90e2ce754087afde650a801af69f0.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
      <div className="overlay"></div>

      <div className="floating-hearts">
        <div className="heart">💗</div>
        <div className="heart">❤️‍🔥</div>
        <div className="heart">🎸</div>
        <div className="heart">💋</div>
        <div className="heart">👩‍❤️‍👨</div>
      </div>

      <div
        className="cursor-heart"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          opacity: 0.3,
        }}
      >
        ❤️
      </div>

      <div className={`hero-content ${isVisible ? "visible" : ""}`}>
        <h1 className="hero-title">
          Find Your <span>Perfect Match</span>
        </h1>

        <p className="hero-subtitle">
          Where meaningful connections begin. Join thousands of singles finding love every day.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            <span>Start Dating</span>
          </button>
          <button className="btn-glass">Find Matches</button>
        </div>
      </div>
    </section>
    <PremiumClients />  
    <ClientsSection />
    <MatchForm />
    
    </>
  );
}

// premium clients section component

export function PremiumClients() {
  const clients = [
    {
      name: "Sophia",
      logo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Emma",
      logo: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Olivia",
      logo: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "Liam",
      logo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Noah",
      logo: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "James",
      logo: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  ];

  return (
    <section className="premium-clients">
      <div className="container">

        <h2 className="section-title">Our Premium Clients</h2>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div className="client-card" key={index}>
              <img src={client.logo} alt={client.name} />
              <p>{client.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    
  );
}

// clients section component 

export function ClientsSection() {
  return (
    <section className="clients-section">

      <div className="container">

        {/* HEADER */}
        <div className="section-header">

          <h2 className="section-title">
            They Found Their <span className="highlight-text">Forever</span>
          </h2>

          <p className="section-desc">
            Over <b style={{color:"#FF2E75"}}>480,000 couples</b> found love using Amore.
          </p>

        </div>

        {/* STATS */}
        <div className="stats-row">

          <div className="stat-pill">
            <span>♥</span>
            <div className="stat-value">2M+</div>
            <div className="stat-label">Happy Members</div>
          </div>

          <div className="stat-pill">
            <span>💑</span>
            <div className="stat-value">480K</div>
            <div className="stat-label">Couples Formed</div>
          </div>

          <div className="stat-pill">
            <span>✨</span>
            <div className="stat-value">94%</div>
            <div className="stat-label">Match Accuracy</div>
          </div>

          <div className="stat-pill">
            <span>🌍</span>
            <div className="stat-value">127</div>
            <div className="stat-label">Countries</div>
          </div>

        </div>


        {/* CLIENT CARDS */}
        <div className="card-grid">

          <div className="client-card">
            <div className="client-name">Sophia & Daniel</div>
            <div className="client-city">Paris, France 🗼</div>
            <p className="client-quote">
              "We matched on a Tuesday. By Friday I knew he was the one."
            </p>
          </div>

          <div className="client-card">
            <div className="client-name">Isabella & Marco</div>
            <div className="client-city">Rome, Italy 🏛️</div>
            <p className="client-quote">
              "I almost gave up on dating apps — until I met Marco."
            </p>
          </div>

          <div className="client-card">
            <div className="client-name">Priya & Arjun</div>
            <div className="client-city">Mumbai, India 🌸</div>
            <p className="client-quote">
              "Same city, different worlds — until Amore connected us."
            </p>
          </div>

        </div>


        {/* CTA */}
        <div className="cta-strip">

          <h3 className="cta-title">
            Ready to write your own <em>love story?</em>
          </h3>

          <div>
            <button className="cta-btn cta-primary">
              ♥ Create Free Profile
            </button>

            <button className="cta-btn cta-secondary">
              Browse Matches
            </button>
          </div>

        </div>

      </div>

    </section>
    
  );
}

// match form component

export function MatchForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    dateofbirth: '',
    phonenumber: '',
    lookingFor: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      console.log(data);

      alert(`Thanks ${formData.name}! Your profile was submitted successfully 💖`);

      // reset form
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: '',
        dateofbirth: '',
        phonenumber: '',
        lookingFor: '',
        additionalInfo: '',
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="match-form-section">
      <div className="container">
        <div className="form-card">

          <h2 className="form-title">
            <span className="heart">❤️</span>
            Find Your Perfect Match
            <span className="heart">❤️</span>
          </h2>

          <p className="form-subtitle">
            Tell us about yourself and we’ll handpick the best matches for you.
          </p>

          <form onSubmit={handleSubmit} className="match-form">

            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g., Alex Johnson"
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="alex@example.com"
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  placeholder="25"
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 123-456-7890"
                />
              </div>

              <div className="form-group">
                <label>I am</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group form-group-full">
                <label>Additional Info</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Share a fun fact about yourself or what you're looking for in a match!"
                />
              </div>

            </div>
    
            <div className="form-group">
              <label>Looking for</label>
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="everyone">Everyone</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Get Perfect Matches
            </button>

          </form>

          <p className="privacy-note">
            We respect your privacy. Your details are safe with us.
          </p>

        </div>
      </div>
    </section>
  );
};


// dating form component with multiple steps and interest selection


export default Hero