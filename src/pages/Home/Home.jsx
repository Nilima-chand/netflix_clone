import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import av3 from '../../assets/av3.jpg'
import AV1 from '../../assets/AV1.png'
import play_icon from '../../assets/play-icon.png'
import info_icon from '../../assets/info-icon.png'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={av3} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={AV1} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nisi voluptates amet ipsa eaque iure quia, ex aut.</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
           
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCard title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCard title={"Only on Netflix"} category={"popular"}/>
      <TitleCard title={"Upcoming"} category={"upcoming"}/>
      <TitleCard title={"Top Pics for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home