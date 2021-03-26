import React, { useState } from "react";

const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Provider value={{ theme, toggleTheme, transition: "2000ms" }}>
      {props.children}
    </Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
