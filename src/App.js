import React, { Component } from 'react';
import TicTacToe from './tictactoe';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <TicTacToe/>
      <Display />
    </div>
  );
}
}
function Modes() {
  return (
    <div className="buttons">
      <button className="button-left">Multiplayer</button>
      <button className="button-right">Bot Mode</button>
    </div>
  )
}
function Display () {
    return (
      <div className="display">
      <div className="header">
        Tic-Tac-Toe
      </div>  
      <div className="links">by <a href="https://eeshashetty.github.io" target="_blank">@eeshashetty</a></div>
        <Modes />
      </div>
    );
  }

export default App;
