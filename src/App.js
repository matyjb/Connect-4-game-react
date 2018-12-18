import React, { Component } from 'react';
import Board from './components/Board';
import "./components/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardFields: this.generateBoard(6,7),
      currentPlayer: "blue",
    }
  }

  generateBoard(rows, columns) {
    let board = Array(rows);
    for (let i = 0; i < board.length; i++) {
      board[i] = Array(columns);
    }

    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        board[r][c] = "blank";
      }
    }
    return board;
  }

  handleClick(rowIndex) {
    for (let i = this.state.boardFields.length - 1; i >= 0; i--){
      const element = this.state.boardFields[i][rowIndex];
      if( element === "blank") {
        let boardFieldsCopy = this.state.boardFields;
        boardFieldsCopy[i][rowIndex] = this.state.currentPlayer;
        this.setState({boardFields: boardFieldsCopy});
        this.state.currentPlayer == "blue" ? this.setState({currentPlayer: "red"}) : this.setState({currentPlayer: "blue"});
        break;
      }
    }
  }


  generateButtonsRow(){
    let row = [];
    for (let i = 0; i < this.state.boardFields[0].length; i++) {
      row.push(<button className="cell" style={{width:"64px"}} onClick={() => {this.handleClick(i)}}>{i}</button>);
    }
    return (
      <div className="row">
        {row}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.generateButtonsRow()}
        <Board board={this.state.boardFields}></Board>
      </div>
    );
  }
}

export default App;
