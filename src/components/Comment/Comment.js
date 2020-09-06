import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from '../PostDetails/PostDetails';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comment = () => {
  const {postId}=useParams();
  const [comments, setComments]=useState([]);
  useEffect(() =>{
    const url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
    .then(response =>response.json())
    .then(data =>setComments(data));
  },[])
  

  return (
    <div>
      
      <PostDetails></PostDetails>
      {
        comments.map(comment => <CommentDetails comment={comment} key = {comment.id}></CommentDetails> )
        
      }

   
      
    </div>
  );
};

export default Comment;