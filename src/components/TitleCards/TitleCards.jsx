import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'




const TitleCards = ({title,category}) => {
  
  const [apiData,setApiData]=useState([])
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjcyZmNjMzc2OThkMWZiNmRjZmIxZmQ2YzVhMTQ3OCIsIm5iZiI6MTc0MjcyNzUxMS41ODYsInN1YiI6IjY3ZGZlOTU3ZTRhOWM4NjkwNjA3Y2ZmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oaHzzKfmeLv8qJrlkkLwR2-avKRuAuKc-PIL2Wnsbew'
    }
  };
  
 

const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft+=event.deltaY;
}
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
},[]) 

  return (
    <div className='title-cards'> 
    <h2>{title?title:"Popular on Netflix"}</h2>
    <div className="card-list" ref={cardsRef}>
      {cards_data.map((card,index)=>{
        return <div className="card" key={index}>
          <img src={card.image} alt="" />
          <p>{card.name}</p>
        </div>
      })}
    </div>
    </div>
  )
}

export default TitleCards