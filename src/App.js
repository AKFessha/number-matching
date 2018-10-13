import React, { Component } from "react";
import NumberMatching from "./components/NumberMatching/NumberMatching";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Number Matching </header>
        <NumberMatching />
      </div>
    );
  }
}

export default App;
