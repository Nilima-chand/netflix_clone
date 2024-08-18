import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo1 from '../../assets/logo.png'
import serach_icon from '../../assets/search_icon.png'
import bell_icon from '../../assets/bell_icon.png'
import profile_img from '../../assets/profile.png'
import caret_icon from '../../assets/caret_icon.png'
import { logout } from '../../firebase'


const Navbar = () => {
  
  const navRef = useRef();
  
  useEffect(()=>{
window.addEventListener('scroll', ()=>{
  if(window.scrollY >= 80){
    navRef.current.classList.add('nav-dark')
  }else{
    navRef.current.classList.remove('nav-dark')
  }
})
  },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className='navbar-left'>
          <img src={logo1} alt='logo' />
          <ul>
            <li>Home</li>
            <li>TV Show</li>
            <li>Movies</li>
            <li>New & popular</li>
            <li>My List</li>
            <li>Browse by language</li>
          </ul>
        </div>
        <div className='navbar-right'>
          <img src={serach_icon} alt="icons" />
          <p>Children</p>
          <img src={bell_icon} alt="icons" />
        <div className='navbar-profile'>
          <img src={profile_img} alt="icons" />
          <img src={caret_icon} alt="icons" />
        
          <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>
         </div> 
        </div>
    </div>
  )
}

export default Navbar