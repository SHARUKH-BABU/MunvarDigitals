import React, { useEffect } from "react";
import Layout from "../components/layouts/layout.jsx";
import "./styles/Home.css";
import { gsap } from "gsap";

const Home = () => {
  useEffect(() => {
    gsap.from(".home-container", {
      opacity: 0,
      y: -50,
      duration: 1,
    });

    gsap.from(".home-title", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".home-text", {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 1,
    });

    gsap.from(".explore-btn", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 1.5,
    });
  }, []);

  return (
    <Layout>
      <div className="home-container">
        <h1 className="home-title">Welcome to Our Website</h1>
        <p className="home-text">
          Discover amazing services and explore what we have to offer.
        </p>
        <a href="/services" className="explore-btn">
          Explore Services
        </a>
      </div>
    </Layout>
  );
};

export default Home;
