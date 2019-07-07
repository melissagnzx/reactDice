import React, { Component } from "react";
import Dice from "./Dice";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dice face="five" />
        <Dice face="six" />
        <Dice face="two" />
        <Dice face="three" />
        <Dice face="one" />
      </div>
    );
  }
}

export default App;
