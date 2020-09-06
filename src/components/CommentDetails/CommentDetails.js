import React from 'react';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core';

const CommentDetails = (props) => {
  const {name,email,body} = props.comment;
  //const {thumbnailUrl}=props.image;
  return (
    <div>
      
      <Card>
        <CardContent>
          <Avatar > 
            

          </Avatar>
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