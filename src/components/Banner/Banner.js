import React, { useEffect,useState } from 'react'
import "./Banner.css";
import axios from '../../axios';
import { API_KEY } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';


const Banner = () => {
    const[Movie,setMovie]=useState() 

    useEffect(()=>{
   axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
  
    const index=Math.floor(Math.random() * 20);

    setMovie(res.data.results[index])
   })
    },[])
  return (
    <div
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path :'' })`  }}
    className='Banner'>
        <div className='content'>
            <h1 className='title'>{Movie ? Movie.title :'' }</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{Movie ? Movie.overview :'' }</h1>
        </div>
      <div className='fade_bottom'></div>
    </div> 
  )
}

export default Banner
