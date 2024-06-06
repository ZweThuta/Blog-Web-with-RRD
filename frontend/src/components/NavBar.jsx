import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <h1 className="blog">BLOG.io</h1>
      </Link>
      <div>
        <NavLink to={"/"}>Posts</NavLink>
        <NavLink to={"/create-post"}>Create Post</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
