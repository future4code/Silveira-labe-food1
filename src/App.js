import React, { useState, useEffect } from 'react';
import './styles.css';
import Router from './router/Router';
import GlobalState from './context/GlobalState'
import Image from "./assets/image.png"

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  setTimeout(() => { setIsLoading(false) }, 3000);
  }, [])

  return (
    <>

      <GlobalState>

        {/* <Router /> */}
        {isLoading ? (
          <img
            src={Image}
            alt="Logo da rappi4A"
          />
        ) : (
          <Router />
        )
        }

      </GlobalState>
    </>
  );
}

export default App;
