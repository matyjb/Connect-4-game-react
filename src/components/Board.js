import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

class Board extends Component {
  render() {
    let boardRender = [];
      this.props.board.forEach(boardRow => {
      let row = [];
      boardRow.forEach(field => {
        row.push(
          <Field color={field}/>
        )
      });
      boardRender.push(
        <div className="row">{row}</div>
      );
    });


    return (
      <div>
        {boardRender}
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.array.isRequired,
}

export default Board;
