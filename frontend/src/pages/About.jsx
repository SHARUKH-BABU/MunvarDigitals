import React, { useEffect, useRef } from "react";
import Layout from "../components/layouts/layout.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-main-section .about-title, .about-description p", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.5,
        stagger: 0.3,
      });
  
      gsap.from(".services-section .section-title", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none reset",
          invalidateOnRefresh: true,
        },
      });
  
      gsap.from(".services-section .about-service-card, .services-section .customer-rating", {
        opacity: 0,
        y: 150,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 70%",
          toggleActions: "play none none reset",
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".team-section .section-title", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
          toggleActions: "play none none reset",
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".team-section .team-card", {
        opacity: 0,
        y: 150,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 70%",
          toggleActions: "play none none reset",
          invalidateOnRefresh: true,
        },
      });
      
    });
  
    return () => ctx.revert();
  }, []);
  

  return (
    <Layout>
      <div className="about-container" ref={aboutRef}>
        {/* About Business Section */}
        <section className="about-section about-main-section">
          <h1 className="about-title">Welcome to <span> Munvar Digitals </span></h1>
          <p className="about-description">
            <p>
              Serving the community for <strong>20+ years</strong>, we specialize in
              <strong> Meeseva services, job applications, government documents, and professional photography</strong>.
              Our expertise extends to <strong>PAN card applications, Aadhar updates, ration card services, income and caste certificates,
              property registrations, and vehicle insurance services</strong>, ensuring a hassle-free experience.
            </p>
            <br /><br />
            <p>
              We also provide <strong>high-quality passport-size photos, visa photos, event photography, album designing, and digital editing services</strong>.
              Our skilled professionals ensure accuracy, efficiency, and quick turnaround times to meet your needs.
            </p>
            <br /><br />
            <p>
              <strong>Customer satisfaction is our top priority.</strong> With a commitment to excellence, we strive to deliver reliable and affordable services
              that make your life easier. Visit us today and experience our trusted service!
            </p>
          </p>
        </section>

        {/* Services & Experience Section */}
        <section className="about-section services-section">
          <h2 className="section-title">Our Services & Expertise</h2>
          <div className="services-list">
            <div className="about-service-card">
              <h3>📄 Meeseva & Government Services</h3>
              <p>We provide online applications, job assistance, and official document services.</p>
            </div>
            <div className="about-service-card">
              <h3>📷 Photography & Videography</h3>
              <p>Professional coverage for weddings, birthdays, and all events.</p>
            </div>
            <div className="about-service-card">
              <h3>📚 Digital Album Creation</h3>
              <p>High-quality, affordable albums designed for lasting memories.</p>
            </div>
          </div>
          <p className="customer-rating">⭐ Customer Satisfaction: 100% ⭐</p>
        </section>

        {/* Team Members Section */}
        <section className="about-section team-section">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-members">
            <div className="team-card">
              <img src="./assets/peddabaji.jpg" alt="Baji" className="team-image" />
              <h3>Baji</h3>
              <p>Expert in Meeseva & Online Applications</p>
              <p>📞 9849332118</p>
            </div>
            <div className="team-card">
              <img src="./assets/chinnabaji.jpg" alt="Chinna Baji" className="team-image" />
              <h3>Chinna Baji</h3>
              <p>Photography & Album Design</p>
              <p>📞 8019771929</p>
            </div>
            <div className="team-card">
              <img src="./assets/saida.jpg" alt="Saida" className="team-image" />
              <h3>Saida</h3>
              <p>Professional Photographer & Videographer</p>
              <p>📞 9966214281</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
