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
    <div>
      <h2>Posts length: {posts.length}</h2>
      {
        posts.map(post => <Post post={post}></Post>)
      }
    </div>
  );
};

export default Home;