import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = (props) => {
  const { title, body, id, userId } = props.post;
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center my-5">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5>User Id: {userId} </h5>
          <h3>
            <small>Post ID: {id} </small>
          </h3>
          <h5 className="mt-3 mb-3">{title}</h5>
          <p className="text-secondary">{body}</p>
          <Link to={`/post/${id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>

    /* <div className={classes.root}>
     

    <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
          <Paper className={classes.paper}>
            <h2>User Id: {userId} </h2>
            <h3><small>Post ID: {id} </small></h3>
            <h3>Title:{title}</h3>
            <p>Body:{body}</p>
         <Link to={`/post/${id}`} ><button>See Details</button></Link>
          </Paper>
        </Grid>

        </Grid>
      
    </div> */
  );
};

export default Post;
