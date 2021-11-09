import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "../CRUD/navbar.css";
const Navbar = () => {
  return (
    <div>
      <AppBar className="nav">
        <Toolbar className="toolbar-1">
          <NavLink className="navlink" to="/" exact>
            BCCI
          </NavLink>
          <NavLink className="navlink" to="/allusers" exact>
            All Users
          </NavLink>
          <NavLink className="navlink" to="/adduser" exact>
            Add User
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
