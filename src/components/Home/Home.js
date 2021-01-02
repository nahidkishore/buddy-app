import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const [posts,setPosts]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response =>response.json())
    .then(data=>setPosts(data))
  },[])
  return (
    <div className="container">
      <h2 className="text-center">Posts length: {posts.length}</h2> 
      <div className="d-flex justify-content-center align-item-center">
      <div className="row">
   {
        posts.map(post => <Post post={post}></Post>)
      }
   </div>

        </div>
  
    </div>
  );
};

export default Home;