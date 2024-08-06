import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbarContainer shadow p-3">
      <div className="title">
        <h2 className="h1">eKart</h2>
      </div>
      <div className="menus">
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Products">Products</Link>
        <Link to="/Signin">SignIn</Link>
        <Link to="/SignUp">SignUp</Link>

      </div>
    </div>
  );
}

export default Nav;