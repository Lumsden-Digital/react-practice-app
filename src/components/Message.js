import React, { useState } from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "../context/themeContext";

const Message = () => {
  const sharedMessageStyle = {
    borderRadius: "10px",
    width: "80%",
    margin: "1rem auto",
    padding: "1rem 1rem 2rem"
  };
  const lightMessageStyle = {
    border: "black .2rem solid",
    borderRadius: "10px",
    ...sharedMessageStyle
  };
  const darkMessageStyle = {
    color: "white",
    backgroundColor: "black",
    border: "black 2px solid",
    ...sharedMessageStyle
  };

  return (
    <ThemeContextConsumer>
      {(context) => (
        // <div style={ context.theme === "light" ? lightMessageStyle : darkMessageStyle }  >
        <div
          style={
            context.theme === "light"
              ? { ...lightMessageStyle, transition: context.transition }
              : { ...darkMessageStyle, transition: context.transition }
          }
        >
          <h2 style={{ margin: "1rem" }}>Hello there!</h2>
          <Button theme={context.theme} toggleTheme={context.toggleTheme} />
        </div>
      )}
    </ThemeContextConsumer>
  );
};

export default Message;
