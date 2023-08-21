import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="wrapper">
      <div className="sidebar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <Link className="nav-link" to="/">
            Home
          </Link>
          <br />
          <Link className="nav-link" to="/articles">
            Explore
          </Link>
          <br />
          <Link className="nav-link" to="/new-article">
            New Post
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
