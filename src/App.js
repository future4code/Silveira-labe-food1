import React, { useState, useEffect } from "react";
import "./styles.css";
import Router from "./router/Router";
import GlobalState from "./context/GlobalState";
import Image from "./assets/image.png";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalState>
        <ThemeProvider theme={theme}>
          {/* <Router /> */}
          {isLoading ? <img src={Image} alt="Logo da rappi4A" /> : <Router />}
        </ThemeProvider>
      </GlobalState>
    </>
  );
};

export default App;
