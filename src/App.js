import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Comment from "./components/Comment/Comment";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/post/:postId">
            <Comment></Comment>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
