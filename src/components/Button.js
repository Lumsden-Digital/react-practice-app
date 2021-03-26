import React, { useState } from "react";

const Button = ({ theme, toggleTheme }) => {
  const sharedButtonStyle = {
    padding: "1rem",
    borderRadius: "10px",
    transition: "all 500ms"
  };
  const lightButtonStyle = {
    backgroundColor: "black",
    color: "white",
    ...sharedButtonStyle
  };
  const darkButtonStyle = {
    backgroundColor: "white",
    color: "black",
    ...sharedButtonStyle
  };

  return (
    <button
      className="button"
      style={theme === "light" ? lightButtonStyle : darkButtonStyle}
      onClick={toggleTheme}
    >
      TOGGLE THEME
    </button>
  );
};

export default Button;
