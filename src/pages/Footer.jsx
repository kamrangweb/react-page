function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">

        <div className="footer-header">
          <h3>Contact us</h3>
        </div>

        <div className="footer-content">

          {/* Contact */}
          <div className="footer-column">
            <i className="fa fa-envelope footer-icon"></i>

            <h4>Send Message</h4>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
          </div>

          {/* Links */}
          <div className="footer-column">
            <i className="fa fa-mouse-pointer footer-icon"></i>

            <h4>Useful Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer-column">
            <i className="fa fa-share-alt footer-icon"></i>

            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook-official"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-youtube-play"></i></a>
              <a href="#"><i className="fa fa-pinterest"></i></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Web Development Engineer
        </div>

      </div>
    </footer>
  );
}

export default Footer;
