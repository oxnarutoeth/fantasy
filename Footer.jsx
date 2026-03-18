import './Footer.css';

function Footer() {
return (
    <div className="footer-wrapper">

      <footer className="footer">

        <div className="footer-container">

          {/* CTA */}
          <div className="footer-cta">

            <h2 className="footer-title">
              Your perfect match is
               <b style={{color:"#FF2E75"}}> waiting</b> for you.
            </h2>

            <p className="footer-desc">
              Join over <b style={{color:"#FF2E75"}}>2 million hearts</b>
              who found love and connection.
            </p>

            <div style={{marginTop:"30px"}}>
              <button className="footer-btn">
                ♥ Find My Match
              </button>
            </div>

          </div>


          {/* LINKS */}
          <div className="footer-links">

            <div>
              <h4 className="footer-heading">Discover</h4>
              <a className="footer-link">Browse Profiles</a>
              <a className="footer-link">Nearby Matches</a>
              <a className="footer-link">Top Picks</a>
              <a className="footer-link">New Members</a>
            </div>

            <div>
              <h4 className="footer-heading">Connect</h4>
              <a className="footer-link">Messaging</a>
              <a className="footer-link">Video Dates</a>
              <a className="footer-link">Send a Rose</a>
            </div>

            <div>
              <h4 className="footer-heading">Support</h4>
              <a className="footer-link">Help Center</a>
              <a className="footer-link">Safety Tips</a>
              <a className="footer-link">Contact Us</a>
            </div>

            <div>
              <h4 className="footer-heading">Company</h4>
              <a className="footer-link">About</a>
              <a className="footer-link">Blog</a>
              <a className="footer-link">Careers</a>
            </div>

          </div>


          {/* BOTTOM */}
          <div className="footer-bottom">

            <div style={{fontSize:"13px",color:"#b07090"}}>
              © 2026 Vishal Inc. · Made with ♥
            </div>

            <div className="footer-social">

              <a className="social-btn">IG</a>
              <a className="social-btn">TT</a>
              <a className="social-btn">X</a>
              <a className="social-btn">FB</a>

            </div>

          </div>

        </div>

        <div className="footer-watermark">
          Vishal
        </div>

      </footer>

    </div>
  );
}
export default Footer