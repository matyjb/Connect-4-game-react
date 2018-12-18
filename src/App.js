import React, { Component } from 'react';
import Board from './components/Board';

class App extends Component {
  render() {
  var b = [
    ["blank", "blank", "blank"],
    ["blank", "red", "blue"],
    ["red", "red", "blue"],
    ["red", "red", "blue"],
  ]
    return (
      <div>
        <Board board={b}></Board>
      </div>
    );
  }
}

export default App;
