import React, { use, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {gsap} from "gsap";
import { RiMenu5Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import "./styles/Header.css";

const Header = () => {
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);


    useEffect(() => {
        if (isPhone) {
            if (menuOpen) {
                gsap.to(navRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                    display: "flex",
                });
            } else {
                gsap.to(navRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.in",
                    onComplete: () => {
                        navRef.current.style.display = "none"; // Hide only after animation
                    },
                });
            }
        }
    }, [menuOpen, isPhone]);

    useEffect(() => {
        const checkScreen = () => {
            const isMobile = window.innerWidth <= 768;
            setIsPhone(isMobile);
            if (!isMobile) setMenuOpen(false); // Close menu on desktop view
        };
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div className="header">
            <nav className="navbar">
                <div className="logo-container">
                    <Link to="/" className="logo">
                        <img src="./assets/logo.png" alt="logo" height={40} />
                        <h1 className="logo-name" style={{ display: isPhone ? "none" : "block" }}>
                            Munvar Digitals
                        </h1>
                    </Link>
                </div>

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} style={{ display: isPhone ? "block" : "none" }}>
                    {menuOpen ? <RxCross2 /> : <RiMenu5Fill />}
                </div>

                <div
                    className="nav-links"
                    ref={navRef}
                    style={{ display: isPhone ? (menuOpen ? "flex" : "none") : "flex" }}
                >
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/services" className="nav-link">Services</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;
