import React,{useEffect,useState } from 'react' 
import "./RowPost.css";
import axios from '../../axios';  

import { imageUrl,API_KEY } from '../../constants/constants';
import Youtube from 'react-youtube'


function RowPost(props) {
    const[Movie,setMovie]=useState([]) 
    const[movieUrl,setmovieUrl]=useState('') 
   
    useEffect(()=>{
        axios.get(props.url).then((res)=>{
           
            setMovie(res.data.results)
        })

    })
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      }; 
     const handleMovie=(id)=>{
  console.log(id);
  
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        console.log(111111111);
        console.log(res.data);
        if (res.data.results.length!==0) {
            
            setmovieUrl(res.data.results[0])
        }
    
  })
     } 
  return (
    <div className='row'>
      <h2>{props.title}</h2>
     <div className='posters'>
        {Movie.map((obj)=>
            <img  onClick={()=> handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}/>
        )}
           
        
          
     </div>
    {movieUrl && <Youtube videoId={movieUrl.key} opts={opts}  />}
    </div>
  )
}

export default RowPost
