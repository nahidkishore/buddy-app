import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Post = (props) => {
  const classes = useStyles();
  const {title,body,id} = props.post;
  return (
    <div className={classes.root}>
     

    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4} >
          <Paper className={classes.paper}>
          <h3>Title:{title}</h3>
         <p>Body:{body}</p>
         <Link to={`/post/${id}`} ><button>See Details</button></Link>
          </Paper>
        </Grid>

        </Grid>
      
    </div>
  );
};

export default Post;