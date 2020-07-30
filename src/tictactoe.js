import React, {Component} from 'react';
import './tictactoe.css';
var { check } =  require("./patterns")
var bestMove = require("./minimax")

class TicTacToe extends Component {
    constructor() {
      super()
      this.state = { grid: ["","","","","","","","",""], x: true, full: false, result: null, pattern: null };
      this.handleClick = this.handleClick.bind(this);
      this.onReset = this.onReset.bind(this);
      // this.updateBot = this.updateBot.bind(this);
      this.checkRes = this.checkRes.bind(this);
    }

    // updateBot() {
    //   let grid = this.state.grid
    //   let pos = bestMove(grid)
    //   grid[pos] = 'O'
    //   let {res, pattern} = check(grid)
    //   return {grid: grid, res: res, pattern: pattern}
    // }

    checkRes() {
      let full = this.state.grid.filter(val => val==="").length === 0
      
      let {res, pattern} = check(this.state.grid)
      
      if(res === 'X') {
        this.setState({result: 'X', pattern: pattern}) 
      }
      if(res === 'O') {
        this.setState({result: 'O', pattern: pattern}) 
      }
      if(res === 'D' && full===true) {
        this.setState({result: 'D'}) 
      }
       return full
    }

    handleClick(pos) {
      if (this.state.grid[pos]==="" && this.state.result===null) {
      let val = this.state.x?'X':'O'
      
      let grid = this.state.grid
      grid[pos] = val
      
      let full = this.checkRes()
      this.setState({grid: grid, x:!this.state.x, full: full})
     console.log( {grid: this.state.grid, x: this.state.x, full: this.state.full})
      console.log(bestMove(grid))
     }

    }

    onReset() {
      this.setState({ grid: ["","","","","","","","",""], x: true, full: false, result: null, pattern: null })
    }

    render () {
      return (
        <div className="fix-grid">
        <Grid x = {this.state.x} result={this.state.result} grid={this.state.grid} pattern={this.state.pattern} handleClick={this.handleClick}/>
        <button class="reset" onClick={this.onReset}>RESET</button>
        </div>
    );
  }
}


function Grid({ x, result, grid, pattern, handleClick}) {
  if(result === null)
  {
    return (
      <div>
      <center><h1>{x?'X':'O'}'s Turn</h1></center>
      <div className="grid-container">
      {
        grid.map((val, i) => {
          return (
            <div className="grid-item hover" onClick={() => handleClick(i)}>{grid[i]}</div>
          );
        })
      }
      </div>
      </div>
    )
  }

  return (
    <div>
    <center><Finish result={result} /></center>
    <div className="grid-container">
    {
      grid.map((val, i) => {
        let gridClass = "grid-item"
        if(pattern!=null && pattern.includes(i)){
          gridClass = "gsel"
        }
        
        return(
          <div className={gridClass} onClick={() => handleClick(i)}>{grid[i]}</div>
        );
      })
    }
    </div>
    </div>
  );
}


function Finish({ result }) {
  if(result === 'D')
  {
    return(<h1 className="over">Draw!</h1>)
  }

  if(result === 'X')
  {
    return(<h1 className="over">X Wins!</h1>)
  }

  if(result === 'O')
  {
    return(<h1 className="over">O Wins!</h1>)
  }
}

export default TicTacToe;