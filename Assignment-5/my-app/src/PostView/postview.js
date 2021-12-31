import React from 'react';
import './postview.css';
import { useEffect, useState } from 'react';




const Postview=()=> {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3004/user")
    .then((req)=>req.json())
    .then((res)=>setData(res));
  },[]);

  return (
    
    <>
    <div className="site-container">
      <div className='header'>
        <div className='instagram-logo-container'>
        <img className='instagram-logo' src='Images/instagramLogo.png' alt='logo'></img>
        </div>

        <div className='camera-icon-container'>
        <img className='camera-icon' src='Images/camera.png' alt='camera-icon'></img>
        </div>
    
      </div>
      
    </div>
        {data.map((value,index)=>{
          return(
            <div className='main-containter' key={index}>
              		<div className='post'>
                  
                  <div className='name-location'>
                    <strong className='name'>{value.name}</strong>
                    <label className='location'>{value.location}</label>
                  </div>

                  <div className='dot-container'>
                    <strong className='dot'>.&nbsp;.&nbsp;.</strong>
                  </div>

              </div>

              <div className='image-container'>
                <img src={value.PostImage} alt='Pic' className='post-img'></img>
              </div>
              
              <div className='activity-container'>
                 
                 <div className='activity-buttom'>
                   <img className='heart' src='Images/heart.png' alt='heart'></img>
                   <img className='comment' src='Images/comment.png' alt='comment'></img>
                   <img className='send' src='Images/send.png' alt='send'></img>
                 </div>

                 <div className='date-container'>
                    <label className='date'>{value.date}</label>
                 </div>

              </div>

              <div className='description-container'>
                <label className='like-count'>{value.likes}</label>
                <strong className='deccription-details'>{value.description}</strong>
              </div>

              
            </div>
            
          )
        })}

    </>

  );
}

export default Postview;
