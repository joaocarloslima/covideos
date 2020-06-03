import React from 'react';
import './App.css';

import Header from "./components/header/Header"
import CardSerie from "./components/cardSerie/CardSerie"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <CardSerie />
        <CardSerie />
        <CardSerie />
        <CardSerie />
      </div>
    </div>
  );
}

export default App;
