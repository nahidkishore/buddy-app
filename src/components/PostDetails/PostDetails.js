import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const PostDetails = () => {
  const classes = useStyles();

  const {postId}= useParams();
  const [post, setPost]= useState({});
  useEffect(() =>{

    const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(response =>response.json())
    .then(data =>setPost(data));
  },[])
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
  <p>Post Id: {postId}</p>
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
       <p>Title: {post.title}</p>
        </Typography>
       
        <Typography variant="body2" component="p">
       <p>Body:{post.body}</p>
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Comments details</Button>
      </CardActions>
      
    </Card>
  );
};

export default PostDetails;