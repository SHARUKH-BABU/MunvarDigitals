import React, { useEffect } from "react";
import Layout from "../components/layouts/layout.jsx";
import "./styles/Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        opacity: 0,
        y: -50,
        duration: 1,
      });

      gsap.from(".contact-form", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact-page">
      <Layout>
        <div className="contact-container">
          <h1 className="contact-title">Get in Touch</h1>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
