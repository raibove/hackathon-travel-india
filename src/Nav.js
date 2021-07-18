import React from 'react'
import './nav.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = ()=>{
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <ul className="nav-items">
        <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
          <li className="nav-item">About</li>
          </Link>
          <Link
                activeClass="active"
                to="popular"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
          <li className="nav-item">Popular</li>
          </Link>
          <Link
                activeClass="active"
                to="map"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
          <li className="nav-item">Map</li>
          </Link> <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
          <li className="nav-item">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;