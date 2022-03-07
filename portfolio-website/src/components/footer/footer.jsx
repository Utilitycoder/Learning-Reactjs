import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">Lawal Abubakar Babatunde</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="footer_socials">
        <a href="https://web.facebook.com/lawal.abubakr" target="_blank"><FaFacebookF /></a>
        <a href="https://instagram.com/utility6151" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/utility6151" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copy">
        <small>&copy; Lawal Abubakar Babatunde. All rights reserved
        </small>
      </div>
      
    </footer>
  )
}

export default footer