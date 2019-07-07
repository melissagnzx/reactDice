import React, { Component } from "react";
import "./Dice.css";

// Using fontAwesome for dice icons
class Dice extends Component {
  render() {
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${this.props.rolling &&
          "shaking"}`}
      />
    );
  }
}

export default Dice;
