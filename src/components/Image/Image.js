import React, { useState, useEffect } from 'react';
import ImageDetail from '../ImageDetail/ImageDetail';


const Image = () => {
  const [images,setImages]=useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/')
    .then(response =>response.json())
    .then(data =>setImages(data.results))
  },[])
  return (
    <div>
      {
        images.map(image =><ImageDetail image={image}></ImageDetail>)
      }
      
      
      
    </div>
  );
};

export default Image;