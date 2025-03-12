import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/layout.jsx";
import "./styles/Services.css";
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const Services = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  
  const [activeTab, setActiveTab] = useState("meeseva");

  // MeeSeva Services Data
  const meesevaServices = [
    { name: "Aadhar Card Services", img: "./assets/meesavaServices/aadhar.jpeg" },
    { name: "Job & Exam Payments", img: "./assets/meesavaServices/jobs.jpeg" },
    { name: "Xerox & Printing", img: "./assets/meesavaServices/zerox.jpeg" },
    { name: "Caste & Income Certificates", img: "./assets/meesavaServices/cast.jpg" },
    { name: "PAN Card Application", img: "./assets/meesavaServices/pancard.jpeg" },
  ];

  // Photoshooting Services Data
  const photoshootServices = [
    { name: "Passport Size Photos", img: "./assets/photoShootServices/passport.jpeg" },
    { name: "Video Shooting", img: "./assets/photoShootServices/videoshooting.jpeg" },
    { name: "Birthday Party Shooting", img: "./assets/photoShootServices/birthdayshooting.jpeg" },
    { name: "Pre-Wedding Shoot", img: "./assets/photoShootServices/prewedding.jpeg" },
    { name: "Photo Editing", img: "./assets/photoShootServices/photoediting.jpeg" },
  ];


  useEffect(() => {
    const tl = gsap.timeline();
    let ctx = gsap.context(() => {
  
      gsap.from(".services-title", {
        opacity: 0,
        y: -200,
        duration: 1,
      });
  
      gsap.from(".tabs", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
      });
  
      gsap.from(".service-card", {
        opacity: 0,
        y: 150,
        duration: 1,
        delay: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          invalidateOnRefresh: true,
        },
      });
  
    });
  
    return () => ctx.revert();  // Cleanup GSAP animations on unmount
  }, [activeTab]);  
  

  return (
    <Layout>
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>

        {/* Tabs */}
        <div className="tabs">
          <button className={activeTab === "meeseva" ? "tab active" : "tab"} onClick={() => setActiveTab("meeseva")}>
            MeeSeva Services
          </button>
          <button className={activeTab === "photoshoot" ? "tab active" : "tab"} onClick={() => setActiveTab("photoshoot")}>
            Photoshooting Services
          </button>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {(activeTab === "meeseva" ? meesevaServices : photoshootServices).map((service, index) => (
            <div key={index} className="service-card">
              <div className="img-container">
                <img src={service.img} alt={service.name} className="service-img" />
              </div>
              <h2 className="service-name">{service.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Services;
