import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            src="https://res.cloudinary.com/dn3hheo7z/image/upload/f_auto,q_auto/image-removebg-preview_ptfk6e.png"
            alt="Netflix Logo"
      />
    <div/>

        <img
            className="nav__avatar"
            src="https://res.cloudinary.com/dn3hheo7z/image/upload/f_auto,q_auto/Screenshot_30-3-2026_234826_tenor.com-removebg-preview_u0ezyz.png"
            alt="Netflix Avatar"
        />
    </div>
  );
}

export default Nav;
