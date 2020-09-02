import React from 'react';
import Game from './games';
import './App.css';
import './stylesheet.css';

function App() {

  return (
    <div className="App borderR">
        <div className= "main-title">Memory Game</div>
        <div className=" borderC"> 

          <Game tiles={30} />

        </div>
    </div>
  );
}

export default App;
