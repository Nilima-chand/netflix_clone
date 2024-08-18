import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitters_icon from '../../assets/twitters_icon.png'
import instagrams_icon from '../../assets/instagrams_icon.png'
import facebooks_icon from '../../assets/facebooks_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitters_icon} alt="" />
        <img src={instagrams_icon} alt="" />
        <img src={facebooks_icon} alt="" />
        </div>  
         <ul>
          <li>Audio Description</li>
          <li>Help Center</li>
          <li>Gift Cards</li>
          <li>Media</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of use</li>
          <li>Privacy</li>
          <li>Legal Notice</li>
          <li>Cookie Preference</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <p className='copyright-text'>© 1997-2018 Netflix, Inc.</p> 
    </div>
  )
}

export default Footer