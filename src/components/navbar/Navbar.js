import React from "react";
import Brand from "../Brand";
import Nav from "./Nav";
import { ThemeContextConsumer } from "../../context/themeContext";

const Navbar = () => {
  const sharedNavbarStyle = {
    border: "solid .2rem black",
    borderRadius: "5px",
    margin: "1rem",
    padding: ".5rem",
    transition: "all 500ms"
  };
  const lightNavbarStyle = {
    backgroundColor: "white",
    color: "black",
    ...sharedNavbarStyle
  };
  const darkNavbarStyle = {
    backgroundColor: "black",
    color: "white",
    ...sharedNavbarStyle
  };
  const brandStyle = {
    marginLeft: "auto",
    marginRight: "auto"
  };

  return (
    <ThemeContextConsumer>
      {({ theme }) => (
        <div style={theme === "light" ? lightNavbarStyle : darkNavbarStyle}>
          <Brand style={brandStyle} />
          <Nav theme={theme} />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Navbar;
