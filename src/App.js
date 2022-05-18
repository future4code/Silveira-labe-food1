import React, { useState, useEffect } from "react";
import "./styles.css";
import Router from "./router/Router";
import GlobalState from "./context/GlobalState";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";



const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <GlobalState>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </GlobalState>
    </>
  );
};

export default App;
