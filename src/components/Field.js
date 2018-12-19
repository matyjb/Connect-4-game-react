import React, { Component } from 'react';
import redImage from '../assets/red.png';
import blueImage from '../assets/blue.png';
import blankImage from '../assets/blank.png';
import PropTypes from 'prop-types';

var containerStyle = {
    border: "1px solid #999",
    float: "left",
    height: "64px",
    width: "64px",
}

var imgStyle = {
  width: "100%", 
  height: "100%"
}

class Field extends Component {
  render() {
    return (
      <div className="cell" style={containerStyle}>
        {this.props.color === "red" && <img src={redImage} style={imgStyle}></img>}
        {this.props.color === "blue" && <img src={blueImage} style={imgStyle}></img>}
        {this.props.color === "blank" && <img src={blankImage} style={imgStyle}></img>}
      </div>
    );
  }
}

Field.propTypes = {
  color: PropTypes.oneOf(['blue', 'red', 'blank']).isRequired
}

export default Field;
