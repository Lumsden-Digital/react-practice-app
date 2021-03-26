import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ theme }) => {
  const textColor = theme === "dark" ? "white" : "black";

  const navlistStyle = {
    margin: "0"
  };
  const navItemStyle = {
    marginRight: "auto",
    paddingTop: ".2rem",
    paddingBottom: ".2rem",
    textDecoration: "none",
    color: textColor
  };

  return (
    <nav className="nav">
      <ul style={navlistStyle}>
        <li>
          <Link to="/" style={navItemStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={navItemStyle}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
