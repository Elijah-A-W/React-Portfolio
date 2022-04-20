import React from 'react';
import './Footer.css';
import { FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
        <a href='' className='footer__logo'>ELIJAH</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li> 
        </ul>


        <div className="footer__socials">
            <a href="https://twitter.com/ElijahWandulu"><FaTwitter/></a>
            <a href="https://twitter.com/ElijahWandulu"><FaTwitter/></a>
            <a href="https://twitter.com/ElijahWandulu"><FaTwitter/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Elijah's Portfolio. All rights reserved</small>
        </div>
    </footer>

  )
}

export default Footer

