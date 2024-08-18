//import React  from 'react'
import React, {useEffect, useRef, useState} from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/cards_data'
import { Link } from 'react-router-dom';



 const TitleCard = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmFkMTNiMzU2ZWVjMWJjYWM1YmNkMzVkN2VjMGMxOSIsIm5iZiI6MTcyMzQ4NzcyMC42NTQwNDUsInN1YiI6IjY2YmE1NGRlZDRlNmUyMDhiODUzOWZjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.en95qfc14VOI1JPMRq4bdTkin5Ak06wRvMahU1qJZSw'
    }
  };
  
  


const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(()=>{
   
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className='titlecard'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
    
  )
}

export default TitleCard