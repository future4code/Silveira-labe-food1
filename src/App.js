import React, { useState, useEffect } from "react";
import "./styles.css";
import Router from "./router/Router";
import GlobalState from "./context/GlobalState";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
     <BrowserRouter>
      <GlobalState>
        <ThemeProvider theme={theme}>
          <Router />
          
        </ThemeProvider>
      </GlobalState>
      </BrowserRouter>
    </>
  );
};

export default App;
