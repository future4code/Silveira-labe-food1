import React from 'react';
import './styles.css';
import Router from './router/Router';
import GlobalState from './context/GlobalState'

const App = () => {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
