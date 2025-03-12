import React, { useEffect } from "react";
import Layout from "../components/layouts/layout.jsx";
import "./styles/NotPageFound.css";
import { gsap } from "gsap";

const NotPageFound = () => {
  useEffect(() => {
    gsap.from(".not-found-container", {
      opacity: 0,
      y: -50,
      duration: 1,
    });

    gsap.from(".not-found-text", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
    });

  }, []);

  return (
    <Layout>
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="back-home-btn">Go to Home</a>
      </div>
    </Layout>
  );
};

export default NotPageFound;
