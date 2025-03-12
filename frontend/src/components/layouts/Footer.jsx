import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles/Footer.css";

const Footer = () => {
  const footerRef = useRef(null);


  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><strong>Meeseva :</strong> 📞 9849332118</p>
          <p><strong>Photos & Videos :</strong> 📞 9966214281, 8019771929</p>
        </div>

        <div className="footer-column">
          <h3>Email</h3>
          <p>📧 munvarmeesava@gmail.com</p>
          <p>📧 munvardigitals@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Location</h3>
          <p>Nekarikallu, Panchayathi Office Near</p>
          <p>522615, Palnadu</p>
        </div>

        <div className="footer-column map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.0591339604243!2d79.9415519!3d16.370949799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a357cbdf672411b%3A0xc23599b7360cb602!2sNekarikallu%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1741587250402!5m2!1sen!2sin"
            width="100%"
            height="150"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <hr />
      <p className="footer-note">© 2025 Munvar Digitals. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
