import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>CUZCO RAMOS</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact"></a>Contact</li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://Instagram.com"><FaInstagram/></a>
        <a href="https://Twitter.com"><FiTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; mcuzcor. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer