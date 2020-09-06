import React from 'react';
import { Avatar } from '@material-ui/core';

const ImageDetail = (props) => {
  const {picture}=props.image;
  return (
    <div>
      <Avatar src={picture}></Avatar>
      
    </div>
  );
};

export default ImageDetail;