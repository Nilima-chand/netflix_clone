import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer YOUR_API_TOKEN'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
        const data = await response.json();
        console.log(data); // Check the data received from the API
        if (data.results && data.results.length > 0) {
          setApiData(data.results[0]);
        } else {
          console.error('No video found for this movie.');
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      {apiData.key ? (
        <>
          <iframe
            width='90%'
            height='90%'
            src={`https://www.youtube.com/embed/${apiData.key}`}
            title='trailer'
            frameBorder='0'
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.type}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Player;
