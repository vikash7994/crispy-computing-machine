import React from "react";
import "./navbar.css";
import logo from "./images/head-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          {/* <h1>Makemelive</h1> */}
         <Link to="/"><img src={logo} alt="head-logo" /></Link>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/"> 01 – HOME</Link>
            </li>
            <li>
              <Link to="/Services">02 – SERVICES</Link>
            </li>
            <li>
              <Link to="/Upgrade">03 – UPGRADE</Link>
            </li>
            <li>
              <Link to="/Work">04 – WORK</Link>
            </li>
            <li>
              <Link to="/About">05 – ABOUT </Link>
            </li>
            <li>
              <Link to="/Contact">06 – CONTACT </Link>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="/#" className="facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/#" className="instagram">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/#" className="linkdin">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="/#" className="youtube">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
