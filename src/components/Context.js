import React, { Component, useState } from "react";
const Context = React.createContext({
  token: "",
  authenticated: false,
  login: () => {},
  logout: () => {},
});

const ContextProvider = ({ children, ...props }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState("");
  return (
    <Context.Provider
      value={{
        authenticated: authenticated,
        token: token,
        login: (token) => {
          setToken(token);
          setAuthenticated(true);
        },
        logout: () => {
          setToken("");
          setAuthenticated(false);
        },
      }}
      
    >{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
