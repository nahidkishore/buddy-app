import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const CommentDetails = (props) => {
  const {name,email,body} = props.comment;
  return (
    <div>
      
      <Card>
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