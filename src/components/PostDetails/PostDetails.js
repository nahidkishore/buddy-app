import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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


  // comments Details

  
  return (

    <React.Fragment>
      <CssBaseline />
      <Container fixed>
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
    
 
    </Card>

    
      </Container>
      
    </React.Fragment>

    
    
  

   
   
  );
};

export default PostDetails;