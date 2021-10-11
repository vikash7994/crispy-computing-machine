import React from 'react';
import "./footer.css";
import {FiChevronRight} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
    return (
      <>
          <section class="footer-content">
        <footer>
          <div class="d-flex py-5">
            <div class="col-3 widget-footer">
              <p class="widget-title">MAKEMELIVE TECHNOLOGIES</p>
              <span class="text-secondary widget-title-content">Looking for a
                Digital marketing agency in Mumbai to grow your business with
                proficient Web developers in Mumbai? Your quest ends here!</span>
          <div className="iconic">
          <ul className="p-0">
            <li >
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

            </div>
            <div class="col-3 widget widget-footer">
              <p class="widget-title">QUICK LINK</p>
              <ul class="text-secondary widget-title-content list-icon">
                <li><FiChevronRight/><a href="#">01 - Home</a></li>
                <li><FiChevronRight/><a href="#">02 - Services</a></li>
                <li><FiChevronRight/><a href="#">03 - Upgrade</a></li>
                <li><FiChevronRight/><a href="#">04 - Work</a></li>
                <li><FiChevronRight/><a href="#">05 - About Us</a></li>
                <li><FiChevronRight/><a href="#">06 - Contact</a></li>
              </ul>
            </div>
            <div class="col-3 widget widget-footer">
              <p class="widget-title">SERVICES</p>
              <ul class="text-secondary widget-title-content list-icon">
                <li><FiChevronRight/><a href="#">Upgrade</a></li>
                <li><FiChevronRight/><a href="#">Website Design and
                  Development</a></li>
                <li><FiChevronRight/><a href="#">Mobile App Development</a></li>
                <li><FiChevronRight/><a href="#">Search Engine Optimization</a></li>
                <li><FiChevronRight/><a href="#">E-Commerce Solutions</a></li>
               
              </ul>
            </div>
           
            <div class="col-3 widget-footer">
              <p class="widget-title">OUR OFFICE</p>
              <span class="text-secondary widget-title-content">Diamond SEA CHS
                LTD, Plot No 134, C Wing , Office No 9, Near Markaz Hotel,
                Jogeshwari West, Mumbai - 400102, Maharashtra, India</span>
            </div>
          </div>
        </footer>
        <div class="footer-title"><div class="footer-copyright">
            <p>© 2021 - MAKEMELIVE TECHNOLOGIES</p>
            <p><a href=""><i class="fab fa-facebook-f"></i></a>
              <a href=""> <i class="fab fa-linkedin-in"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
              <a href=""><i class="fab fa-youtube"></i></a></p>
          </div>
        </div>
      </section> 

        </>
    );
};

export default Footer;
