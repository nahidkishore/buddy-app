import React from 'react';


const Post = (props) => {
  const {title,body} = props.post;
  return (
    <div>
      <h3>Title:{title}</h3>
    <p>Body:{body}</p>
      
    </div>
  );
};

export default Post;