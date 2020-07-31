import React, { Component } from 'react';
import TicTacToe from './tictactoe';
import Multiplayer from './multiplayer'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path = "/multiplayer">
          <Multiplayer />
        </Route>
      </Switch>
      <Route path = "/bot">
          <TicTacToe/>
      </Route>
      <Display />
    </div>

    </Router>
  );
}
}
function Display () {
    return (
    <Router>
      <div className="App">
      <div className="display">
      <div className="header">
        Tic-Tac-Toe
      </div>  
      <div className="links">by <a href="https://eeshashetty.github.io" target="_blank" rel="noopener noreferrer">@eeshashetty</a></div>
      <div className="buttons">
      <Link to = "/multiplayer"><button className="btn left">Multiplayer</button></Link>
      <Link to = "/bot"><button className="btn right">Bot Mode 🤖</button></Link>
      </div>
      </div>
            </div>
    </Router>
    );
  }

export default App;
