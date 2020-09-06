import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';
import Image from '../Image/Image';

const CommentDetails = (props) => {
  const {name,email,body} = props.comment;
 
  return (
    <div className="CommentDetails">
      
      <Card >
        <Avatar>
          <Image></Image>
        </Avatar>
        <CardContent>
          
          <Typography variant="h4" color="textPrimary">
            Name:{name}
          </Typography>
          <Typography variant="body1">
            Email:{email}
             
          </Typography>
          <Typography variant="body2" color="textSecondary">
                    {body}
            </Typography>
        </CardContent>
      </Card>

      
    </div>
  );
};

export default CommentDetails;