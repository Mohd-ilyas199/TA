import React from "react";
import Navbar from "../CRUD/Navbar";
import Adduser from "./Adduser";
import Allusers from "./Allusers";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./Login";
import "../CRUD/Crud.css";
import Editusers from "./Editusers";

const Landing = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/allusers" component={Allusers}></Route>
          <Route exact path="/edituser/:id" component={Editusers}></Route>
          <Route exact path="/adduser" component={Adduser}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Landing;
