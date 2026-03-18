import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';        // This will be your Home page
import About from './components/about';      // Full About page
import Footer from './components/Footer';    // Optional: will appear on all pages

// Placeholder components for other pages (create these files later)
function Services() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Services Page</h1>
      <p>Our services will be listed here.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Contact Page</h1>
      <p>Get in touch with us.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />               {/* Navbar appears on every page */}
        <Routes>
          <Route path="/" element={<Hero />} />          {/* Home page */}
          <Route path="/about" element={<About />} />    {/* About page */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />                {/* Footer appears on every page (optional) */}
      </div>
    </Router> 
  );
}

export default App;